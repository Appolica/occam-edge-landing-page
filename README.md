# Occam Edge Landing Page

A modern, responsive landing page for Occam Edge - a risk intelligence system for technology projects that transforms technical and financial data into actionable insights for strategic decision-making.

## Features

- Clean, modern UI built with React and TypeScript
- Responsive design that works on all devices
- Smooth scrolling navigation
- Feature showcase section
- Target market information
- Mission statement
- Contact form integration
- Login and demo request functionality

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via utility classes)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Appolica/occam-edge-landing-page.git
   cd occam-edge-landing-page
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Build for Production

```bash
pnpm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── Features.tsx     # Features section
│   ├── Footer.tsx       # Footer component
│   ├── Header.tsx       # Header with navigation
│   ├── Hero.tsx         # Hero section
│   ├── Mission.tsx      # Mission statement
│   └── TargetMarket.tsx # Target market section
├── App.tsx              # Main app component
├── index.tsx            # Entry point
└── index.html           # HTML template
```

## License

© 2025 Occam Edge. All rights reserved.
