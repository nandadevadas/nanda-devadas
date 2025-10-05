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


const educationData = [
  {
    title: "B.Sc. Biotechnology",
    institution: "University of Calicut",
    duration: "2015–2018",
    status: "First Class, Distinction",
    inProgress: false,
    icon: GraduationCap,
  },
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
];

const experienceData = [
  {
    title: "Cambridge IGCSE Biology & Science Teacher",
    institution: "AIMEE International School",
    duration: "2023–April 2025",
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


const TimelineCard = ({ item }: { item: (typeof educationData[0] | typeof experienceData[0]) & { isRankHolder?: boolean } }) => {
    const rankImages = PlaceHolderImages.filter(p => p.id.startsWith('rank-holder-'));

    return (
    <div className="timeline-item">
        <div className="mb-4 text-primary">
        <item.icon className="h-8 w-8 mx-auto" />
        </div>
        <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
        <p className="text-muted-foreground mb-1">{item.institution}</p>
        <p className="text-sm text-muted-foreground">{item.duration}</p>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
        <span>{item.status}</span>
        {item.isRankHolder && (
             <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="transform transition-transform duration-300 hover:scale-125 focus:scale-125 focus:outline-none">
                  <Trophy className="h-5 w-5 text-amber-500 animate-pulse" />
                  <span className="sr-only">View Award Proof</span>
                </button>
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
        {item.inProgress && (
            <span className="ml-2 inline-block px-2 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
            In progress
            </span>
        )}
        </p>
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
        <div className="timeline-container">
            <div className="timeline-row">
                {educationData.map((item, index) => (
                    <TimelineCard key={index} item={item} />
                ))}
            </div>
            <div className="timeline-row">
                 {experienceData.map((item, index) => (
                    <TimelineCard key={index} item={item} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
