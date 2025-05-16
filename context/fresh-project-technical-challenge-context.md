# Project Context Document: House Showcase Web App

## Overview
This project is a technical challenge for Fresh Projects, requiring a single-page web application to showcase a house for potential buyers. The app must display general house information (title, description, price, address, thumbnail), feature an interactive floorplan as the navigation element, and load room details (name, description, photos) below the floorplan upon clicking a room. The app must be responsive for mobile devices, optimized for performance, and deployed for demonstration. Bonus points are awarded for explaining optimizations.

The core app will be built using **Analog**, a fullstack Angular meta-framework, with **Tailwind CSS** for styling and **Fly.io** for deployment. To demonstrate modern development practices, **Analog API routes** will be used to fetch room data dynamically, even though hardcoding is sufficient for the challenge. A separate bonus feature (React-based agent portal) is planned but excluded from this document to focus on the core requirements.

This document outlines the project’s context, envisioned structure, roadmap, and a prompt template for AI-assisted code generation, ensuring transparency in leveraging tools like Grok or Claude.

## Project Goals
- Deliver a polished, responsive single-page app meeting all challenge requirements.
- Showcase expertise in Analog (Angular 19), Tailwind CSS, and modern development workflows.
- Implement an interactive SVG-based floorplan for intuitive navigation.
- Use Analog API routes to fetch room data, demonstrating fullstack capabilities.
- Optimize for performance (e.g., image compression, lazy loading) and explain optimizations in the presentation.
- Deploy the app on Fly.io for a live demo.
- Document AI-assisted development by sharing structured prompts, highlighting intentional use of tools.

## Technology Stack
- **Analog (Angular 19)**: Meta-framework for Angular, providing file-based routing, API routes, and Vite-based builds for performance.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive styling, integrated with spartan/ui for Shadcn-like components.
- **spartan/ui**: Modern Angular component library for buttons, cards, and layouts, styled with Tailwind.
- **Fly.io**: Free-tier hosting for deployment, supporting SQLite for potential backend data storage.
- **SQLite**: Lightweight database for room data (if dynamic), hosted on Fly.io’s persistent volumes.
- **SVG**: Used for the floorplan, enabling scalable, clickable room navigation.
- **Vite**: Build tool (via Analog) for fast development and optimized production builds.

## Envisioned Project Structure
The project follows Analog’s conventions, with API routes for room data and a modular component structure. Images (thumbnail, room photos) are stored in the `public` folder, and SQLite (if used) is managed on Fly.io.

```
house-showcase/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── index.page.ts          # Main route (house showcase page)
│   │   │   └── [...not-found].page.ts # 404 catch-all route
│   │   ├── components/
│   │   │   ├── house-info.component.ts    # Displays title, description, price, address, thumbnail
│   │   │   ├── floorplan.component.ts     # SVG-based interactive floorplan
│   │   │   └── room-details.component.ts  # Displays room name, description, photos
│   │   ├── models/
│   │   │   ├── house.model.ts        # House data interface
│   │   │   └── room.model.ts         # Room data interface
│   │   ├── services/
│   │   │   └── room.service.ts       # Fetches room data via HttpClient
│   │   └── app.config.ts             # App configuration (routing, HttpClient)
│   ├── server/
│   │   ├── routes/
│   │   │   ├── api/
│   │   │   │   ├── v1/
│   │   │   │   │   ├── rooms.get.ts  # GET /api/v1/rooms (all rooms)
│   │   │   │   │   └── rooms/[id].get.ts # GET /api/v1/rooms/:id (single room)
│   │   │   └── [...].ts              # Catch-all API route (optional)
│   │   └── middleware/
│   │       └── auth.ts               # Optional middleware (if auth added later)
│   ├── assets/
│   │   └── floorplan.svg             # SVG floorplan asset
│   └── main.ts                       # App entry point
├── public/
│   ├── images/
│   │   ├── thumbnail.jpg             # House thumbnail
│   │   └── rooms/                    # Room photos
│   │       ├── room1-photo1.jpg
│   │       └── room2-photo1.jpg
├── vite.config.ts                    # Vite/Analog configuration (prerender, apiPrefix)
├── tailwind.config.js                # Tailwind CSS configuration
├── package.json                      # Dependencies (Analog, Tailwind, spartan/ui)
├── fly.toml                          # Fly.io deployment configuration
└── README.md                         # Project setup and optimization notes
```

