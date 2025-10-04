"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { summarizeTestimonial } from '@/ai/flows/summarize-testimonials';
import { Button } from './ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { Badge } from './ui/badge';

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const avatar = PlaceHolderImages.find(p => p.id === `testimonial-${testimonial.order}`);
  const authorInitial = testimonial.author.charAt(0);

  const handleSummarize = async () => {
    setIsLoading(true);
    setError('');
    setSummary('');
    try {
      const result = await summarizeTestimonial({ testimonial: testimonial.quote });
      setSummary(result.summary);
    } catch (e) {
      console.error(e);
      setError('Could not generate summary.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="h-full flex flex-col justify-between p-6">
      <CardContent className="p-0 flex-grow">
        <blockquote className="text-lg font-semibold leading-snug">
          “{testimonial.quote}”
        </blockquote>
        {summary && (
          <div className="mt-4 p-3 bg-primary/10 rounded-lg">
             <p className="text-sm text-primary-dark font-medium"><Sparkles className="inline-block w-4 h-4 mr-2 text-primary"/>AI Summary:</p>
            <p className="text-sm text-foreground">{summary}</p>
          </div>
        )}
        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
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
          <Button size="sm" variant="outline" onClick={handleSummarize} disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Summarize
              </>
            )}
          </Button>
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
              In Their Words - Students, Parents, and colleagues speak. Feedback from colleagues and community members who have seen my practice firsthand.
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
