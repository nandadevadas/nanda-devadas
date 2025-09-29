"use client"

import type { PortfolioItem } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import { FileText, Image as ImageIcon } from "lucide-react";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{item.title}</DialogTitle>
          <DialogDescription>
            {item.course} - Grade {item.grade}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="font-semibold">Driving Question</h4>
            <p className="text-muted-foreground italic">"{item.drivingQuestion}"</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">What Students Did</h4>
            <p className="text-muted-foreground">{item.whatStudentsDid}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Assessment</h4>
            <p className="text-muted-foreground">{item.assessment}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Artifacts</h4>
            <div className="flex flex-wrap gap-2">
                {item.artifacts.map((artifact, index) => (
                    <Button asChild variant="secondary" key={index}>
                        <Link href={artifact.url} target="_blank">
                            {artifact.type === 'pdf' ? <FileText className="mr-2 h-4 w-4"/> : <ImageIcon className="mr-2 h-4 w-4"/>}
                            {artifact.label}
                        </Link>
                    </Button>
                ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
