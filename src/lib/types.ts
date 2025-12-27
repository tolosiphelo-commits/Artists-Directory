/**
 * @file Defines all shared TypeScript types for the application.
 * @description This file is the single source of truth for data structures,
 * ensuring consistency and type safety across the entire codebase.
 * It is a core part of the clean architecture, decoupling data shapes from UI components.
 */
import {
  ARTIST_TYPES,
  SKIN_TONES,
  BODY_TYPES,
  AGE_RANGES,
  SEXUAL_ORIENTATIONS,
  VISIBILITY_OPTIONS,
  SOCIAL_PLATFORMS,
} from './constants';
/**
 * Defines the supported social media platforms from constants.
 */
export type SocialPlatform = typeof SOCIAL_PLATFORMS[number]['id'];
/**
 * A record mapping social platforms to their respective profile URLs.
 * `Partial` makes all properties optional, as an artist may not have all profiles.
 */
export type SocialLinks = Partial<Record<SocialPlatform, string>>;
/**
 * Defines the possible types/categories for an artist from constants.
 */
export type ArtistType = typeof ARTIST_TYPES[number];
/**
 * Defines the visibility options for sensitive attributes.
 */
export type Visibility = typeof VISIBILITY_OPTIONS[number];
/**
 * A generic interface for an attribute with a visibility control.
 */
export interface VisibleAttribute<T> {
  value: T;
  visibility: Visibility;
}
// Defines specific types for optional identity attributes from constants.
export type SkinTone = typeof SKIN_TONES[number];
export type BodyType = typeof BODY_TYPES[number];
export type AgeRange = typeof AGE_RANGES[number];
export type SexualOrientation = typeof SEXUAL_ORIENTATIONS[number];
/**
 * The core data structure for an artist profile.
 * This interface is used throughout the application to represent an artist.
 */
export interface Artist {
  id: string; // A unique identifier for the artist, used for routing and keys.
  name: string; // The artist's name or stage name.
  profilePicture: string; // URL to the artist's profile picture.
  isVerified: boolean; // Indicates if the artist has a verification badge.
  types: ArtistType[]; // A list of categories the artist belongs to.
  socials: SocialLinks; // A collection of the artist's social media links.
  bio?: string; // An optional short biography (max ~200 characters).
  location?: string; // An optional city/country.
  // Optional, self-declared identity & appearance attributes with visibility controls.
  skinTone?: VisibleAttribute<SkinTone>;
  bodyType?: VisibleAttribute<BodyType>;
  height?: VisibleAttribute<number>; // Height in centimeters.
  ageRange?: VisibleAttribute<AgeRange>;
  sexualOrientation?: VisibleAttribute<SexualOrientation[]>;
}