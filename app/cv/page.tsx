"use client";
import { Header } from "@/components/header";
import { Footer } from "../page";
import { Blockquote, H1, H2, H3, H4, Muted, P } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function CV(){
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
        <Button className="fixed bottom-6 right-6 shadow-lg md:m-10 m-0" variant="ghost" size="icon" onClick={scrollToTop}>
          <ChevronUp />
        </Button>
      )}

      <Header path="CV"/>

      <div className="mx-[10vw] flex flex-col mt-10 gap-10">
        <div className="w-full flex flex-col items-center gap-2">
          <div className="flex flex-row gap-2">
            <H1 className="font-light">Jakob-Elias</H1>
            <H1 className="font-bold">Frenzel</H1>
          </div>
          <H4 className="text-center">Electronics Engineer &bull; Mixed Signal</H4>
          <div className="flex flex-row items-center gap-1">
            <CiLocationOn strokeWidth={0.8} className="mb-0.5"/>
            <P>Vienna, Austria</P>
          </div>
          <div className="flex flex-row gap-5 h-6 items-center">
            <Link target="_blank" href="https://github.com/jakobgif" prefetch={false}>
              <div className="flex flex-row items-center gap-1">
                <FaGithub />
                <P>jakobgif</P>
              </div>
            </Link>
            <Separator orientation="vertical" />
            <Link target="_blank" href="https://www.linkedin.com/in/frenzel-jakob" prefetch={false}>
              <div className="flex flex-row items-center gap-1">
                <FaLinkedin />
                <P>frenzel-jakob</P>
              </div>
            </Link>
          </div>
          <Blockquote className="text-center mt-5">"per aspera ad astra" &ndash; "To the stars through difficulties."</Blockquote>
        </div>

        <section className="flex flex-col">
          <H3>Education</H3>
          <Separator className="mb-2"/>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row justify-between items-center">
                <P className="font-semibold">University of Applied Sciences Technikum Wien</P>
                <Muted>Sept. 2024 - Today</Muted>
              </div>
              <P className="ml-5">Master of Science, Embedded Systems</P>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row justify-between items-center">
                <P className="font-semibold">University of Applied Sciences Technikum Wien</P>
                <Muted>Sept. 2022 - June 2024</Muted>
              </div>
              <P className="ml-5">Bachelor of Science in Engineering, Electronic Engineering</P>
              <Muted className="ml-5">Grade: Passed with distinction</Muted>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row justify-between items-center">
                <P className="font-semibold">HTL Rennweg, Department of Mechatronics</P>
                <Muted>Sept. 2016 - June 2021</Muted>
              </div>
              <P className="ml-5">Technical upper-level secondary school</P>
              <Muted className="ml-5">Grade: Passed with distinction</Muted>
            </div>
          </div>
        </section>

        <section className="flex flex-col">
          <H3>Skills</H3>
          <Separator className="mb-2"/>
          lorem ipsum
        </section>

        <section className="flex flex-col">
          <H3>Experience</H3>
          <Separator className="mb-2"/>
          lorem ipsum
        </section>
      </div>
      <Footer/>
    </div>
  )
}