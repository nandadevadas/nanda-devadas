'use server';

/**
 * @fileOverview A flow to summarize testimonials using AI, highlighting key strengths.
 *
 * - summarizeTestimonial - A function that handles the testimonial summarization process.
 * - SummarizeTestimonialInput - The input type for the summarizeTestimonial function.
 * - SummarizeTestimonialOutput - The return type for the summarizeTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTestimonialInputSchema = z.object({
  testimonial: z
    .string()
    .describe('The full text of the testimonial to summarize.'),
});
export type SummarizeTestimonialInput = z.infer<typeof SummarizeTestimonialInputSchema>;

const SummarizeTestimonialOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the testimonial, highlighting the key strengths mentioned.'
    ),
});
export type SummarizeTestimonialOutput = z.infer<typeof SummarizeTestimonialOutputSchema>;

export async function summarizeTestimonial(
  input: SummarizeTestimonialInput
): Promise<SummarizeTestimonialOutput> {
  return summarizeTestimonialFlow(input);
}

const summarizeTestimonialPrompt = ai.definePrompt({
  name: 'summarizeTestimonialPrompt',
  input: {schema: SummarizeTestimonialInputSchema},
  output: {schema: SummarizeTestimonialOutputSchema},
  prompt: `Summarize the following testimonial, highlighting the key strengths mentioned.  The summary should be concise and focus on the positive aspects of the testimonial.\n\nTestimonial: {{{testimonial}}}`,
});

const summarizeTestimonialFlow = ai.defineFlow(
  {
    name: 'summarizeTestimonialFlow',
    inputSchema: SummarizeTestimonialInputSchema,
    outputSchema: SummarizeTestimonialOutputSchema,
  },
  async input => {
    const {output} = await summarizeTestimonialPrompt(input);
    return output!;
  }
);
