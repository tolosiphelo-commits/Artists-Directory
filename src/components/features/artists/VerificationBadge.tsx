/**
 * @file Defines the VerificationBadge component.
 * @description A small, reusable UI component to display a blue verification
 * checkmark, similar to those on social media platforms. It signifies that
 * an artist's profile has been manually verified by administrators.
 */
import { Check } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
/**
 * Props for the VerificationBadge component.
 * @interface
 */
interface VerificationBadgeProps {
  className?: string; // Optional additional class names for styling.
}
/**
 * A component that displays a verification badge.
 * It consists of a checkmark icon inside a colored circle and includes a
 * tooltip explaining its meaning.
 *
 * @param {VerificationBadgeProps} props - The props for the component.
 * @returns {JSX.Element} The rendered verification badge.
 */
export function VerificationBadge({ className }: VerificationBadgeProps): JSX.Element {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              'flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue',
              className
            )}
          >
            <Check className="h-3 w-3 text-white" strokeWidth={4} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Verified Artist</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}