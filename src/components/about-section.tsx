import { about, quickFacts, tagDefinitions } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import { Badge } from './ui/badge';

export default function AboutSection() {
  const strengths = quickFacts.find(fact => fact.id === 'strengths')?.text as (keyof typeof tagDefinitions)[] | undefined;

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">Know Nanda</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {about.paragraph}
            </p>
          </div>
          <div className="flex flex-col gap-6">
             <h3 className="text-2xl font-headline tracking-tighter sm:text-3xl">Professional Snapshot</h3>
            {quickFacts.map((fact, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-4 flex items-start gap-4">
                  <fact.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    {fact.id === 'strengths' && Array.isArray(fact.text) ? (
                      <>
                        <h4 className="font-semibold text-card-foreground mb-2">Strengths</h4>
                        <div className="flex flex-wrap gap-2">
                          {strengths?.map((strength) => (
                            <Popover key={strength}>
                              <PopoverTrigger asChild>
                                <Badge
                                  variant='secondary'
                                  className="cursor-pointer flex items-center gap-1"
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
    </section>
  );
}
