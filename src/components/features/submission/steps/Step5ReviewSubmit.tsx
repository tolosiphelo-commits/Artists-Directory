/**
 * @file Implements Step 5 of the artist submission form: Review & Submit.
 * @description This component displays a preview of the artist's profile
 * before final submission, using the ArtistCard component for a realistic look.
 */
import { UseFormReturn } from 'react-hook-form';
import { SubmissionFormData } from '@/lib/form-schemas';
import { ArtistCard } from '@/components/features/artists/ArtistCard';
import { Artist } from '@/lib/types';
interface Step5ReviewSubmitProps {
  form: UseFormReturn<SubmissionFormData>;
}
export function Step5ReviewSubmit({ form }: Step5ReviewSubmitProps): JSX.Element {
  const formData = form.getValues();
  // Create a mock Artist object from form data for preview.
  const previewArtist: Artist = {
    id: 'preview-id',
    name: formData.name || 'Your Name',
    profilePicture: formData.profilePicture || 'https://i.pravatar.cc/300',
    isVerified: false, // Profiles are unverified on submission.
    types: formData.types || [],
    socials: formData.socials || {},
    bio: formData.bio,
    location: formData.location,
  };
  return (
    <div className="flex flex-col items-center space-y-6">
      <p className="text-center text-muted-foreground">
        This is how your profile card will appear in the directory. Please review
        all information before submitting.
      </p>
      <div className="w-full max-w-xs">
        <ArtistCard artist={previewArtist} />
      </div>
    </div>
  );
}