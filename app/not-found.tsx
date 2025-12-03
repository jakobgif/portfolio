import { Badge } from "@/components/ui/badge";
import { H2 } from "@/components/ui/typography";
import Link from "next/link";
import { TbFileSad } from "react-icons/tb";
import { TbArrowBackUp } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TbFileSad size={100} className="mb-10"/>
      <H2>Page not found</H2>
      <Badge variant="outline" className="mt-5" asChild>
        <Link href="/" prefetch={true}><TbArrowBackUp />bring me back to safety</Link>
      </Badge>
    </div>
  )
}