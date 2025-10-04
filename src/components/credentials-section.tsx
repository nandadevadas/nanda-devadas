import { credentials, CredentialCategory } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
  Education: GraduationCap,
  Experience: Briefcase,
  "Professional Development": Award,
}

// Helper to check if an item is a sub-category
function isSubCategory(item: any): item is { title: string; items: string[] } {
    return typeof item === 'object' && item !== null && 'title' in item && Array.isArray(item.items);
}

export default function CredentialsSection() {
  return (
    <section id="credentials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Credentials & Training
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A summary of my qualifications, professional development, and teaching status.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12 sm:columns-2 sm:gap-12">
          {credentials.map((category) => {
            const Icon = iconMap[category.title as keyof typeof iconMap] || CheckCircle2;
            const isProfessionalTraining = category.title === "Professional Development";
            
            return (
              <div key={category.title} className={cn("grid gap-4 mb-8 credential-category", isProfessionalTraining && "sm:col-span-1")}>
                <h3 className="flex items-center gap-3 text-xl font-bold font-headline">
                  <Icon className="h-6 w-6 text-primary" />
                  {category.title}
                </h3>
                <div className="grid gap-6 pl-9">
                  {(category.items as any[]).map((item, index) => {
                    if (isSubCategory(item)) {
                      return (
                        <div key={index}>
                          <h4 className="font-semibold text-card-foreground mb-2">{item.title}</h4>
                          <ul className="grid gap-3">
                            {item.items.map((subItem, subIndex) => (
                              <li key={subIndex} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                <span className="text-muted-foreground">{subItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
