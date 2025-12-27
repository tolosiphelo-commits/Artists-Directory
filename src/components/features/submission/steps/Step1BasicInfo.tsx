/**
 * @file Implements Step 1 of the artist submission form: Basic Info.
 * @description This component collects the artist's name, profile picture URL,
 * location, and a short bio.
 */
import { UseFormReturn } from 'react-hook-form';
import { SubmissionFormData } from '@/lib/form-schemas';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
interface Step1BasicInfoProps {
  form: UseFormReturn<SubmissionFormData>;
}
export function Step1BasicInfo({ form }: Step1BasicInfoProps): JSX.Element {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name / Stage Name</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Vincent van Gogh" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="profilePicture"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Profile Picture URL</FormLabel>
            <FormControl>
              <Input placeholder="https://example.com/your-photo.jpg" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City / Country (Optional)</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Paris, France" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Short Bio (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us a little about yourself (max 200 characters)."
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}