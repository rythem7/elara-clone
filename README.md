# Elara Clone

This is a style-based reimplementation of 'Elara' built from scratch using React and Tailwind. The goal was to sharpen my layout skills and styling.

A modern, animated website clone built with Next.js 15, featuring smooth scrolling animations and responsive design.

## ✨ Features

-   **Smooth Scrolling**: Implemented with Lenis for buttery-smooth scroll experience
-   **Fluid Animations**: Powered by Framer Motion for engaging transitions and effects
-   **Modern Design**: Styled with Tailwind CSS and DaisyUI components
-   **Responsive Layout**: Mobile-first design that works across all devices
-   **Performance Optimized**: Built with Next.js 15 and Turbopack for fast development

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org) with React 19
-   **Styling**: [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
-   **Development**: Turbopack for fast builds

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd elara-clone
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
elara-clone/
├── app/                    # Next.js app directory
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── header/           # Header section components
│   ├── navbar/           # Navigation components
│   ├── section2-5/       # Page sections
│   └── spinner/          # Loading components
├── assets/               # Static assets (images)
├── hooks/                # Custom React hooks
├── ui/                   # UI utility components
└── utility/              # Helper functions
```

## 🎨 Components Overview

-   **Header**: Animated hero section with scroll-triggered effects
-   **Sections 2-5**: Content sections with unique animations and layouts
-   **Navbar**: Navigation component with smooth transitions
-   **Spinner**: Loading animation component

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:

-   Responsive breakpoints for all screen sizes
-   Touch-friendly interactions
-   Optimized images and assets

## 🔧 Scripts

-   `npm run dev` - Start development server with Turbopack
-   `npm run build` - Build for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint

## 🌐 Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

-   [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
-   [Framer Motion](https://www.framer.com/motion/) - Animation library documentation
-   [Lenis](https://lenis.darkroom.engineering/) - Smooth scrolling library
-   [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
