import { Badge } from "@/components/ui/badge"
import { SiAltiumdesigner } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";

export function MixedSignalBadge() {
  return <Badge style={{ backgroundColor: "var(--chart-1)" }} variant="secondary"><MdOutlineDesignServices/>Mixed Signal Design</Badge>
}

export function AltiumBadge() {
  return <Badge style={{ backgroundColor: "var(--chart-2)" }} variant="secondary"><SiAltiumdesigner/>Altium Designer</Badge>
}

export function NextJsBadge() {
  return <Badge style={{ backgroundColor: "var(--chart-3)" }} variant="secondary"><TbBrandNextjs/>Next.js</Badge>
}