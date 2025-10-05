import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PortfolioItemPage({ params }: { params: { slug: string } }) {
  const item = portfolioItems.find((p) => p.order.toString() === params.slug);

  if (!item) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === `portfolio-${item.order}`);
  
  const renderGallery = (slug: string) => {
    let galleryImages: typeof PlaceHolderImages = [];
    if (slug === '1') {
      galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('genetics-'));
    } else if (slug === '2') {
      galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('kidney-'));
    }

    if (galleryImages.length > 0) {
      return (
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          {galleryImages.map((img, index) => (
            <div key={img.id} className="relative overflow-hidden rounded-lg shadow-lg bg-card">
              <a href={img.imageUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                 <Image
                    src={img.imageUrl}
                    alt={img.description}
                    data-ai-hint={img.imageHint}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full"
                />
              </a>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

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
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {params.slug === '2' ? (
              renderGallery(params.slug)
            ) : (
              image && (
                <div className="relative my-8 h-80 w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )
            )}
            
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