### Structure Details
- **Pages**: `index.page.ts` is the main route, rendering the house showcase. A 404 route ensures robustness.
- **Components**: Modular components for house info, floorplan, and room details, styled with Tailwind and [spartan/ui](https://spartan.ng/documentation/installation).
- **API Routes**: Defined in `src/server/routes/api/v1`, using Nitro/h3 (per [Analog Docs](https://analogjs.org/docs/features/api/overview#defining-an-api-route)). Routes include:
  - `rooms.get.ts`: Returns all rooms (e.g., for initializing the floorplan).
  - `rooms/[id].get.ts`: Returns a single room’s details by ID (triggered by floorplan clicks).
- **Assets**: The floorplan SVG is stored in `src/assets`, with images in `public/images` for public access.
- **Models**: TypeScript interfaces ensure type safety for house and room data.
- **Services**: `room.service.ts` uses Angular’s `HttpClient` to fetch data from API routes.

## Roadmap
The project is estimated to take **17-26 hours** (spread over 5-7 days), prioritizing the core app. The roadmap includes milestones to ensure timely completion.

### Milestone 1: Setup and Configuration (3-4 hours)
- Initialize Analog project (`npm create analog@latest`).
- Configure Tailwind CSS and spartan/ui.
- Set up Fly.io and GitHub repo with basic CI/CD (GitHub Actions).
- Define house and room data (hardcoded or SQLite).

### Milestone 2: UI and Components (5-7 hours)
- Create `house-info.component.ts` for title, description, price, address, and thumbnail.
- Style components with Tailwind and spartan/ui for desktop and mobile responsiveness.
- Test layout on multiple device sizes (browser dev tools).

### Milestone 3: Floorplan Implementation (4-6 hours)
- Integrate floorplan SVG (or convert raster to SVG if needed).
- Implement `floorplan.component.ts` with click event handlers for rooms.
- Ensure touch support for mobile devices.
- Test interactivity with sample room IDs.

### Milestone 4: Room Details and API Routes (4-5 hours)
- Create `room-details.component.ts` to display room name, description, and photos.
- Implement API routes (`rooms.get.ts`, `rooms/[id].get.ts`) to serve room data.
- Set up `room.service.ts` to fetch data via `HttpClient`.
- Connect floorplan clicks to room details via API.

### Milestone 5: Optimizations and Testing (3-4 hours)
- Compress images (TinyPNG) and implement lazy loading for photos.
- Minify CSS/JS with Vite’s optimizations.
- Add ARIA labels to floorplan for accessibility.
- Test app on desktop and mobile (real devices or emulators).

### Milestone 6: Deployment and Documentation (2-3 hours)
- Deploy to Fly.io (`fly deploy`).
- Write README with setup instructions and optimization notes.
- Prepare presentation slides (demo, code walkthrough, optimizations).

## AI-Assisted Development Prompt Template
To ensure transparency, all AI-generated code will be created using structured XML prompts, manually implemented into the project. The template below standardizes prompts for tools like Grok or Claude, capturing intent, context, and requirements.

```xml
<prompt>
  <context>
    <project>House Showcase Web App</project>
    <framework>Analog (Angular 19)</framework>
    <styling>Tailwind CSS with spartan/ui</styling>
    <description>Building a single-page app for a technical challenge. The app showcases a house with an interactive SVG floorplan, displaying room details (name, description, photos) when a room is clicked. Must be responsive and optimized.</description>
  </context>
  <task>
    <objective>[Specific goal, e.g., "Generate a floorplan component with SVG click events"]</objective>
    <requirements>
      <req>[Requirement 1, e.g., "Use Angular standalone component"]</req>
      <req>[Requirement 2, e.g., "Support mobile touch events"]</req>
      <req>[Requirement 3, e.g., "Integrate Tailwind CSS for styling"]</req>
    </requirements>
    <output_format>[e.g., "TypeScript + HTML template"]</output_format>
  </task>
  <constraints>
    <constraint>[e.g., "No external libraries beyond Analog/Tailwind"]</constraint>
    <constraint>[e.g., "Follow Analog’s file-based routing"]</constraint>
  </constraints>
  <example>
    <description>[Optional: Describe similar code or expected structure]</description>
    <code>
      <!-- Example code snippet -->
    </code>
  </example>
</prompt>
```

### Example Prompt
```xml
<prompt>
  <context>
    <project>House Showcase Web App</project>
    <framework>Analog (Angular 19)</framework>
    <styling>Tailwind CSS with spartan/ui</styling>
    <description>Building a single-page app for a technical challenge. The app showcases a house with an interactive SVG floorplan, displaying room details (name, description, photos) when a room is clicked. Must be responsive and optimized.</description>
  </context>
  <task>
    <objective>Generate an API route to fetch room details by ID</objective>
    <requirements>
      <req>Use Analog’s API route system with Nitro/h3</req>
      <req>Return room data (id, name, description, photos) in JSON format</req>
      <req>Handle invalid IDs with a 400 error</req>
    </requirements>
    <output_format>TypeScript</output_format>
  </task>
  <constraints>
    <constraint>Store room data in a hardcoded array or SQLite</constraint>
    <constraint>Follow Analog’s src/server/routes/api structure</constraint>
  </constraints>
  <example>
    <description>API route that returns a single room’s details based on ID</description>
    <code>
      import { defineEventHandler, getRouterParam, createError } from 'h3';

      export default defineEventHandler((event) => {
        const id = getRouterParam(event, 'id');
        const rooms = [
          { id: '1', name: 'Master Bedroom', description: 'Spacious...', photos: ['/images/room1-photo1.jpg'] }
        ];
        const room = rooms.find(r => r.id === id);
        if (!room) {
          throw createError({ statusCode: 400, statusMessage: 'Invalid room ID' });
        }
        return room;
      });
    </code>
  </example>
</prompt>
```

## Implementation Notes
- **API Routes**: Per the [Analog Docs](https://analogjs.org/docs/features/api/overview#defining-an-api-route), routes are defined in `src/server/routes/api` using Nitro/h3. They’re exposed under `/api` (configurable via `apiPrefix` in `vite.config.ts`). Dynamic routes (e.g., `/api/v1/rooms/[id]`) use `getRouterParam` for parameters, and `createError` for error handling. This enables robust data fetching for room details.
- **Floorplan**: Assume the provided floorplan is an SVG. If not, convert the asset to SVG or use an image map as a fallback. SVG ensures scalability and accessibility.
- **Prompt Transparency**: During the presentation, include a slide showcasing 2-3 example prompts, explaining how they were crafted and implemented. This demonstrates intentional use of AI tools.
- **Optimizations**: Focus on image compression (WebP, TinyPNG), lazy loading (`loading="lazy"` for images), and Vite’s tree-shaking. Document these in the README and presentation.

## Next Steps
- Review the Google Drive assets to confirm the floorplan format (SVG or raster).
- Email Benjamin with clarifying questions (e.g., floorplan format, optimization priorities).
- Start Milestone 1 (setup) and generate initial components using the prompt template.
- Track time spent to report accurately in the presentation.