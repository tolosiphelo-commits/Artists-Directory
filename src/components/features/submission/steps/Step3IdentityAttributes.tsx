/**
 * @file Implements Step 3 of the artist submission form: Identity & Attributes.
 * @description This component collects optional, self-declared identity and
 * appearance attributes, each with its own visibility control.
 */
import { UseFormReturn } from 'react-hook-form';
import { SubmissionFormData } from '@/lib/form-schemas';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { VISIBILITY_OPTIONS, SKIN_TONES, BODY_TYPES, AGE_RANGES, SEXUAL_ORIENTATIONS } from '@/lib/constants';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
interface Step3IdentityAttributesProps {
  form: UseFormReturn<SubmissionFormData>;
}
export function Step3IdentityAttributes({ form }: Step3IdentityAttributesProps): JSX.Element {
  return (
    <div className="space-y-8">
      {/* Skin Tone Field */}
      <FormField
        control={form.control}
        name="skinTone.value"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Skin Tone</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger><SelectValue placeholder="Select skin tone" /></SelectTrigger>
              </FormControl>
              <SelectContent>
                {SKIN_TONES.map(tone => <SelectItem key={tone} value={tone}>{tone}</SelectItem>)}
              </SelectContent>
            </Select>
            <VisibilityControl form={form} fieldName="skinTone.visibility" />
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Body Type Field */}
      <FormField
        control={form.control}
        name="bodyType.value"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Body Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger><SelectValue placeholder="Select body type" /></SelectTrigger>
              </FormControl>
              <SelectContent>
                {BODY_TYPES.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
              </SelectContent>
            </Select>
            <VisibilityControl form={form} fieldName="bodyType.visibility" />
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Age Range Field */}
      <FormField
        control={form.control}
        name="ageRange.value"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Age Range</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger><SelectValue placeholder="Select age range" /></SelectTrigger>
              </FormControl>
              <SelectContent>
                {AGE_RANGES.map(range => <SelectItem key={range} value={range}>{range}</SelectItem>)}
              </SelectContent>
            </Select>
            <VisibilityControl form={form} fieldName="ageRange.visibility" />
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Sexual Orientation Field */}
      <div className="space-y-4 rounded-md border p-4">
        <FormLabel>Sexual Orientation</FormLabel>
        <div className="grid grid-cols-2 gap-4">
          {SEXUAL_ORIENTATIONS.map((item) => (
            <FormField
              key={item}
              control={form.control}
              name="sexualOrientation.value"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item)}
                      onCheckedChange={(checked) => {
                        const currentValue = field.value || [];
                        return checked
                          ? field.onChange([...currentValue, item])
                          : field.onChange(currentValue.filter((value) => value !== item));
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{item}</FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>
        <FormField
          control={form.control}
          name="selfDescribeOrientation"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Prefer to self-describe?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <VisibilityControl form={form} fieldName="sexualOrientation.visibility" />
      </div>
    </div>
  );
}
// Helper component for visibility radio buttons to keep the main component DRY.
function VisibilityControl({ form, fieldName }: { form: UseFormReturn<SubmissionFormData>, fieldName: `skinTone.visibility` | `bodyType.visibility` | `ageRange.visibility` | `sexualOrientation.visibility` }) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      defaultValue="Private"
      render={({ field }) => (
        <FormItem className="mt-2">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex items-center space-x-4"
            >
              {VISIBILITY_OPTIONS.map(option => (
                <FormItem key={option} className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={option} />
                  </FormControl>
                  <FormLabel className="font-normal text-sm text-muted-foreground">{option}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}