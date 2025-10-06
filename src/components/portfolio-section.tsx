"use client";

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info, Camera } from 'lucide-react';
import ClassroomChronicles from './classroom-chronicles';

const tagDefinitions = {
  "Inquiry-based lesson design": "Learning is driven by student questions and exploration, where students actively construct their own knowledge rather than passively receiving facts.",
  "Phenomenon-Driven instruction": "Lessons start with a real-world observable event (a science puzzle) that students work collaboratively to explain, making the science relevant and memorable.",
  "Differentiated Instruction": "Teaching is responsive to the needs of every learner by adjusting the content, process, or product so all students can achieve the same learning goal.",
  "5E model lesson planning": "A structured framework that guides students through five phases of learning—Engage, Explore, Explain, Elaborate, and Evaluate—to build deep conceptual understanding.",
  "IGCSE": "A globally recognized curriculum and examination system focused on developing knowledge, practical skills, and critical thinking essential for success in higher education."
};

type Tag = keyof typeof tagDefinitions;


export default function PortfolioSection() {
  const allTags = Object.keys(tagDefinitions) as Tag[];
  
  const portfolioImages = PlaceHolderImages.filter(p => p.id.startsWith('portfolio-'));
  const classroomImages = PlaceHolderImages.filter(p => p.id.startsWith('classroom-'));

  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Evidence of Practice</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore what learning looked like and why it worked in my classroom & here is “<strong className="font-semibold text-foreground">A quick view of what I bring to your school.</strong>”
            </p>
          </div>
           <div className="py-6">
            <ClassroomChronicles images={classroomImages} />
          </div>
          <div className="flex flex-wrap justify-center gap-2 pb-6 items-center">
            {allTags.map(tag => (
              <Popover key={tag}>
                <PopoverTrigger asChild>
                  <Badge
                    variant='secondary'
                    className="cursor-pointer flex items-center gap-1"
                    role="button"
                  >
                    {tag}
                    <Info className="h-3 w-3 opacity-70" />
                  </Badge>
                </PopoverTrigger>
                <PopoverContent className="w-80 text-sm text-left">
                    <h4 className="font-bold mb-2">{tag}</h4>
                    <p className="text-muted-foreground">{tagDefinitions[tag]}</p>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => {
             const image = portfolioImages.find(img => img.id === `portfolio-${item.order}`);
            return(
            <Card key={item.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {image && (
                 <div className="relative h-48 w-full">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                    />
                 </div>
              )}
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.course} - Grade {item.grade}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-sm text-muted-foreground italic mb-4">"{item.drivingQuestion}"</p>
                <Button asChild className="w-full mt-auto">
                  <Link href={`/work/${item.order}`}>Dive Deeper</Link>
                </Button>
              </CardContent>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}
