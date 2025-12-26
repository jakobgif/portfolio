import { Header } from "@/components/header";
import { Footer } from "../page";
import { H3, P } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import NotFound from "../not-found";

export default function CV(){
  return (
    <NotFound></NotFound>
    /*
    <div>
      <Header path="CV"/>

      <div className="mx-[10vw] flex flex-col gap-5 max-w-[600px]">
        <div className="bg-red-500 size-40"></div>

        <section className="flex flex-col">
          <H3>Lorem</H3>
          <P>Lotem</P>
        </section>

        <Separator />

        <section className="flex flex-col">
          <H3>Lorem</H3>
          <P>Lotem</P>
        </section>
      </div>
      
      <Footer/>
    </div>
    */
  )
}