"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { portfolioItems } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import PortfolioModal from './portfolio-modal';
import type { PortfolioItem } from "@/lib/data";

export default function PortfolioSection() {
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    portfolioItems.forEach(item => item.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const toggleFilter = (tag: string) => {
    setActiveFilters(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredItems = useMemo(() => {
    if (activeFilters.length === 0) {
      return portfolioItems;
    }
    return portfolioItems.filter(item =>
      activeFilters.every(filter => item.tags.includes(filter))
    );
  }, [activeFilters]);
  
  const portfolioImages = PlaceHolderImages.filter(p => p.id.startsWith('portfolio-'));

  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Evidence on the Table - What learning looked like and why it worked</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore a selection of unit plans, assessments, and student work from my classroom.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 py-6">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={activeFilters.includes(tag) ? 'default' : 'secondary'}
                onClick={() => toggleFilter(tag)}
                className="cursor-pointer"
                role="button"
                aria-pressed={activeFilters.includes(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => {
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
                <Button onClick={() => setSelectedItem(item)} className="w-full mt-auto">View Artifacts</Button>
              </CardContent>
            </Card>
          )})}
        </div>
      </div>
      <PortfolioModal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} item={selectedItem} />
    </section>
  );
}
