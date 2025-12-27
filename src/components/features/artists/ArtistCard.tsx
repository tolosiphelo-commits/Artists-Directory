/**
 * @file Defines the ArtistCard component.
 * @description This is the core UI component for displaying a single artist
 * in the directory grid. It's designed for visual appeal, incorporating the
 * artist's picture, name, verification status, types, and social links.
 * The entire card is clickable, navigating to the artist's profile page.
 */
import { Link } from 'react-router-dom';
import { Artist } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { VerificationBadge } from './VerificationBadge';
import { SocialLinks } from './SocialLinks';
/**
 * Props for the ArtistCard component.
 * @interface
 */
interface ArtistCardProps {
  artist: Artist; // The artist data to display.
}
/**
 * A visually polished card component to represent an artist.
 * It features a prominent profile picture, name with verification badge,
 * a list of artist types, and social media links. The card has interactive
 * hover effects for a delightful user experience.
 *
 * @param {ArtistCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered artist card.
 */
export function ArtistCard({ artist }: ArtistCardProps): JSX.Element {
  // Fallback initials for the avatar if the image fails to load.
  const fallbackInitials = artist.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);
  return (
<div className="group relative block">
  <Card className="h-full overflow-hidden transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:shadow-xl">
    <Link to={`/artist/${artist.id}`} aria-label={`View profile for ${artist.name}`}>
      <CardContent className="p-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Artist Profile Picture */}
          <Avatar className="h-24 w-24 border-2 border-white shadow-md">
            <AvatarImage src={artist.profilePicture} alt={artist.name} />
            <AvatarFallback>{fallbackInitials}</AvatarFallback>
          </Avatar>
          {/* Artist Name and Verification */}
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-brand-dark">{artist.name}</h3>
            {artist.isVerified && <VerificationBadge />}
          </div>
          {/* Artist Types */}
          <div className="flex flex-wrap justify-center gap-2">
            {artist.types.slice(0, 2).map((type) => (
              <Badge key={type} variant="secondary">
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Link>
    <CardFooter className="relative z-10 flex justify-center bg-muted/50 p-4">
      {/* Social Media Links */}
      <SocialLinks socials={artist.socials} />
    </CardFooter>
  </Card>
</div>
  );
}