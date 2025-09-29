"use client";

import Link from "next/link";
import { navLinks, siteInfo } from "@/lib/data";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const activeId = useScrollSpy(navLinks.map(link => link.id), { rootMargin: "-100px 0px -40% 0px" });

  const navItems = (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            activeId === link.id ? "text-primary" : "text-muted-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline">{siteInfo.name}</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navItems}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                    <span className="font-bold font-headline">{siteInfo.name}</span>
                  </Link>
                  {navItems}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
