# Workforce - Manpower Supply Application

## Overview

This is a full-stack web application for Workforce, a UK-based manpower supply company. The application serves as a premium landing page and quote request system with a luxury leaf green and white theme. The website showcases specialized hospitality staffing services and allows potential clients to submit staffing requirements through an interactive form.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Premium leaf green and white theme with luxury styling
Logo design: "PJ" in white text on a square leaf green background
Company branding: "WORKFORCE" (removed "PJ" from header), "Manpower Supply" tagline

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with custom design system
- **shadcn/ui** component library for consistent UI elements
- **React Hook Form** with Zod validation for form handling
- **TanStack Query** for server state management
- **Wouter** for lightweight client-side routing

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design pattern
- **PostgreSQL database** with Drizzle ORM for persistent data storage
- **Zod validation** for request/response schemas
- **Drizzle ORM** configured for PostgreSQL (ready for database connection)

## Key Components

### Database Schema
The application uses Drizzle ORM with PostgreSQL schema definitions:
- **Users table**: Basic user management structure (username, password)
- **Quote Requests table**: Comprehensive quote request data including contact info, service requirements, and timestamps
- **Validation schemas**: Type-safe validation using Zod with custom error messages

### API Endpoints
- `POST /api/quote-requests` - Submit new quote requests with validation
- `GET /api/quote-requests` - Retrieve all quote requests (admin functionality)

### UI Components Structure
- **Navigation**: Fixed header with smooth scrolling navigation and premium leaf green logo
- **Hero Section**: Landing area with dual call-to-action buttons and premium styling
- **Services Section**: Specialized hospitality roles with visual cards featuring specific positions:
  - Housekeeping Room Attendant, Supervisor, Coordinator
  - Chef and culinary professionals
  - Waitress/Waiter and front of house staff
  - Barista and beverage specialists
  - Linen & Luggage Porter
- **Why Choose Section**: Feature highlights with icons and premium descriptions
- **Quote Section**: Interactive form for service requests with specific role selections
- **Contact Section**: Multiple contact methods with updated LinkedIn link
- **Footer**: Company information and quick links

### Form Management
- React Hook Form with Zod resolver for type-safe form validation
- Real-time validation feedback with custom error messages
- Toast notifications for user feedback
- Structured form data collection for quote requests

## Data Flow

1. **User Interaction**: Users navigate the landing page and fill out the quote request form
2. **Client Validation**: Form data is validated on the client using Zod schemas
3. **API Request**: Validated data is sent to the Express server via REST API
4. **Server Validation**: Server re-validates data using shared Zod schemas
5. **Data Storage**: Quote requests are stored using the storage interface (currently in-memory)
6. **Response Handling**: Success/error responses are handled with toast notifications

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe CSS class composition

### Development Tools
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **TSX**: TypeScript execution for development server

### Database and Validation
- **Drizzle Kit**: Database migrations and schema management
- **Neon Database**: Serverless PostgreSQL provider (configured but not required)
- **Zod**: TypeScript-first schema validation library

## Deployment Strategy

The application is configured for flexible deployment:

### Development
- Vite development server with HMR (Hot Module Replacement)
- Express server running concurrently for API endpoints
- PostgreSQL database with persistent storage for quote requests and user data

### Production Build
- Vite builds optimized static assets to `dist/public`
- ESBuild bundles the Express server to `dist/index.js`
- Static file serving from the Express server
- Environment-based configuration for database connections

### Database Integration
- PostgreSQL database successfully connected and configured
- Drizzle ORM with full schema migration deployed
- DatabaseStorage class implementing persistent data storage
- All quote requests and user data now stored in PostgreSQL
- Connection string configuration via environment variables

## Recent Changes

**Database Integration (2024-07-20)**
- Successfully migrated from in-memory storage to PostgreSQL database
- Created db.ts with Neon serverless PostgreSQL configuration
- Updated storage.ts to use DatabaseStorage class with Drizzle ORM queries
- Deployed schema to database using `npm run db:push`
- Tested API endpoints - quote creation and retrieval working correctly
- Updated LinkedIn link to https://www.linkedin.com/company/pj-workforce/?viewAsMember=true
- Refined services section to focus on specific hospitality roles

**Branding Updates (2024-07-20)**
- Header shows clean "WORKFORCE" branding without tagline
- Updated tagline throughout to "Hospitality Staffing Solutions" in proper case
- Hero section badge: "UK's Premier Hospitality Staffing Solutions"
- "Why Choose" section updated to "Why Choose PJ WORKFORCE?" with green "PJ"
- Added FlexForce 24hr Emergency Support dedicated section for immediate staff replacements
- Created Room Attendant Service Tiers section (Elite, Prestige, Comfort Cleaners)
- Maintained "PJ" logo in square leaf green background throughout
- Improved headline spacing in hero section for better readability
- Made quote section more compact and visible with better styling
- Fixed contact boxes visibility with inline CSS styling

The architecture supports easy scaling from development to production with minimal configuration changes, while maintaining type safety and modern development practices throughout the stack.