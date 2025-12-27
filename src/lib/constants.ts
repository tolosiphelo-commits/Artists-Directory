/**
 * @file Centralizes all application-wide constants.
 * @description This file ensures that constant values like form options are
 * consistent, easily manageable, and sourced from a single place.
 */
// Defines the possible types/categories for an artist.
export const ARTIST_TYPES = [
  'Model',
  'Musician',
  'Painter',
  'Actor',
  'Dancer',
  'DJ',
  'Photographer',
  'Digital Artist',
] as const;
// Defines the visibility options for sensitive attributes.
export const VISIBILITY_OPTIONS = ['Public', 'Recruiters only', 'Private'] as const;
// Defines options for skin tone.
export const SKIN_TONES = [
  'Fair',
  'Light',
  'Medium',
  'Olive',
  'Brown',
  'Black',
] as const;
// Defines options for body type.
export const BODY_TYPES = [
  'Slim',
  'Athletic',
  'Average',
  'Curvy',
  'Plus-size',
] as const;
// Defines options for age range.
export const AGE_RANGES = [
  '18-25',
  '26-35',
  '36-45',
  '46-55',
  '56+',
] as const;
// Defines options for sexual orientation.
export const SEXUAL_ORIENTATIONS = [
  'Straight',
  'Gay',
  'Lesbian',
  'Bisexual',
  'Pansexual',
  'Asexual',
  'Queer',
] as const;
// Defines supported social media platforms with their metadata.
export const SOCIAL_PLATFORMS = [
  { id: 'instagram', name: 'Instagram' },
  { id: 'tiktok', name: 'TikTok' },
  { id: 'twitter', name: 'Twitter / X' },
  { id: 'youtube', name: 'YouTube' },
  { id: 'spotify', name: 'Spotify' },
  { id: 'soundcloud', name: 'SoundCloud' },
  { id: 'website', name: 'Website' },
  { id: 'linktree', name: 'Linktree' },
] as const;