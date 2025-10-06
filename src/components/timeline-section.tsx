import React from 'react';
import { GraduationCap, Briefcase, Trophy } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';


const educationData = [
  {
    title: "M.Sc. Biotechnology",
    institution: "Mahatma Gandhi University",
    duration: "2018–2020",
    status: "First Rank, Distinction",
    inProgress: false,
    icon: GraduationCap,
    isRankHolder: true,
  },
  {
    title: "Bachelor of Education (B.Ed.)",
    institution: "University of Calicut",
    duration: "2020–2022",
    status: "First Class, Distinction",
    inProgress: false,
    icon: GraduationCap,
  },
  {
    title: "B.Sc. Biotechnology",
    institution: "University of Calicut",
    duration: "2015–2018",
    status: "First Class, Distinction",
    inProgress: false,
    icon: GraduationCap,
  },
];

const experienceData = [
  {
    title: "Cambridge IGCSE Biology & Science Teacher",
    institution: "AIMEE International School",
    duration: "2023–April 2025",
    years: "2 Years",
    status: "",
    inProgress: false, 
    icon: Briefcase,
  },
  {
    title: "Toward Ontario Classrooms",
    institution: "On Track: OCT- Licensure",
    duration: "",
    status: "",
    inProgress: true,
    icon: Briefcase,
  },
];


const TimelineCard = ({ item }: { item: (typeof educationData[0] | typeof experienceData[0]) & { isRankHolder?: boolean, years?: string } }) => {
    const rankImages = PlaceHolderImages.filter(p => p.id.startsWith('rank-holder-'));

    return (
    <div className="timeline-item">
        <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
                <item.icon className="h-6 w-6" />
            </div>
            <div className='flex-1'>
                <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold font-headline">{item.title}</h3>
                    {item.years && <Badge variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">{item.years}</Badge>}
                </div>
                <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                {item.duration && <p className="text-sm text-muted-foreground">{item.duration}</p>}
                {item.status && <p className="text-sm text-muted-foreground mt-1">{item.status}</p>}
                
                {item.inProgress && (
                    <span className="mt-2 inline-block px-2 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                        In progress
                    </span>
                )}

                {item.isRankHolder && (
                     <AlertDialog>
                      <AlertDialogTrigger asChild>
                         <Button variant="outline" size="sm" className="mt-3 gap-2">
                            <Trophy className="h-4 w-4 text-amber-500 animate-wiggle" />
                            View Proof
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>First Rank - M.Sc. Biotechnology</AlertDialogTitle>
                        </AlertDialogHeader>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose max-h-[60vh] overflow-y-auto">
                            {rankImages.map((image) => (
                                <div key={image.id} className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-auto">
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        data-ai-hint={image.imageHint}
                                        width={1080}
                                        height={810}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                         <AlertDialogCancel>Close</AlertDialogCancel>
                      </AlertDialogContent>
                    </AlertDialog>
                )}
            </div>
        </div>
    </div>
    )
};


export default function TimelineSection() {
  return (
    <section id="timeline" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
            My Road So Far: From Foundations to Future Goals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Education Column */}
            <div className="space-y-8">
                 <h3 className='text-2xl font-headline font-bold flex items-center gap-3 justify-center md:justify-start'>
                    <GraduationCap className="h-7 w-7 text-primary" />
                    Education
                </h3>
                {educationData.map((item, index) => (
                    <TimelineCard key={index} item={item} />
                ))}
            </div>

            {/* Experience Column */}
            <div className="space-y-8">
                <h3 className='text-2xl font-headline font-bold flex items-center gap-3 justify-center md:justify-start'>
                    <Briefcase className="h-7 w-7 text-primary" />
                    Experience
                </h3>
                 {experienceData.map((item, index) => (
                    <TimelineCard key={index} item={item} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
