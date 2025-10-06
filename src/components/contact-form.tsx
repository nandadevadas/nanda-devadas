"use client"

import { useState, useRef, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  reason: z.string({
    required_error: "Please select a reason for contacting.",
  }),
  organization: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  company: z.string().optional(), // Honeypot field
})

type SubmissionStatus = "idle" | "sending" | "success" | "error";

interface FormSpreeError {
    code: string;
    message: string;
    field?: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
      company: "",
    },
  });

  useEffect(() => {
    if (status === 'success' && successRef.current) {
        successRef.current.focus();
    }
  }, [status]);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Honeypot check
    if (values.company) {
      console.log("Honeypot field filled, treating as spam.");
      setStatus("success");
      form.reset();
      return;
    }
    
    setStatus("sending");
    setError(null);
    
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
        if (value) {
            formData.append(key, value);
        }
    });
    formData.append("_subject", "Portfolio Contact — Nanda Dev");

    try {
        const response = await fetch("https://formspree.io/f/mdkwdeod", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus("success");
            form.reset();
        } else {
            const data = await response.json();
            if (data.errors && Array.isArray(data.errors)) {
                const formErrors = data.errors as FormSpreeError[];
                const errorMessage = formErrors.map(e => e.field ? `${e.field}: ${e.message}` : e.message).join(", ");
                setError(`Submission failed: ${errorMessage}`);
            } else {
                setError(data.error || "An unknown error occurred.");
            }
            setStatus("error");
        }
    } catch (e) {
        setError("A network error occurred. Please try again.");
        setStatus("error");
    }
  }
  
  if (status === "success") {
    return (
        <div 
          ref={successRef}
          tabIndex={-1}
          aria-live="polite"
          className="text-center p-8 bg-background rounded-lg shadow-md flex flex-col items-center gap-4 outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
            <CheckCircle className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">Thank you for your message!</h3>
            <p className="text-muted-foreground">
                I’ll follow up within 1–2 business days. Replies will come from nandadevadas@gmail.com — please check your spam folder just in case.
            </p>
        </div>
    );
  }


  return (
    <div className="relative">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Honeypot field */}
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
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input placeholder="Your Name" {...field} required />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} required/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Reason for Contact</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} required>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    <SelectItem value="Job Opportunity">Job Opportunity</SelectItem>
                    <SelectItem value="Collaboration Request">Collaboration Request</SelectItem>
                    <SelectItem value="Parent / Guardian Inquiry">Parent / Guardian Inquiry</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
                <FormItem>
                <FormLabel>School / Organization (Optional)</FormLabel>
                <FormControl>
                    <Input placeholder="Your School or Organization" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                    <Textarea placeholder="Your message..." {...field} required/>
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
            
            <Button type="submit" className="w-full" disabled={status === "sending"} style={{ backgroundColor: '#7A8D7D' }}>
            {status === "sending" ? (
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
                </>
            ) : (
                "Send Message"
            )}
            </Button>
        </form>
        </Form>
    </div>
  )
}
