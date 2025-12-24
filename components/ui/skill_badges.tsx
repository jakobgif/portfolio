import { Badge } from "@/components/ui/badge"
import { SiAltiumdesigner, SiTailwindcss } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub, FaRust } from "react-icons/fa";

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

export function RustBadge() {
  return <Badge style={{ backgroundColor: "var(--chart-5)" }} variant="secondary"><FaRust className="text-white"/><text className="text-white">Rust</text></Badge>
}

export function GithubActionsBadge() {
  return <Badge style={{ backgroundColor: "var(--chart-6)" }} variant="secondary"><FaGithub className="text-white"/><text className="text-white">GitHub Actions</text></Badge>
}