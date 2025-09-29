import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import PhilosophySection from '@/components/philosophy-section';
import PortfolioSection from '@/components/portfolio-section';
import TestimonialsSection from '@/components/testimonials-section';
import CredentialsSection from '@/components/credentials-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <PortfolioSection />
        <TestimonialsSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
