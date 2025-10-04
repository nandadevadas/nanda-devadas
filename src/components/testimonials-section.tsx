
"use client";

import React, { useState } from 'react';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote, MessagesSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const avatar = PlaceHolderImages.find(p => p.id === `testimonial-${testimonial.order}`);
  const authorInitial = testimonial.author.charAt(0);

  const isLongQuote = testimonial.quote.length > 250; // Threshold for showing "Read More"

  return (
    <Card className="h-full flex flex-col p-6 relative overflow-hidden">
      <Quote className="absolute top-4 left-4 h-12 w-12 text-primary/10 -z-0" />
      <CardContent className="p-0 flex-grow relative z-10">
        <blockquote
          className={cn(
            "text-lg italic font-medium leading-relaxed text-foreground/80 transition-all duration-300",
            !isExpanded && isLongQuote ? "max-h-[150px] overflow-hidden" : "max-h-full"
          )}
        >
          “{testimonial.quote}”
        </blockquote>
         {isLongQuote && !isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-card to-transparent"></div>
        )}
      </CardContent>
      <div className="mt-6 z-10">
        {isLongQuote && (
          <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} className="p-0 h-auto mb-4">
            {isExpanded ? 'Read Less' : 'Read More'}
          </Button>
        )}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar>
              {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.author} data-ai-hint={avatar.imageHint} />}
              <AvatarFallback>{authorInitial}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-card-foreground">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.affiliation}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}


export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl flex items-center gap-3 justify-center">
              <MessagesSquare className="h-8 w-8 text-primary" />
              Testimonials on my Practice
            </h2>
            <p className="max-w-[900px] text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-bold">
              In Their Words - Feedback from Students, Parents and Colleagues who have seen my practice firsthand.
            </p>
          </div>
        </div>
        <div className="py-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1 h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
