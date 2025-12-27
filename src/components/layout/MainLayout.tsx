/**
 * @file Provides the main layout structure for the application.
 * @description This component wraps all pages, providing a consistent
 * header, main content area, and footer. It ensures a cohesive look and
 * feel across the entire user experience.
 */
import React from 'react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
/**
 * Props for the MainLayout component.
 * @interface
 */
interface MainLayoutProps {
  children: React.ReactNode; // The page content to be rendered within the layout.
}
/**
 * A primary layout component for the application.
 * It consists of a fixed header, a main content area that takes up the remaining space,
 * and a footer. This creates a standard page structure.
 *
 * @param {MainLayoutProps} props - The props for the component.
 * @returns {JSX.Element} The rendered main layout.
 */
export function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-brand-light text-brand-dark">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}