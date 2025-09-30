import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'nanda-portrait');

  return (
    <section id="home" className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {siteInfo.name}
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                {siteInfo.role}
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {siteInfo.heroTagline}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">
                  Request an Interview <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={siteInfo.resumeUrl} download>Download Resume</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={500}
                height={500}
                className="rounded-xl object-cover shadow-lg aspect-square"
              />
            )}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] bg-accent/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
