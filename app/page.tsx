"use client";
import { H1, H3, P, Blockquote,Muted, Large } from '@/components/ui/typography'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronUp, MenuIcon, Moon, Sun } from "lucide-react"
import { useState, useEffect, ReactNode } from "react";
import { AltiumBadge, AnalogSignalBadge, GithubActionsBadge, KicadBadge, MixedSignalBadge, NextJsBadge, ReactBadge, RustBadge, TailwindBadge } from '@/components/ui/skill_badges';
import Link from "next/link"
import { FiExternalLink } from 'react-icons/fi';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Header } from '@/components/header';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from 'next-themes';
import { Footer } from '@/components/footer';

export default function Home() {
  const [showTop, setShowTop] = useState(false);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {showTop && (
        <Button className="fixed bottom-6 right-6 shadow-lg md:m-10 m-0" variant="ghost" size="icon" onClick={scrollToTop}>
          <ChevronUp />
        </Button>
      )}

      <Header>
        {/* Desktop navigation */}
        <div className="hidden md:flex">
          <nav className="flex gap-3">
            <Button variant="ghost" onClick={() => scrollTo("projects")}>
              Projects
            </Button>
            {/*<Button variant="ghost" onClick={() => scrollTo("essays")}>
              Essays
            </Button>*/}
            <Button variant="ghost" onClick={() => scrollTo("contact")}>
              Contact
            </Button>
          </nav>
        </div>

        {/*different ui for mobile*/}
        <div className="md:hidden">
          <Sheet open={mobileSheetOpen} onOpenChange={setMobileSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="open sheet menu">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-auto min-w-[200px] flex flex-col justify-center items-center gap-4"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-6"
                onClick={() => toggleTheme()}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              </Button>

              <SheetTitle className="sr-only">Scroll to</SheetTitle>
              <nav className="flex flex-col gap-3">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    scrollTo("projects");
                    setMobileSheetOpen(false);
                  }}
                >
                  Projects
                </Button>

                <Button 
                  variant="ghost" 
                  onClick={() => {
                    scrollTo("contact");
                    setMobileSheetOpen(false);
                  }}
                >
                  Contact
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Header>

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
          <ProjectItem title="Portfolio Website" description={`I created this personal website using Next.js. This website is deployed on Vercel.`}
            url="https://github.com/jakobgif/portfolio"
            linkText="View on GitHub"
            badges={[
            <NextJsBadge/>,
            <ReactBadge/>,
            <TailwindBadge/>,
          ]}/>
          <ProjectItem title="Tick" description={`Tick is a Todo application build in Rust.
            The application consists of a backend that stores items in a database and a frontend that exposes CRUD features to the user. The frontend communicates with the backend via a REST API. The frontend it built using the Tauri framework.`}
            url="https://github.com/jakobgif/tick"
            linkText="View on GitHub"
            badges={[
            <RustBadge/>,
            <GithubActionsBadge/>,
            <ReactBadge/>,
            <TailwindBadge/>,
          ]}/>
          <ProjectItem title="5-Band Constand-Q Audio Equalizer with Multiple-Feedback-Bandpass-Filters" description={`This 5-Band Equalizer is based on the GE 14 Equalizer designed by RANE Corporation in 1991. The Equalizer consists of five bands with fixed frequency and constant bandwidth. The gain of each channel can be adjusted between ±20dB. Furthermore, the EQ contains a discrete class-AB headphone amplifier.
          `} badges={[
            <KicadBadge/>,
            <AnalogSignalBadge/>,
          ]}>
          </ProjectItem>
          <ProjectItem title="Bachelor Project: Modernising the API 500-Series Specification" description={`The API 500 series is a modular interface commonly used in analog audio processing. Developed by Automated Processes Incorporated (API) in the 1970s, it remains popular to this day. However, since then digital components gained in significance in audio processing. This created a gap between the old interface and modern requirements.
            This project aimed to explore the possibilities of expanding and modernising this specification. To achieve this, a concept for such a modernised platform was developed and constructed. Based on this concept, a new specification was proposed.
          `} badges={[
            <AltiumBadge/>,
            <MixedSignalBadge/>,
          ]}/>
        </section>

        {/*<EssayLinks/>*/}

        <section id="contact" className="pt-5 flex flex-col gap-5">
          <H3>Get to know me</H3>
          {/* <Link href={"/cv"} prefetch={true}><Button variant="link" className="p-0"><Large>CV</Large></Button></Link> */}
          <div className="flex flex-row items-center gap-1.5 ml-0.5"><FaLocationDot className="mb-0.5"/><Large>Vienna, Austria</Large></div>
          <div className="flex flex-row flex-wrap gap-2">
            <Link target="_blank" href="https://github.com/jakobgif" prefetch={false} aria-label="GitHub profile of Jakob Frenzel"><FaGithubSquare size={40}/></Link>
            <Link target="_blank" href="https://www.linkedin.com/in/frenzel-jakob" prefetch={false} aria-label="LinkedIn profile of Jakob Frenzel"><FaLinkedin size={40}/></Link>
            {/* <Link href="mailto:contact@jakobfrenzel.com" prefetch={false}><FaEnvelopeSquare size={40}/></Link> */}
            {/* <FaSquareInstagram size={64}/> */}
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

interface ProjectItemProps {
  title: string
  description: string
  url?: string
  badges: React.ReactNode[]
  children?: ReactNode;
  linkText?: string
}

function ProjectItem({ title, description, url, badges, children, linkText="Learn more" }: ProjectItemProps){
  return (
    <Card className="gap-0">
      <CardHeader>
        <div className="flex flex-row justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <CardAction>
            {url && (
              <Badge variant="outline" asChild>
                <Link target="_blank" href={url} prefetch={false}><FiExternalLink />{linkText}</Link>
              </Badge>
            )}
          </CardAction>
        </div>
      </CardHeader>

      <CardContent className="mt-2 flex flex-col gap-2">
        <p className="whitespace-pre-line">{description}</p>
        {children}
      </CardContent>

      <CardFooter>
        <div className="flex flex-wrap gap-2 mt-6">
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
