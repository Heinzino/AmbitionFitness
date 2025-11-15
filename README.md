# Ambition Fitness

Calgary's Elite Personal Training Services - Astro Website

## Project Structure

This is an Astro project that consolidates the HomePage and will eventually include all other pages (Personal Training, Memberships, Group Sessions, Virtual Tour).

```
/
├── public/
│   └── img/           # Static images and assets
├── src/
│   ├── pages/
│   │   └── index.astro    # Main home page
│   ├── sections/          # React section components
│   │   ├── HeroSection.tsx
│   │   ├── NewsletterSection.tsx
│   │   ├── HeaderSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   ├── ClientTransformationsSection.tsx
│   │   ├── FeatureProductsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FooterSection.tsx
│   │   └── FindUsNearYouSection.tsx
│   └── styles/
│       └── global.css     # Global styles with Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will be available at [http://localhost:4321](http://localhost:4321) (or another port if 4321 is in use)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm preview
```

## Features

- ✅ Astro for static site generation
- ✅ React components for interactive elements
- ✅ Tailwind CSS for styling
- ✅ TypeScript support
- ✅ Fully responsive design
- ✅ Optimized images and assets

## Current Status

- [x] HomePage converted to Astro
- [ ] Personal Training page
- [ ] Memberships page
- [ ] Group Sessions page
- [ ] Virtual Tour page

## Original Projects

The individual page projects are still available in their respective folders:
- `HomePage/`
- `PersonalTraining/`
- `Memberships/`
- `GroupSessions/`
- `Virtual Tour/`

## Tech Stack

- **Framework**: Astro 5.x
- **UI Library**: React 18.x
- **Styling**: Tailwind CSS 3.x
- **Language**: TypeScript
- **Fonts**: Google Fonts (Inter, Montserrat, Prompt)
