import { about, quickFacts } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl md:text-5xl">About Nanda</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {about.paragraph}
            </p>
          </div>
          <div className="flex flex-col gap-6">
             <h3 className="text-2xl font-headline tracking-tighter sm:text-3xl">Quick Facts</h3>
            {quickFacts.map((fact, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-4 flex items-center gap-4">
                  <fact.icon className="w-6 h-6 text-primary" />
                  <p className="text-base text-card-foreground">{fact.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
