/**
 * @file Provides the layout for the multi-step submission form.
 * @description This component wraps the form steps, providing a consistent
 * header with progress indication, a content area for the current step,
 * and a footer with navigation buttons.
 */
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
interface SubmissionFormLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  title: string;
  description: string;
  onBack: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isSubmitting: boolean;
}
export function SubmissionFormLayout({
  children,
  currentStep,
  totalSteps,
  title,
  description,
  onBack,
  onNext,
  isFirstStep,
  isLastStep,
  isSubmitting,
}: SubmissionFormLayoutProps): JSX.Element {
  const progressValue = ((currentStep + 1) / totalSteps) * 100;
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="mb-4">
          <p className="text-sm font-medium text-muted-foreground">
            Step {currentStep + 1} of {totalSteps}
          </p>
          <Progress value={progressValue} className="mt-2" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between">
        {!isFirstStep ? (
          <Button variant="outline" onClick={onBack} disabled={isSubmitting}>
            Back
          </Button>
        ) : (
          <div /> // Placeholder to keep "Next" button on the right
        )}
        <Button onClick={onNext} disabled={isSubmitting}>
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </CardFooter>
    </Card>
  );
}