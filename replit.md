# Portfolio Website

## Overview
A modern, responsive portfolio website built with React, TypeScript, and Express.js. The application showcases personal information, education, work experience, projects, and custom software tools through a clean, professional interface. The design follows a reference-based approach inspired by Stuart Sul's portfolio design, emphasizing readability and structured content presentation.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **UI Framework**: Radix UI primitives with shadcn/ui components for accessible, customizable interface elements
- **Styling**: Tailwind CSS with custom design system including CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Design**: RESTful endpoints serving portfolio data as JSON
- **Data Layer**: In-memory storage with interface for potential database integration
- **Development**: Hot module replacement and development middleware integration

### Data Storage Solutions
- **Current**: In-memory storage using Map-based implementation
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Migration Support**: Drizzle Kit for database schema management and migrations

### Component Architecture
- **Layout**: Section-based structure with dedicated components (Header, Profile, Education, Experience, Projects, Tools, Footer)
- **Reusable Components**: Card-based layouts, section headers, and interactive elements
- **Loading States**: Skeleton components for improved user experience during data fetching
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities

### Design System
- **Color Palette**: Neutral-based theme with support for light/dark modes
- **Typography**: Inter font family with consistent weight and size hierarchies
- **Spacing**: Tailwind's spacing scale for consistent layout rhythm
- **Interactive Elements**: Hover and active state animations with CSS custom properties

### Development Environment
- **Type Safety**: Comprehensive TypeScript configuration with path mapping
- **Code Quality**: ESLint and path aliases for clean import statements
- **Asset Management**: Support for static assets and generated images
- **Development Tools**: Replit-specific plugins for enhanced development experience

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/react-***: Accessible UI primitive components
- **drizzle-orm**: Type-safe database ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL database driver

### Development Tools
- **vite**: Build tool and development server
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Static type checking
- **wouter**: Minimalist routing library

### UI and Styling
- **class-variance-authority**: Type-safe variant management for components
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **lucide-react**: SVG icon library

### Database and Schema
- **drizzle-kit**: Database migration and introspection tools
- **drizzle-zod**: Schema validation integration
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Potential Integrations
- **PostgreSQL**: Database configured via Drizzle ORM for persistent data storage
- **Session Management**: Express session infrastructure ready for authentication features
- **Form Handling**: React Hook Form with Zod validation support available