/**
 * @file Implements Step 4 of the artist submission form: Social Links.
 * @description This component provides input fields for various social media
 * and external links, guided by icons.
 */
import { UseFormReturn } from 'react-hook-form';
import { SubmissionFormData } from '@/lib/form-schemas';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SOCIAL_PLATFORMS } from '@/lib/constants';
import { SocialPlatform } from '@/lib/types';
interface Step4SocialLinksProps {
  form: UseFormReturn<SubmissionFormData>;
}
export function Step4SocialLinks({ form }: Step4SocialLinksProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {SOCIAL_PLATFORMS.map((platform) => (
        <FormField
          key={platform.id}
          control={form.control}
          name={`socials.${platform.id as SocialPlatform}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{platform.name}</FormLabel>
              <FormControl>
                <Input placeholder={`https://${platform.id}.com/...`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
}