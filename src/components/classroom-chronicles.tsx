"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImagePlaceholder } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

interface ClassroomChroniclesProps {
  images: ImagePlaceholder[];
}

export default function ClassroomChronicles({ images }: ClassroomChroniclesProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (event.key === "ArrowRight") {
          handleNext();
        } else if (event.key === "ArrowLeft") {
          handlePrev();
        } else if (event.key === "Escape") {
          closeCarousel();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  if (!images || images.length === 0) {
    return null;
  }

  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (prevIndex) => (prevIndex! - 1 + images.length) % images.length
      );
    }
  };
  
  const getSpanClass = (index: number) => {
    const pattern = index % 10;
    if (pattern === 0 || pattern === 6) return "col-span-2 row-span-2";
    return "";
  };


  return (
    <>
      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="secondary" size="lg" onClick={() => setIsModalOpen(true)}>
            <Camera className="mr-2 h-5 w-5" />
            Classroom Chronicles
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-6xl w-full">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-2xl">
              Classroom Chronicles
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="masonry-grid max-h-[70vh] overflow-y-auto p-1">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={cn("masonry-item", getSpanClass(index))}
                onClick={() => openCarousel(index)}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
          <AlertDialogCancel onClick={() => setIsModalOpen(false)}>Close</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-in fade-in-0">
          <button
            onClick={closeCarousel}
            className="absolute top-4 right-4 text-white z-20 bg-black/50 rounded-full p-2"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-20 bg-black/50 rounded-full p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-20 bg-black/50 rounded-full p-2"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative max-w-full max-h-full">
            <Image
              src={images[selectedImageIndex].imageUrl}
              alt={images[selectedImageIndex].description}
              data-ai-hint={images[selectedImageIndex].imageHint}
              width={1920}
              height={1080}
              className="object-contain w-auto h-auto max-w-full max-h-[90vh] rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}