# ArtisanFolio

A minimalist and elegant public directory for verified artists, focusing on credibility and discovery.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/tolosiphelo-commits/Artists-Directory)

## Table of Contents

- [About ArtisanFolio](#about-artisanfolio)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## About ArtisanFolio

ArtisanFolio is a minimalist, elegant, and modern web application designed as a public directory for verified artists. Its core purpose is to provide a platform for credibility through a manual verification system and discovery via search and filtering. The application is built with a clean, card-based layout, prioritizing a mobile-first, clutter-free user experience. Key features include a main directory page with a grid of artist cards, individual artist profile pages, and a comprehensive multi-step submission form for new artists. The design philosophy emphasizes clean spacing, refined typography, and intuitive navigation, creating a visually stunning and highly usable platform.

## Key Features

*   **Minimalist Design:** Clean, modern UI with generous white space and a focus on content.
*   **Card-Based Layout:** Artists are displayed in visually appealing, interactive cards.
*   **Verification System:** A manual review process for artist verification, similar to social media platforms.
*   **Search & Filtering:** Easily discover artists by name, type, and verification status.
*   **Artist Profile Pages:** Dedicated pages for each artist with an enlarged view of their information.
*   **Multi-Step Submission Form:** A user-friendly, guided form for artists to submit their profiles.
*   **Icon-Driven Links:** Social and external links are presented as clear, recognizable icons.
*   **Mobile-First Approach:** Designed to look and function beautifully on all devices.
*   **Customizable Attributes:** Optional fields for appearance and identity with granular visibility controls.

## Technology Stack

*   **Frontend:** React, Vite, Tailwind CSS, Shadcn UI, Lucide React, Framer Motion, React Router DOM, Zod, React Hook Form
*   **State Management:** Zustand
*   **Utilities:** `clsx`, `tailwind-merge`, `date-fns`
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Deployment:** Cloudflare Workers

## Getting Started

### Prerequisites

*   **Bun:** Ensure you have Bun installed. You can install it by following the instructions on the [official Bun website](https://bun.sh/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd artisan-folio
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

### Development

1.  **Start the development server:**
    ```bash
    bun run dev
    ```
    The application will be available at `http://localhost:${PORT}` (defaulting to `3000`).

## Usage

The application is designed for ease of use:

1.  **Browse Artists:** Navigate to the Home/Directory Page to view all listed artists.
2.  **Search & Filter:** Use the search bar and filter options to find specific artists.
3.  **View Profile:** Click on an artist's card to view their detailed profile page.
4.  **Submit Profile:** Click the "Submit Artist" button to access the multi-step form and add your profile.
5.  **Request Verification:** After submitting your profile, you can request verification.

## Deployment

This project is configured for deployment on Cloudflare Workers.

### Local Deployment (Preview)

To preview your deployment before pushing to production:

```bash
bun run build
bun run preview
```

### Cloudflare Deployment

1.  **Install Wrangler CLI:**
    ```bash
    bun add -g wrangler
    ```

2.  **Login to Cloudflare:**
    ```bash
    wrangler login
    ```

3.  **Build the application:**
    ```bash
    bun run build
    ```

4.  **Deploy to Cloudflare:**
    ```bash
    bun run deploy
    ```

    Alternatively, you can use the Cloudflare Deploy button:
    [![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/tolosiphelo-commits/Artists-Directory)

## Contributing

We welcome contributions to ArtisanFolio! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and ensure they are well-commented.
4.  Run `bun install` to update dependencies.
5.  Run `bun run lint` to check for code style issues.
6.  Submit a Pull Request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.