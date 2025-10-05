import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const slugToGalleryMap: Record<string, string[]> = {
  '2': ['poop-1', 'poop-2'],
  '5': ['dna-profiling-1', 'dna-profiling-2', 'dna-profiling-3'],
  '6': ['sel-1', 'sel-2'],
};

function renderGallery(slug: string) {
  const imageIds = slugToGalleryMap[slug];
  if (!imageIds) return null;

  const images = imageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  if (images.length === 0) return null;

  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
      {images.map((image, index) => (
        image && (
          <div key={index} className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-auto">
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              width={1080}
              height={810}
              className="object-contain w-full h-full"
            />
          </div>
        )
      ))}
    </div>
  );
}


export default function PortfolioItemPage({ params }: { params: { slug: string } }) {
  const item = portfolioItems.find((p) => p.order.toString() === params.slug);

  if (!item) {
    notFound();
  }

  const detailImageId = `portfolio-${item.order}-detail`;
  const hasDetailImage = PlaceHolderImages.some(img => img.id === detailImageId);
  const imageId = hasDetailImage ? detailImageId : `portfolio-${item.order}`;
  const image = PlaceHolderImages.find(img => img.id === imageId);
  
  const isSpecialSlug = ['3', '4'].includes(params.slug);
  const gallery = renderGallery(params.slug);


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-4 not-prose">
               <Button variant="ghost" asChild className="mb-4 pl-0">
                <Link href="/#work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
                {item.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {item.course} - Grade {item.grade}
              </p>
            </div>
            
            {!gallery && image && (
              <div className={cn("relative my-8 w-full overflow-hidden rounded-lg shadow-lg",
                  isSpecialSlug ? "aspect-auto" : "aspect-[4/3]"
              )}>
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={isSpecialSlug ? 1080 : undefined}
                  height={isSpecialSlug ? 810 : undefined}
                  fill={!isSpecialSlug}
                  className={cn(isSpecialSlug ? "object-contain w-full h-full" : "object-cover")}
                />
              </div>
            )}

            {gallery}
            
            <blockquote className="border-l-4 border-primary bg-muted/20 p-4 italic text-foreground/80">
              "{item.drivingQuestion}"
            </blockquote>

            <h2 className="font-headline">Overview</h2>
            <p>{item.overview}</p>

            <h2 className="font-headline">Learning Objectives</h2>
            <ul className="list-disc pl-6">
                {item.learningObjectives.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>

            <h2 className="font-headline">Key Activities</h2>
            {typeof item.activities === 'string' ? (
              <p>{item.activities}</p>
            ) : (
              <ul className="list-disc pl-6 space-y-2">
                {item.activities.map((activity, i) => (
                  <li key={i}>
                    <strong>{activity.title}:</strong> {activity.description}
                  </li>
                ))}
              </ul>
            )}
            
            <h2 className="font-headline">Assessment &amp; Outcomes</h2>
            <p>{item.assessment}</p>

            <h2 className="font-headline">Reflection</h2>
            <p>{item.reflection}</p>

          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
