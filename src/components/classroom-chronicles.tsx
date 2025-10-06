import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { ImagePlaceholder } from "@/lib/placeholder-images";

interface ClassroomChroniclesProps {
    images: ImagePlaceholder[];
}

export default function ClassroomChronicles({ images }: ClassroomChroniclesProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" size="lg">
          <Camera className="mr-2 h-5 w-5" />
          Classroom Chronicles
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-4xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-headline text-2xl">Classroom Chronicles</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose max-h-[70vh] overflow-y-auto p-1">
          {images.map((image) => (
            <div key={image.id} className="relative w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                width={600}
                height={400}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
        <AlertDialogCancel>Close</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}

    