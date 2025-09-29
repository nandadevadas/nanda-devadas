import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Nanda Dev — Secondary Biology Teacher',
  description: 'Inquiry-rich, phenomenon-driven science teaching with visible thinking, clear success criteria, and inclusive practice. GTA-based.',
  openGraph: {
    title: 'Nanda Dev — Secondary Biology Teacher',
    description: 'Inquiry-rich, phenomenon-driven science teaching with visible thinking, clear success criteria, and inclusive practice. GTA-based.',
    url: 'https://nanda-dev-portfolio.web.app', // Placeholder URL
    siteName: 'Nanda Dev Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context":"https://schema.org",
    "@type":"Person",
    "name":"Nanda Dev",
    "jobTitle":"Secondary Biology Teacher",
    "url":"https://nanda-dev-portfolio.web.app", // Placeholder URL
    "sameAs":[
      "https://www.linkedin.com/in/example" // Placeholder
    ]
  };
  
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
