"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { H2 } from "./ui/typography";
import React from "react";

export function Header({ children, path = "/" }: { children?: React.ReactNode; path?: string; }){
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
      <H2>Jakob Frenzel</H2>
      {children || defaultNavigation}
    </header>
  )
}