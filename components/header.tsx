"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { H2 } from "./ui/typography";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Header({ children, path = "/", titleVisibility = "visible" }: { children?: React.ReactNode; path?: string; titleVisibility?: "visible" | "hidden"; }){
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const segments = path.split("/").filter(Boolean);

  const defaultNavigation = (
    <div className="flex flex-row items-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {segments.map((segment, i) => {
            const href = "/" + segments.slice(0, i + 1).join("/");
            const isLast = i === segments.length - 1;

            return (
              <React.Fragment key={i}>
                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );

  return (
    <header className="w-full flex items-center justify-between px-[10vw] py-4 top-0">
      {titleVisibility === "visible" && <Link href="/"><H2>Jakob Frenzel</H2></Link>}
      <div className={`flex flex-row items-center ${titleVisibility === "hidden" ? "w-full justify-between" : ""}`}>
        {children || defaultNavigation}
        <Button variant="outline" size="icon" onClick={() => toggleTheme()} className="ml-10 hidden md:inline-flex">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </div>
    </header>
  )
}