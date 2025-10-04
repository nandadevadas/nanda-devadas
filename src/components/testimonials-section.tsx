
"use client";

import React from 'react';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const avatar = PlaceHolderImages.find(p => p.id === `testimonial-${testimonial.order}`);
  const authorInitial = testimonial.author.charAt(0);

  return (
    <Card className="h-full flex flex-col justify-between p-6">
      <CardContent className="p-0 flex-grow">
        <blockquote className="text-lg font-semibold leading-snug">
          “{testimonial.quote}”
        </blockquote>
      </CardContent>
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar>
              {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.author} data-ai-hint={avatar.imageHint} />}
              <AvatarFallback>{authorInitial}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
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
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What Others Are Saying</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              In Their Words - Feedback from Students, Parents and Colleagues who have seen my practice firsthand.
            </p>
          </div>
        </div>
        <div className="py-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
