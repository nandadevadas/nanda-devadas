import { about, quickFacts, tagDefinitions } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info, Paintbrush, Music, ChefHat, Scissors } from 'lucide-react';
import { Badge } from './ui/badge';

const passions = [
    {
      title: "Applied Arts",
      description: "Painting, crafts making, etc.",
      icon: Paintbrush
    },
    {
      title: "Choreography & Movement",
      description: "Dancing.",
      icon: Music
    },
    {
      title: "Gastronomy",
      description: "Cooking and culinary exploration.",
      icon: ChefHat
    },
    {
      title: "Bespoke Design",
      description: "Dress designing.",
      icon: Scissors
    }
];


export default function AboutSection() {
  const strengths = quickFacts.find(fact => fact.id === 'strengths')?.text as (keyof typeof tagDefinitions)[] | undefined;

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">Know Nanda</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {about.paragraph}
              </p>
            </div>
             <div className="space-y-6">
              <h3 className="text-2xl font-headline tracking-tighter sm:text-3xl">Passions Outside the Classroom</h3>
              <ul className="grid gap-4">
                {passions.map((passion, index) => (
                  <li key={index} className="flex items-start gap-3">
                     <passion.icon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                     <div>
                        <span className="font-semibold text-foreground">{passion.title}:</span>{' '}
                        <span className="text-muted-foreground">{passion.description}</span>
                     </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-headline tracking-tighter sm:text-3xl mb-6">Professional Snapshot</h3>
              <div className="flex flex-col gap-6">
                {quickFacts.map((fact, index) => (
                  <Card key={index} className="bg-card">
                    <CardContent className="p-4 flex items-start gap-4">
                      <fact.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        {fact.id === 'strengths' && Array.isArray(fact.text) ? (
                          <>
                            <h4 className="font-semibold text-card-foreground mb-2">Strengths</h4>
                            <div className="flex flex-col gap-2 items-start">
                              {strengths?.map((strength) => (
                                <Popover key={strength}>
                                  <PopoverTrigger asChild>
                                    <Badge
                                      variant='secondary'
                                      className="cursor-pointer flex items-center gap-1 text-left"
                                      role="button"
                                    >
                                      {strength}
                                      <Info className="h-3 w-3 opacity-70" />
                                    </Badge>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-80 text-sm text-left">
                                      <h4 className="font-bold mb-2">{strength}</h4>
                                      <p className="text-muted-foreground">{tagDefinitions[strength]}</p>
                                  </PopoverContent>
                                </Popover>
                              ))}
                            </div>
                          </>
                        ) : (
                          <p className="text-base text-card-foreground pt-1">{fact.text}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
