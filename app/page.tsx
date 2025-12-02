"use client";
import { H1, H2, H3, Blockquote,Muted } from '@/components/ui/typography'
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
import { MenuIcon, ChevronUp, Space } from "lucide-react"
import { useState, useEffect } from "react";

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
      <div className="mx-[10vw]">
        <section id="about" className="my-50 flex">
          <H1 className="text-rainbow">Hi,&nbsp;</H1>
          <H1>I am Jakob</H1>
        </section>

        <section id="projects" className="my-50">
          <H3>Projects</H3>
        </section>

        <section id="essays" className="my-50">
          <H3>Essays</H3>
        </section>

        <section id="contact" className="my-50">
          <H3>Contact</H3>
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

function Footer(){
  return (
    <div className="mx-[10vw] pb-100 flex flex-col gap-4 items-center">
      <Blockquote className="text-center">per aspera ad astra</Blockquote>
      <Muted className="text-center">Copyright © 2025</Muted>
    </div>
  )
}
