/**
 * @file Implements the Submit Artist Page.
 * @description This page orchestrates the multi-step form for artist submissions,
 * managing state, validation, and navigation between steps.
 */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MainLayout } from '@/components/layout/MainLayout';
import { Form } from '@/components/ui/form';
import { SubmissionFormData, submissionSchema, step1Schema, step2Schema, step3Schema, step4Schema } from '@/lib/form-schemas';
import { SubmissionFormLayout } from '@/components/features/submission/SubmissionFormLayout';
import { Step1BasicInfo } from '@/components/features/submission/steps/Step1BasicInfo';
import { Step2ArtistTypes } from '@/components/features/submission/steps/Step2ArtistTypes';
import { Step3IdentityAttributes } from '@/components/features/submission/steps/Step3IdentityAttributes';
import { Step4SocialLinks } from '@/components/features/submission/steps/Step4SocialLinks';
import { Step5ReviewSubmit } from '@/components/features/submission/steps/Step5ReviewSubmit';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// Define the steps of the form
const steps = [
  {
    title: 'Basic Information',
    description: "Let's start with the essentials.",
    component: Step1BasicInfo,
    schema: step1Schema,
  },
  {
    title: 'Artist Types',
    description: 'What kind of artist are you? Select all that apply.',
    component: Step2ArtistTypes,
    schema: step2Schema,
  },
  {
    title: 'Identity & Attributes (Optional)',
    description: 'Share more about yourself. All fields are optional and have visibility controls.',
    component: Step3IdentityAttributes,
    schema: step3Schema,
  },
  {
    title: 'Social & External Links',
    description: 'Connect your audience to your platforms.',
    component: Step4SocialLinks,
    schema: step4Schema,
  },
  {
    title: 'Review & Submit',
    description: 'One last look before your profile goes live for review.',
    component: Step5ReviewSubmit,
    schema: z.object({}), // No validation needed for review step
  },
];
export function SubmitArtistPage(): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<SubmissionFormData>({
    resolver: zodResolver(submissionSchema),
    mode: 'onChange',
    defaultValues: {
      types: [],
      socials: {},
    },
  });
  const { trigger, handleSubmit } = form;
  const isSubmitting = form.formState.isSubmitting;
  const handleNext = async () => {
    const currentSchema = steps[currentStep].schema;
    const fields = Object.keys(currentSchema.shape);
    const isValid = await trigger(fields as any, { shouldFocus: true });
    if (isValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit(onSubmit)();
      }
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const onSubmit = (data: SubmissionFormData) => {
    console.log('Form Submitted:', data);
    // Here you would typically send the data to a backend API.
    // For this project, we'll just show a success message.
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return (
      <MainLayout>
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
          <Card className="w-full max-w-lg text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Submission Successful!</CardTitle>
              <CardDescription>
                Thank you for submitting your profile. It is now pending review by our team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">You will be notified once your profile is approved.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/">Back to Directory</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/request-verification">Request Verification</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }
  const CurrentStepComponent = steps[currentStep].component;
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()}>
            <SubmissionFormLayout
              currentStep={currentStep}
              totalSteps={steps.length}
              title={steps[currentStep].title}
              description={steps[currentStep].description}
              onBack={handleBack}
              onNext={handleNext}
              isFirstStep={currentStep === 0}
              isLastStep={currentStep === steps.length - 1}
              isSubmitting={isSubmitting}
            >
              <CurrentStepComponent form={form} />
            </SubmissionFormLayout>
          </form>
        </Form>
      </div>
    </MainLayout>
  );
}