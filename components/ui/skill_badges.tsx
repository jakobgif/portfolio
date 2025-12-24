import { Badge } from "@/components/ui/badge"
import { SiAltiumdesigner, SiTailwindcss } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";

export function MixedSignalBadge() {
  return <Badge style={{ backgroundColor: "var(--chart-1)" }} variant="secondary"><MdOutlineDesignServices className="text-white"/><text className="text-white">Mixed Signal Design</text></Badge>
}

export function AltiumBadge() {
  return <Badge style={{ backgroundColor: "var(--chart-2)" }} variant="secondary"><SiAltiumdesigner className="text-white"/><text className="text-white">Altium Designer</text></Badge>
}

export function NextJsBadge() {
  return <Badge style={{ backgroundColor: "var(--chart-3)" }} variant="secondary"><TbBrandNextjs className="text-white"/><text className="text-white">Next.js</text></Badge>
}

export function TailwindBadge() {
  return <Badge style={{ backgroundColor: "var(--chart-4)" }} variant="secondary"><SiTailwindcss className="text-white"/><text className="text-white">Tailwind CSS</text></Badge>
}