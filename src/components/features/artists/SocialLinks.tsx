/**
 * @file Defines the SocialLinks component.
 * @description This component renders a list of social media icons based on
 * an artist's provided links. It maps platform names to specific icons
 * from `lucide-react` for a consistent and clean presentation.
 */
import React from 'react';
import { SocialLinks as SocialLinksType, SocialPlatform } from '@/lib/types';
import {
  Instagram,
  Twitter,
  Youtube,
  Globe,
  Link as LinkIcon,
  Music,
  Mic2,
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
/**
 * A mapping from social platform keys to their corresponding Lucide icon component and display name.
 * This allows for easy extension with new platforms.
 */
const socialIconMap: Record<SocialPlatform, { icon: React.ElementType; name: string }> = {
  instagram: { icon: Instagram, name: 'Instagram' },
  tiktok: { icon: Mic2, name: 'TikTok' },
  spotify: { icon: Music, name: 'Spotify' }, // Changed from Spotify to Music
  soundcloud: { icon: Music, name: 'SoundCloud' },
  youtube: { icon: Youtube, name: 'YouTube' },
  twitter: { icon: Twitter, name: 'Twitter / X' },
  website: { icon: Globe, name: 'Website' },
  linktree: { icon: LinkIcon, name: 'Linktree' },
};
/**
 * Props for the SocialLinks component.
 * @interface
 */
interface SocialLinksProps {
  socials: SocialLinksType; // The artist's social links object.
  className?: string; // Optional class name for the container.
}
/**
 * Renders a list of clickable social media icons.
 * It iterates over the provided social links, looks up the corresponding icon,
 * and renders it as a link that opens in a new tab.
 *
 * @param {SocialLinksProps} props - The props for the component.
 * @returns {JSX.Element | null} The rendered list of social icons, or null if no links are provided.
 */
export function SocialLinks({ socials, className }: SocialLinksProps): JSX.Element | null {
  const availableLinks = Object.entries(socials).filter(
    ([, url]) => url && url.trim() !== ''
  );
  if (availableLinks.length === 0) {
    return null;
  }
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <TooltipProvider delayDuration={100}>
        {availableLinks.map(([platform, url]) => {
          const platformKey = platform as SocialPlatform;
          const social = socialIconMap[platformKey];
          if (!social || !url) return null;
          const IconComponent = social.icon;
          return (
            <Tooltip key={platform}>
              <TooltipTrigger asChild>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name} profile`}
                  className="text-muted-foreground transition-colors hover:text-brand-dark"
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </div>
  );
}