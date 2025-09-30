import { about, quickFacts } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const strengthsList = [
  "Inquiry-based lesson design",
  "Phenomenon-Driven instruction",
  "Differentiated Instruction",
  "5E model lesson planning"
];

export default function AboutSection() {
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
                    {fact.id === 'strengths' ? (
                      <>
                        <p className="text-base text-card-foreground font-semibold mb-2">{fact.text}:</p>
                        <ul className="list-disc pl-5 space-y-1 text-base text-card-foreground">
                          {strengthsList.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
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
