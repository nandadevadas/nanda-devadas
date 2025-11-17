import Link from "next/link";
import { siteInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
           <Button variant="outline" size="sm" asChild>
            <Link href="/assets/resume/0_resume_Nanda_New_Jobfair.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={siteInfo.social.linkedin} target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`mailto:${siteInfo.email}`} aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
