"use client";

import { useState, useRef, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2, CheckCircle, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const formSchema = z.object({
  feedback: z.string().min(10, {
    message: "Feedback must be at least 10 characters.",
  }),
  company: z.string().optional(), // Honeypot field
});

type SubmissionStatus = "idle" | "sending" | "success" | "error";

export default function FeedbackRibbon() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: "",
      company: "",
    },
  });

  useEffect(() => {
    if (status === 'success' && successRef.current) {
        successRef.current.focus();
    }
  }, [status]);
  
  useEffect(() => {
    if (!isSheetOpen) {
        // Reset form state when sheet is closed
        setTimeout(() => {
            form.reset();
            setStatus("idle");
            setError(null);
        }, 300); // Delay to allow sheet to animate out
    }
  }, [isSheetOpen, form]);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.company) {
      console.log("Honeypot field filled, treating as spam.");
      setStatus("success");
      return;
    }
    
    setStatus("sending");
    setError(null);
    
    const formData = new FormData();
    formData.append("feedback", values.feedback);
    formData.append("_subject", "New Portfolio Feedback!");

    try {
        const response = await fetch("https://formspree.io/f/mdkwdeod", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            setStatus("success");
        } else {
            const data = await response.json();
            setError(data.error || "An unknown error occurred.");
            setStatus("error");
        }
    } catch (e) {
        setError("A network error occurred. Please try again.");
        setStatus("error");
    }
  }
  
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
            <Button className="fixed top-1/2 right-0 z-50 w-[11rem] -translate-y-1/2 rotate-[270deg] origin-bottom-right rounded-t-lg rounded-b-none">
                <MessageSquare className="mr-2 h-4 w-4 -rotate-[270deg]" />
                Feedback
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Share Your Feedback</SheetTitle>
                <SheetDescription>
                    Your insights are valuable! How can I improve this portfolio?
                </SheetDescription>
            </SheetHeader>
            <div className="py-4">
                {status === "success" ? (
                    <div 
                        ref={successRef}
                        tabIndex={-1}
                        aria-live="polite"
                        className="text-center p-4 bg-background rounded-lg flex flex-col items-center gap-4 outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                        <CheckCircle className="w-12 h-12 text-primary" />
                        <h3 className="text-xl font-semibold">Thank you!</h3>
                        <p className="text-muted-foreground">Your feedback has been sent successfully.</p>
                         <SheetClose asChild>
                            <Button type="button" variant="outline">Close</Button>
                        </SheetClose>
                    </div>
                ) : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem className="hidden" aria-hidden="true">
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <Input {...field} tabIndex={-1} autoComplete="off" />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="feedback"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Your Feedback</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="What did you like? What could be better?"
                                            className="min-h-[150px]"
                                            {...field}
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {error && (
                                <div role="alert" aria-live="assertive" className="text-sm text-destructive font-medium">
                                    {error}
                                </div>
                            )}

                            <div className="flex justify-end gap-2">
                                <SheetClose asChild>
                                    <Button type="button" variant="outline">Cancel</Button>
                                </SheetClose>
                                <Button type="submit" disabled={status === "sending"}>
                                    {status === "sending" ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Feedback"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                )}
            </div>
        </SheetContent>
    </Sheet>
  );
}
