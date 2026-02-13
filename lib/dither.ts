import sharp from "sharp";

const BAYER_MATRIX_4x4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

function parseHex(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

interface DitherOptions {
  gridSize?: number;
  threshold?: number;
  invert?: boolean;
  width?: number;
  height?: number;
  /** Foreground color (dark pixels), hex string. Default "#000000" */
  foreground?: string;
  /** Dark midtone color, hex string. Default "#555555" */
  midtoneDark?: string;
  /** Light midtone color, hex string. Default "#aaaaaa" */
  midtoneLight?: string;
  /** Background color (light pixels), hex string. Default "#ffffff" */
  background?: string;
}

export async function ditherImage(
  imageBuffer: Buffer,
  options: DitherOptions = {},
): Promise<Buffer> {
  const {
    gridSize = 2,
    threshold = 0.5,
    invert = false,
    width,
    height,
    foreground = "#000000",
    midtoneDark = "#555555",
    midtoneLight = "#aaaaaa",
    background = "#ffffff",
  } = options;

  const fg = parseHex(foreground);
  const midD = parseHex(midtoneDark);
  const midL = parseHex(midtoneLight);
  const bg = parseHex(background);

  let pipeline = sharp(imageBuffer);

  if (width && height) {
    pipeline = pipeline.resize(width, height, { fit: "cover" });
  }

  const { data, info } = await pipeline
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data);
  const outPixels = new Uint8Array(info.width * info.height * 4);

  const matrixSize = 4;
  const matrixScale = 16;

  // Step in grid-sized blocks so each cell is a uniform color
  for (let by = 0; by < info.height; by += gridSize) {
    for (let bx = 0; bx < info.width; bx += gridSize) {
      // Sample luminance from the center of the block
      const sx = Math.min(bx + Math.floor(gridSize / 2), info.width - 1);
      const sy = Math.min(by + Math.floor(gridSize / 2), info.height - 1);
      const luminance = pixels[sy * info.width + sx] / 255;

      const matrixX = Math.floor(bx / gridSize) % matrixSize;
      const matrixY = Math.floor(by / gridSize) % matrixSize;
      let ditherThreshold =
        BAYER_MATRIX_4x4[matrixY][matrixX] / matrixScale;
      ditherThreshold =
        ditherThreshold * (1 - threshold) + threshold * 0.5;

      const adjusted = invert ? 1 - luminance : luminance;
      let color: [number, number, number];
      if (adjusted < ditherThreshold * 0.33) {
        color = fg;
      } else if (adjusted < ditherThreshold * 0.66) {
        color = midD;
      } else if (adjusted < ditherThreshold) {
        color = midL;
      } else {
        color = bg;
      }

      // Fill the entire block with the same color
      const endY = Math.min(by + gridSize, info.height);
      const endX = Math.min(bx + gridSize, info.width);
      for (let y = by; y < endY; y++) {
        for (let x = bx; x < endX; x++) {
          const outIdx = (y * info.width + x) * 4;
          outPixels[outIdx] = color[0];
          outPixels[outIdx + 1] = color[1];
          outPixels[outIdx + 2] = color[2];
          outPixels[outIdx + 3] = 255;
        }
      }
    }
  }

  return sharp(Buffer.from(outPixels.buffer), {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}
