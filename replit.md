# Aiko Portfolio Website

## Overview

This project is a modern, responsive portfolio website for a web designer named Aiko Karlsson. It's built using a full-stack TypeScript architecture with React frontend and Express backend, showcasing premium web design services, portfolio work, and client testimonials.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: In-memory storage with planned PostgreSQL session store

### Design System
- **Theme**: Dark theme with professional color palette
- **Primary Colors**: Green accent (#22C55E) for CTAs and highlights
- **Typography**: Inter font family for modern, clean appearance
- **Layout**: Responsive grid system with mobile-first approach

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Large banner with professional portrait and CTA
- **Services Section**: Three-column layout showcasing core services
- **Portfolio Gallery**: Grid layout displaying selected work
- **Client Carousel**: Infinite scrolling client logos
- **Testimonials**: Client feedback with photos and company details
- **Contact CTA**: Call-to-action section for lead generation

### Backend Infrastructure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular route system with Express
- **Development Server**: Vite integration for hot reloading
- **Error Handling**: Centralized error management

### Database Schema
- **Users Table**: Basic user authentication structure with UUID primary keys
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Drizzle migrations for database versioning

## Data Flow

### Client-Side Flow
1. User visits homepage
2. React loads with dark theme and smooth animations
3. Components render progressively with intersection observers
4. Navigation provides smooth scrolling between sections
5. TanStack Query manages any future API state

### Server-Side Flow
1. Express serves static React build in production
2. API routes handle data operations (currently minimal)
3. Database operations through Drizzle ORM
4. Session management for user authentication

### Development Flow
1. Vite dev server provides hot reloading
2. TypeScript compilation with strict type checking
3. Tailwind CSS processing for utility classes
4. Component development with instant feedback

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Library**: Radix UI components for accessibility
- **Styling**: Tailwind CSS, Class Variance Authority
- **Animation**: Framer Motion for smooth transitions
- **Database**: Drizzle ORM with Neon PostgreSQL driver
- **Development**: Vite, TypeScript, ESBuild

### Design Assets
- **Images**: Unsplash for professional photography
- **Fonts**: Google Fonts (Inter) for typography
- **Icons**: Lucide React for consistent iconography

### Build Tools
- **TypeScript**: Strict type checking across the stack
- **PostCSS**: CSS processing with Tailwind
- **ESBuild**: Fast JavaScript bundling for production

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Served by Express in production mode

### Development Environment
- **Dev Server**: Vite dev server with Replit integration
- **Hot Reloading**: Real-time updates for frontend changes
- **TypeScript**: Incremental compilation for fast feedback
- **Database**: Neon serverless PostgreSQL for development

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Node Environment**: Development/production mode switching
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

The application is designed as a professional portfolio showcase with a clean, modern aesthetic and smooth user experience. The architecture supports future expansion with a robust backend foundation and scalable frontend component system.