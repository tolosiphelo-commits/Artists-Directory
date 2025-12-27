/**
 * @file Defines TypeScript types for administrative data.
 * @description This file ensures type safety for data related to the
 * admin review panel, such as verification requests.
 */
/**
 * Defines the possible statuses for a verification request.
 */
export type VerificationRequestStatus = 'Pending' | 'Approved' | 'Denied';
/**
 * The data structure for a single verification request.
 */
export interface VerificationRequest {
  id: string; // Unique ID for the request.
  artistId: string; // ID of the artist requesting verification.
  artistName: string; // Name of the artist for easy display.
  requestDate: string; // ISO string date of the request.
  status: VerificationRequestStatus; // Current status of the request.
  justification?: string; // Optional justification provided by the artist.
}