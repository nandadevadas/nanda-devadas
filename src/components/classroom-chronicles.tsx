"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { ImagePlaceholder } from "@/lib/placeholder-images";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";


interface ClassroomChroniclesProps {
  images: ImagePlaceholder[];
}

export default function ClassroomChronicles({ images }: ClassroomChroniclesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogTrigger asChild>
          <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-[#556B2F] text-white hover:bg-[#556B2F]/90">
            <Camera className="mr-2 h-5 w-5" />
            Classroom Chronicles
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-6xl w-full">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-2xl">
              Classroom Chronicles
            </AlertDialogTitle>
            <VisuallyHidden>
              <AlertDialogDescription>
                A scrollable gallery of images from the classroom.
              </AlertDialogDescription>
            </VisuallyHidden>
          </AlertDialogHeader>
          
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-4 p-4 items-center">
              {images.map((image) => (
                <div key={image.id} className="h-72 shrink-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    className="h-full w-auto object-contain rounded-lg"
                    width={300}
                    height={288}
                  />
                </div>
              ))}
            </div>
             <ScrollBar orientation="horizontal" className="h-4" thumbClassName="bg-primary/50" />
          </ScrollArea>

          <AlertDialogCancel onClick={() => setIsModalOpen(false)}>Close</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
