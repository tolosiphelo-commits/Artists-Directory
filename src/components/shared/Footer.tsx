/**
 * @file Defines the footer for the application.
 * @description A minimalist footer component displayed at the bottom of every page.
 * It contains essential links and copyright information.
 */
import { Palette } from 'lucide-react';
/**
 * The main application footer.
 * Provides copyright information and a small branding element.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export function Footer(): JSX.Element {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">ArtisanFolio</span>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ by Matogen Digital.
        </p>
      </div>
    </footer>
  );
}