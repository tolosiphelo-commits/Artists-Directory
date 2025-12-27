/**
 * @file Defines the main navigation header for the application.
 * @description This component is displayed at the top of every page and
 * contains the application logo/title and primary navigation links.
 * It is designed to be clean, minimalist, and responsive.
 */
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Palette } from 'lucide-react';
/**
 * The main application header.
 * It includes the site title, which links to the homepage, and navigation
 * links for key pages like the Directory and Submit Artist page.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export function Header(): JSX.Element {
  /**
   * Helper function to apply active styles to NavLink.
   * @param {object} props - The props provided by NavLink.
   * @param {boolean} props.isActive - Whether the link is currently active.
   * @returns {string} The computed class name string.
   */
  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
    cn(
      'text-base font-medium text-muted-foreground transition-colors hover:text-brand-dark',
      isActive && 'text-brand-dark'
    );
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Site Title/Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Palette className="h-6 w-6 text-brand-blue" />
          <span className="text-xl font-bold text-brand-dark">ArtisanFolio</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={getNavLinkClass}>
            Directory
          </NavLink>

          <NavLink to="/request-verification" className={getNavLinkClass}>
            Request Verification
          </NavLink>
        </nav>
        {/* Call to Action Button */}
        <Link to="/submit">
          <Button className="hidden md:inline-flex bg-brand-dark hover:bg-brand-dark/90">
            Submit Your Profile
          </Button>
        </Link>
        {/* Mobile Navigation (Placeholder/Future Implementation) */}
        <div className="md:hidden">
          {/* A Sheet or Dropdown can be added here for mobile navigation */}
        </div>
      </div>
    </header>
  );
}