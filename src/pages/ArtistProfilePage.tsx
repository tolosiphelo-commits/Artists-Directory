/**
 * @file Implements the Artist Profile Page.
 * @description This page displays the detailed profile of a single artist,
 * including their bio and a larger view of their information. It fetches
 * artist data from the mock data source based on a URL parameter.
 */
import { useParams, Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { mockArtists } from '@/data/mock-artists';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { VerificationBadge } from '@/components/features/artists/VerificationBadge';
import { SocialLinks } from '@/components/features/artists/SocialLinks';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
/**
 * The Artist Profile Page component.
 * It retrieves the artist ID from the URL, finds the corresponding artist
 * in the mock data, and renders their detailed profile.
 *
 * @returns {JSX.Element} The rendered artist profile page or a not-found message.
 */
export function ArtistProfilePage(): JSX.Element {
  // Get the artistId from the URL parameters.
  const { artistId } = useParams<{ artistId: string }>();
  // Find the artist in the mock data array.
  const artist = mockArtists.find((a) => a.id === artistId);
  // Handle the case where the artist is not found.
  if (!artist) {
    return (
      <MainLayout>
        <div className="container mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-dark">Artist Not Found</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The artist you are looking for does not exist.
          </p>
          <Button asChild className="mt-8">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Directory
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  // Fallback initials for the avatar.
  const fallbackInitials = artist.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Directory
            </Link>
          </Button>
        </div>
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            {/* Left Column: Avatar and Socials */}
            <div className="flex flex-col items-center gap-4 md:w-1/3">
              <Avatar className="h-40 w-40 border-4 border-white shadow-lg">
                <AvatarImage src={artist.profilePicture} alt={artist.name} />
                <AvatarFallback className="text-4xl">{fallbackInitials}</AvatarFallback>
              </Avatar>
              <div className="mt-4">
                <SocialLinks socials={artist.socials} />
              </div>
            </div>
            {/* Right Column: Artist Info */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <h1 className="text-4xl font-bold text-brand-dark">{artist.name}</h1>
                {artist.isVerified && <VerificationBadge className="h-7 w-7" />}
              </div>
              {artist.location && (
                <p className="text-lg text-muted-foreground">{artist.location}</p>
              )}
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {artist.types.map((type) => (
                  <Badge key={type} variant="secondary" className="text-base px-3 py-1">
                    {type}
                  </Badge>
                ))}
              </div>
              {artist.bio && (
                <div>
                  <h2 className="text-2xl font-semibold text-brand-dark mb-2">About</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{artist.bio}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}