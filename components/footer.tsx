import { Blockquote, Muted } from "./ui/typography";

export function Footer(){
  return (
    <div className="mx-[10vw] pt-20 pb-100 flex flex-col gap-4 items-center">
      <Blockquote className="text-center">per aspera ad astra</Blockquote>
      <Muted className="text-center">Copyright © 2025</Muted>
    </div>
  )
}