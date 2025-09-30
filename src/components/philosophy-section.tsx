import { philosophy } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">My Living Teaching Philosophy- My Why & My How</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I don't believe in a rigid, "one-size-fits-all" teaching manual. My philosophy is a living thing. It breathes, changes, and grows every time I learn something new, reflect on a class, or see a student light up with understanding.
            </p>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The educational experience I strive to create is grounded in three essential, interlocking pillars: The Learning Environment, The Facilitator, and The Leaners.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 md:grid-cols-3 md:gap-8">
          {philosophy.map((item) => (
            <Card key={item.title} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <item.icon className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
