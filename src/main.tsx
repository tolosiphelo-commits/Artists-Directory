import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { ArtistProfilePage } from '@/pages/ArtistProfilePage';
import { SubmitArtistPage } from '@/pages/SubmitArtistPage';
import { RequestVerificationPage } from '@/pages/RequestVerificationPage';
import { AdminReviewPage } from '@/pages/AdminReviewPage';
/**
 * The application's router configuration.
 * It defines the URL paths and the components that should be rendered for each path.
 * This is the central point for managing navigation within the application.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // The main directory page
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/artist/:artistId",
    element: <ArtistProfilePage />, // The detailed artist profile page
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/submit",
    element: <SubmitArtistPage />, // The artist submission page
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/request-verification",
    element: <RequestVerificationPage />, // The verification request page
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/admin-review",
    element: <AdminReviewPage />, // The admin review page
    errorElement: <RouteErrorBoundary />,
  },
]);
// The root of the application is rendered here. Do not touch this code.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)