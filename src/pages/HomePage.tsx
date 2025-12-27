/**
 * @file Implements the Home / Directory Page.
 * @description This is the primary landing page of the application. It displays a
 * responsive grid of artist cards and provides controls for searching by name,
 * filtering by artist type, and toggling to show only verified artists.
 * All filtering logic is handled client-side for a fast, responsive experience.
 */
import React, { useState, useMemo } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ArtistCard } from '@/components/features/artists/ArtistCard';
import { mockArtists } from '@/data/mock-artists';
import { Artist, ArtistType } from '@/lib/types';
import { ARTIST_TYPES } from '@/lib/constants';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, SlidersHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
/**
 * The main Directory Page component.
 * It orchestrates the display of search/filter controls and the grid of ArtistCards.
 * It contains the state and logic for client-side searching and filtering.
 *
 * @returns {JSX.Element} The rendered Directory Page.
 */
export function HomePage(): JSX.Element {
  // State for the search query string.
  const [searchQuery, setSearchQuery] = useState('');
  // State for the "Verified Only" toggle.
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  // State for the selected artist types for filtering.
  const [selectedTypes, setSelectedTypes] = useState<Set<ArtistType>>(new Set());
  /**
   * Toggles a single artist type in the filter set.
   * @param {ArtistType} type - The artist type to toggle.
   */
  const handleTypeToggle = (type: ArtistType) => {
    setSelectedTypes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(type)) {
        newSet.delete(type);
      } else {
        newSet.add(type);
      }
      return newSet;
    });
  };
  /**
   * Filters the list of artists based on the current search and filter state.
   * `useMemo` is used to memoize the result, preventing expensive re-calculations
   * on every render unless the dependencies (artists, filters) change.
   */
  const filteredArtists = useMemo(() => {
    return mockArtists.filter((artist: Artist) => {
      // Name search filter (case-insensitive)
      const nameMatch = artist.name.toLowerCase().includes(searchQuery.toLowerCase());
      // Verified status filter
      const verifiedMatch = !verifiedOnly || artist.isVerified;
      // Artist type filter
      const typeMatch =
        selectedTypes.size === 0 ||
        artist.types.some((type) => selectedTypes.has(type));
      return nameMatch && verifiedMatch && typeMatch;
    });
  }, [searchQuery, verifiedOnly, selectedTypes]);
  return (
    <MainLayout>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
            Artist Directory
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover verified artists from around the world. Credibility and discovery, simplified.
          </p>
        </div>
        {/* Filter Controls */}
        <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name..."
              className="w-full pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filter by Type</span>
                  {selectedTypes.size > 0 && <Badge variant="secondary" className="rounded-full">{selectedTypes.size}</Badge>}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Artist Types</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {ARTIST_TYPES.map((type) => (
                  <div key={type} className="flex items-center space-x-2 p-2">
                    <Checkbox
                      id={`type-${type}`}
                      checked={selectedTypes.has(type)}
                      onCheckedChange={() => handleTypeToggle(type)}
                    />
                    <Label htmlFor={`type-${type}`} className="font-normal cursor-pointer flex-1">{type}</Label>
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center space-x-2">
              <Switch
                id="verified-only"
                checked={verifiedOnly}
                onCheckedChange={setVerifiedOnly}
              />
              <Label htmlFor="verified-only">Verified Only</Label>
            </div>
          </div>
        </div>
        {/* Artist Grid */}
        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="text-xl font-semibold text-brand-dark">No Artists Found</h3>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}