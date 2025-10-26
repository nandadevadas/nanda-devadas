import Image from "next/image";
import { philosophy } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { HelpCircle, Lightbulb, TrendingUp, Map } from "lucide-react";


const FacilitatorContent = () => (
  <div className="space-y-4">
    <p>
      I believe my role isn’t to dictate but to be a positive catalyst, removing barriers, lighting the path, and beginning every unit with a clear real-world why so no student wonders why they’re learning this. I design, not deliver, learning, using phenomenon-driven inquiry and differentiated methods so every learner has a way in and a supported path to success. With clear expectations, timely feedback, and multiple chances to improve, we treat mastery as iterative, and I model curiosity and humility by evolving my practice based on evidence and students’ needs.
    </p>
    <div>
      <p className="font-semibold text-foreground mb-4">My teaching philosophy revolves around what I call the 4 W’s of learning:</p>
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <span><b>Why</b> should students listen to me?</span>
        </li>
        <li className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <span><b>Why</b> should they learn this concept?</span>
        </li>
        <li className="flex items-start gap-3">
          <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <span><b>What</b> change can it bring to their lives?</span>
        </li>
        <li className="flex items-start gap-3">
          <Map className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <span><b>Where</b> can they apply it in the real world?</span>
        </li>
      </ul>
      <p className="mt-4">I believe that when students find relevance, curiosity follows naturally.</p>
    </div>
  </div>
);

export default function PhilosophySection() {
  const philosophyImage = PlaceHolderImages.find(p => p.id === 'philosophy-image');

  return (
    <section id="philosophy" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">My Living Teaching Philosophy- Why & How</h2>
            <div className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed space-y-2">
                <p>
                I don't believe in a rigid, "one-size-fits-all" teaching manual. My philosophy is a living thing. It breathes, changes, and grows every time I learn something new, reflect on a class, or see a student light up with understanding.
                </p>
                <p>
                The educational experience I strive to create is grounded in three essential, interlocking pillars: <b>The Learning Environment</b>, <b>The Facilitator</b>, and <b>The Learners</b>.
                </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-12 py-12 lg:grid-cols-2 lg:gap-16">
          {philosophyImage && (
            <div className="relative flex items-center justify-center">
              <Image  
                src={philosophyImage.imageUrl}
                alt={philosophyImage.description}
                data-ai-hint={philosophyImage.imageHint}
                width={1080}
                height={1080}
                className="rounded-xl object-cover shadow-lg aspect-square"
              />
            </div>
          )}
          <div className="flex flex-col items-center justify-center">
            <Accordion type="single" collapsible className="w-full">
              {philosophy.map((item, index) => (
                <AccordionItem key={item.title} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-2xl font-headline hover:no-underline text-left">
                     <div className="flex items-center gap-4">
                        <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                        <span>{item.title}</span>
                      </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground text-left pl-16">
                    {item.title === "The Facilitator - My Role" ? <FacilitatorContent /> : item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
