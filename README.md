# Moataz Ahmed — Developer Portfolio

A modern, premium developer portfolio built with React.js + Vite.

## Tech Stack
- React.js (Vite) + Tailwind CSS v4 + Framer Motion + Lucide React + React Hot Toast

## Getting Started
```bash
npm install
npm run dev
```

## Deploy to Vercel
```bash
npm i -g vercel && vercel
```
Or connect your GitHub repo at vercel.com.

## Content Management
All content lives in `src/data/*.json`:
- `personal.json` — name, bio, stats, availability
- `skills.json` — skill categories and levels
- `projects.json` — project cards with tech stack and links
- `experience.json` — work timeline
- `education.json` — degrees and courses
- `achievements.json` — certifications and awards
- `blog.json` — articles and tags
- `socialLinks.json` — social media links

## Contact Form
Replace the mock handler in `Contact.jsx` with EmailJS or Formspree for real email delivery.

## Folder Structure
```
src/
├── components/layout/   — Navbar, Footer
├── components/sections/ — All page sections
├── components/ui/       — Reusable: Pagination, ScrollToTop, SectionHeading
├── context/             — ThemeContext (dark/light)
├── data/                — JSON content files
└── hooks/               — useScrollProgress, useTyping, useCounter
```
