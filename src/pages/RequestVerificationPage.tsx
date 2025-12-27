/**
 * @file Implements the Request Verification Page.
 * @description This page provides a simple form for artists to request
 * verification from the platform administrators.
 */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
// Zod schema for the verification request form.
const verificationSchema = z.object({
  artistName: z.string().min(2, 'Please enter your artist name.'),
  justification: z.string().min(50, 'Please provide a justification of at least 50 characters.'),
});
type VerificationFormData = z.infer<typeof verificationSchema>;
export function RequestVerificationPage(): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
    mode: 'onChange',
  });
  const onSubmit = (data: VerificationFormData) => {
    console.log('Verification Request Submitted:', data);
    // In a real application, this would send the data to a backend.
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return (
      <MainLayout>
        <div className="container mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
          <Card className="w-full text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Request Sent!</CardTitle>
              <CardDescription>
                Your verification request has been submitted for review.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Our team will review your request and you will be notified of the outcome.</p>
              <Button asChild className="mt-6">
                <Link to="/">Back to Directory</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div className="container mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Request Verification</CardTitle>
                <CardDescription>
                  Please provide a brief justification for your verification request. Explain why you believe you meet our criteria (e.g., public presence, notable achievements).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="artistName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Artist Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name / Stage Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="justification"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Justification</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Provide links to press, articles, or explain your public presence..."
                          className="resize-y min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  Submit Request
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </MainLayout>
  );
}