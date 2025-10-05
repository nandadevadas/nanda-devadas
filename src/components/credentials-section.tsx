"use client";

import { credentials } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, GraduationCap, Briefcase, Award, Users, FlaskConical, LifeBuoy } from 'lucide-react';

const categoryIconMap = {
  Education: GraduationCap,
  Experience: Briefcase,
  "Professional Development": LifeBuoy,
}

const subCategoryIconMap = {
  Certifications: Award,
  Workshops: Users,
  "Specialized Training": FlaskConical,
}

// Helper to check if an item is a sub-category
function isSubCategory(item: any): item is { title: string; items: string[] } {
    return typeof item === 'object' && item !== null && 'title' in item && Array.isArray(item.items);
}

export default function CredentialsSection() {
  const educationAndExperience = credentials.filter(c => c.title === 'Education' || c.title === 'Experience');
  const professionalDevelopment = credentials.find(c => c.title === 'Professional Development');

  return (
    <section id="credentials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Credentials & Development
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A summary of my qualifications, professional development, and teaching status.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            {educationAndExperience.map((category) => {
              const Icon = categoryIconMap[category.title as keyof typeof categoryIconMap] || CheckCircle2;
              return (
                <Card key={category.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-xl">
                      <Icon className="h-6 w-6 text-primary" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 pl-8">
                    {(category.items as string[]).map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Right Column */}
          <div>
            {professionalDevelopment && (
               <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-xl">
                      <LifeBuoy className="h-6 w-6 text-primary" />
                      {professionalDevelopment.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-6 pl-8">
                  {(professionalDevelopment.items as any[]).map((item, index) => {
                      if (isSubCategory(item)) {
                          const SubIcon = subCategoryIconMap[item.title as keyof typeof subCategoryIconMap] || CheckCircle2;
                          return (
                            <div key={index} className="space-y-4">
                              <h4 className="font-semibold text-foreground flex items-center gap-2 font-headline">
                                <SubIcon className="h-5 w-5 text-primary" />
                                {item.title}
                              </h4>
                              <ul className="grid gap-3 pl-7">
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
                      return null;
                  })}
                  </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}