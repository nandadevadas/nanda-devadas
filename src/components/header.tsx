"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteInfo } from "@/lib/data";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map(link => link.id), { rootMargin: "-100px 0px -40% 0px" });

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = (
    <>
      {navLinks.map((link) => (
        <SheetClose asChild key={link.id}>
          <Link
            href={link.href}
            onClick={handleLinkClick}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary md:text-base lg:text-sm",
              activeId === link.id ? "text-primary" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        </SheetClose>
      ))}
    </>
  );
  
  const desktopNavItems = (
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
            {desktopNavItems}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <VisuallyHidden>
                  <SheetTitle>Mobile Navigation Menu</SheetTitle>
                  <SheetDescription>
                    A list of links to navigate the site.
                  </SheetDescription>
                </VisuallyHidden>
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2 text-lg font-semibold">
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
