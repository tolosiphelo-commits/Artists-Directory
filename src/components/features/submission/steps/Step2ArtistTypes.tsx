/**
 * @file Implements Step 2 of the artist submission form: Artist Types.
 * @description This component allows the user to select one or more artist
 * types from a predefined list.
 */
import { UseFormReturn } from 'react-hook-form';
import { SubmissionFormData } from '@/lib/form-schemas';
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ARTIST_TYPES } from '@/lib/constants';
interface Step2ArtistTypesProps {
  form: UseFormReturn<SubmissionFormData>;
}
export function Step2ArtistTypes({ form }: Step2ArtistTypesProps): JSX.Element {
  const selectedTypes = form.watch('types');
  const isOtherSelected = selectedTypes?.includes('Other');
  return (
    <FormField
      control={form.control}
      name="types"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">Artist Type(s)</FormLabel>
            <FormDescription>
              Select all that apply. You must choose at least one.
            </FormDescription>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ARTIST_TYPES.map((item) => (
              <FormField
                key={item}
                control={form.control}
                name="types"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...(field.value || []), item])
                              : field.onChange(
                                  (field.value || []).filter(
                                    (value) => value !== item
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{item}</FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormField
              key="other"
              control={form.control}
              name="types"
              render={({ field }) => {
                return (
                  <FormItem
                    key="other"
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes('Other')}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...(field.value || []), 'Other'])
                            : field.onChange(
                                (field.value || []).filter(
                                  (value) => value !== 'Other'
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">Other</FormLabel>
                  </FormItem>
                );
              }}
            />
          </div>
          {isOtherSelected && (
            <FormField
              control={form.control}
              name="otherType"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Please specify</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Sculptor, Poet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}