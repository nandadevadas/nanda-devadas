import ContactForm from "@/components/contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid items-center justify-center gap-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I’d love to connect and discuss how my skills can benefit your school. Please share a time that works for you.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm lg:max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
