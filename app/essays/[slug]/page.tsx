import { Footer } from "@/app/page";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { H2, H3, P } from "@/components/ui/typography";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EssayPage({params,}: {params: Promise<{ slug: string }>;}) {
  const { slug } = await params;

  let essay;
  try {
    essay = await import(`../content/${slug}`);
  } catch {
    notFound();
  }

  return (
    <div>
      <header className="w-full flex items-center justify-between pl-[10vw] py-4 pr-4 top-0">
        <H2>Jakob Frenzel</H2>
        <Link href="/" prefetch={true}><Button variant="ghost">Home</Button></Link>
      </header>

      <div className="mx-[10vw] flex flex-col gap-5 max-w-[600px]">
        <section className="pt-5 flex flex-col">
          <H3>{essay.title}</H3>
          <P className="mt-6">{essay.body}</P>
        </section>

        {essay.footnotes && essay.footnotes.length > 0 && (
          <section className="flex flex-col gap-2">
            <Separator />
            <H3 className="pt-2 mb-6">Notes</H3>
            {essay.footnotes.map((fn: { id: number; text: string; }) => (
              <div key={fn.id} className="flex flex-row items-center gap-3">
                <P>{`[${fn.id}]`}</P>
                <P>{fn.text}</P>
              </div>
            ))}
          </section>
        )}
      </div>

      <Footer/>
    </div>
  );
}