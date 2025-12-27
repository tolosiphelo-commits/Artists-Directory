/**
 * @file Defines Zod schemas for validating the artist submission form.
 * @description This file centralizes all validation logic, ensuring data
 * integrity and providing clear, consistent error messages to the user.
 */
import { z } from 'zod';
import {
  ARTIST_TYPES,
  VISIBILITY_OPTIONS,
  SKIN_TONES,
  BODY_TYPES,
  AGE_RANGES,
  SEXUAL_ORIENTATIONS,
} from './constants';
// Helper schema for attributes with visibility controls.
const visibilitySchema = z.enum(VISIBILITY_OPTIONS);
const visibleAttributeSchema = <T extends z.ZodTypeAny>(valueSchema: T) =>
  z.object({
    value: valueSchema,
    visibility: visibilitySchema,
  });
// Schema for Step 1: Basic Info
export const step1Schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  profilePicture: z.string().url('Please enter a valid URL.'),
  location: z.string().optional(),
  bio: z.string().max(200, 'Bio must not exceed 200 characters.').optional(),
});
// Schema for Step 2: Artist Types
export const step2Schema = z.object({
  types: z
    .array(z.enum(ARTIST_TYPES))
    .min(1, 'Please select at least one artist type.'),
  otherType: z.string().optional(),
});
// Schema for Step 3: Identity & Attributes
export const step3Schema = z.object({
  skinTone: visibleAttributeSchema(z.enum(SKIN_TONES)).optional(),
  bodyType: visibleAttributeSchema(z.enum(BODY_TYPES)).optional(),
  height: visibleAttributeSchema(z.number().min(100).max(250)).optional(),
  ageRange: visibleAttributeSchema(z.enum(AGE_RANGES)).optional(),
  sexualOrientation: visibleAttributeSchema(z.array(z.enum(SEXUAL_ORIENTATIONS))).optional(),
  selfDescribeOrientation: z.string().optional(),
});
// Schema for Step 4: Social Links
export const step4Schema = z.object({
  socials: z.object({
    instagram: z.string().url().optional().or(z.literal('')),
    tiktok: z.string().url().optional().or(z.literal('')),
    twitter: z.string().url().optional().or(z.literal('')),
    youtube: z.string().url().optional().or(z.literal('')),
    spotify: z.string().url().optional().or(z.literal('')),
    soundcloud: z.string().url().optional().or(z.literal('')),
    website: z.string().url().optional().or(z.literal('')),
    linktree: z.string().url().optional().or(z.literal('')),
  }).optional(),
});
// Combined schema for the entire submission form
export const submissionSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema);
// Infer the TypeScript type from the combined Zod schema.
export type SubmissionFormData = z.infer<typeof submissionSchema>;