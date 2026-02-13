import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ditherImage } from "@/lib/dither"

const FOREGROUND = "#fafafa"
const BACKGROUND = "#0a0a0a"

export const alt = "Jakob F. | Portfolio"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  const [geistRegular, geistSemiBold, ditheredPng] = await Promise.all([
    readFile(join(process.cwd(), "assets/Geist-Regular.ttf")),
    readFile(join(process.cwd(), "assets/Geist-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/mountains.png")).then((buf) =>
      ditherImage(buf, {
        invert: true,
        gridSize: 5,
        threshold: 0.6,
        foreground: FOREGROUND,
        background: BACKGROUND,
      }),
    ),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: BACKGROUND,
          fontFamily: "Geist",
        }}
      >
        <img
          src={`data:image/png;base64,${ditheredPng.toString("base64")}`}
          width={1200}
          height={630}
          alt=""
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <h1
          style={{
            fontSize: 100,
            fontWeight: 600,
            letterSpacing: "-0.025em",
            color: FOREGROUND,
            position: "absolute",
            top: 170,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: 0,
          }}
        >
          Jakob F.
        </h1>

        <p
          style={{
            fontSize: 32,
            color: FOREGROUND,
            position: "absolute",
            top: 330,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: 0,
          }}
        >
          Electronics & Embedded Systems Engineer
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistRegular,
          weight: 400,
        },
        {
          name: "Geist",
          data: geistSemiBold,
          weight: 600,
        },
      ],
    },
  )
}
