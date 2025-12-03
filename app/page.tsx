"use client";
import { H1, H2, H3, P, Blockquote,Muted, H4, Lead, Large } from '@/components/ui/typography'
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MenuIcon, ChevronUp, Space } from "lucide-react"
import { useState, useEffect } from "react";
import { AltiumBadge, MixedSignalBadge, NextJsBadge } from '@/components/ui/skill_badges';
import Link from "next/link"
import { FiExternalLink } from 'react-icons/fi';
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot, FaSquareInstagram } from 'react-icons/fa6';

export default function Home() {
  const [showTop, setShowTop] = useState(false);

  //view scroll to top button when scolling more than 100px
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showTop && (
        <Button className="fixed bottom-6 right-6 shadow-lg" variant="ghost" size="icon" onClick={scrollToTop}>
          <ChevronUp />
        </Button>
      )}
      <Header/>
      <div className="mx-[10vw] flex flex-col gap-5">
        <section id="about" className="mt-30 flex flex-col">
          <div className="flex">
            <H1 className="text-rainbow">Hi,&nbsp;</H1>
            <H1>I am Jakob</H1>
          </div>
          <P className="max-w-[800px] mt-6">
            I'm an Electronics and Embedded Systems Engineer based in Vienna, Austria. My primary focus lies on hardware design and development.
            In addition to my experience in hardware, I am also highly proficient in firmware and software development.
            This allows me to work seamlessly across the full scope of embedded systems.
          </P>
        </section>

        <section id="projects" className="pt-5 flex flex-col gap-5">
          <H3>Projects</H3>
          <ProjectItem title="This website" description="Lorem ipsum" url="https://github.com/jakobgif" badges={[
            <NextJsBadge/>,
          ]}/>
          <ProjectItem title="Hardware" description="Lorem ipsum" url="" badges={[
            <AltiumBadge/>,
            <MixedSignalBadge/>,
          ]}/>
        </section>

        <EssayLinks/>

        <section id="contact" className="pt-5 flex flex-col gap-5">
          <H3>Get to know me</H3>
          <div className="flex flex-row items-center gap-1.5 ml-0.5"><FaLocationDot /><Large>Vienna, Austria</Large></div>
          <div className="flex flex-row flex-wrap gap-2">
            <Link href="https://github.com/jakobgif" prefetch={false}><FaGithubSquare size={64}/></Link>
            <Link href="https://www.linkedin.com/in/frenzel-jakob" prefetch={false}><FaLinkedin size={64}/></Link>
            <Link href="mailto:contact@jakobfrenzel.com" prefetch={false}><FaEnvelopeSquare size={64}/></Link>
            {/* <FaSquareInstagram size={64}/> */}
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

function Header(){
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full flex items-center justify-between pl-[10vw] py-4 pr-4 top-0">
      <H2>Jakob Frenzel</H2>

      {/* Desktop navigation */}
      <div className="hidden md:flex">
        <nav className="flex gap-3">
          <Button variant="ghost" onClick={() => scrollTo("projects")}>
            Projects
          </Button>
          <Button variant="ghost" onClick={() => scrollTo("essays")}>
            Essays
          </Button>
          <Button variant="ghost" onClick={() => scrollTo("contact")}>
            Contact
          </Button>
        </nav>
      </div>

      {/*different ui for mobile*/}
      {/* <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-auto min-w-[200px] my-6 flex flex-col justify-center items-center gap-4"
          >
            <SheetTitle className="sr-only">Scroll to</SheetTitle>
            <nav className="flex flex-col gap-3">
              <SheetClose asChild>
                <Button variant="ghost" onClick={() => scrollTo("projects")}>
                  Projects
                </Button>
              </SheetClose>
              <Button variant="ghost" onClick={() => scrollTo("essays")}>
                Essays
              </Button>
              <Button variant="ghost" onClick={() => scrollTo("contact")}>
                Contact
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div> */}
    </header>
  )
}

export function Footer(){
  return (
    <div className="mx-[10vw] pt-20 pb-100 flex flex-col gap-4 items-center">
      <Blockquote className="text-center">per aspera ad astra</Blockquote>
      <Muted className="text-center">Copyright © 2025</Muted>
    </div>
  )
}

interface ProjectItemProps {
  title: string
  description: string
  url: string
  badges: React.ReactNode[]
}
function ProjectItem({ title, description, url, badges }: ProjectItemProps){
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction>
          <Badge variant="outline" asChild>
            <Link href={url} prefetch={false}><FiExternalLink />Learn more</Link>
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent>
        <p>{description}</p>
      </CardContent>

      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, i) => (
            <div key={i}>{badge}</div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

import * as lorem from "@/app/essays/content/lorem";
const essays = [
  { slug: "lorem", title: lorem.title },
];
function EssayLinks() {
  return (
    <section id="essays" className="pt-5 flex flex-col gap-5">
      <H3>Essays</H3>
      {essays.map((essay) => (
        <Link key={essay.slug} href={`/essays/${essay.slug}`} prefetch={true}><Button variant="link" className="p-0"><Large>{essay.title}</Large></Button></Link>
      ))}
    </section>
  );
}
