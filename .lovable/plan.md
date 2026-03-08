

# Implementation Plan

## 1. Dark/Light Mode Toggle
- Create a `ThemeProvider` component using `next-themes` (already installed) to manage theme state
- Add light theme CSS variables in `index.css` under a `.light` class
- Add a toggle button (Sun/Moon icon) to `Navigation.tsx`
- Light theme: white/light gray backgrounds, dark text, adjusted glass-card styles, toned-down neon effects

## 2. Framer Motion Scroll Animations
- Install `framer-motion` package
- Create a reusable `AnimatedSection` component using `motion.div` with `whileInView` for scroll-triggered fade-up/slide-in animations
- Wrap each major section in all pages (Home, Shop, Repair, About, Contact) with this component
- Stagger children animations for grids (products, services, stats)

## 3. Samsung S26 Ultra Banner Update
- Change the banner from "Coming Soon" to "Newly Launched"
- Use official Samsung product images via their CDN URLs (e.g., `https://images.samsung.com/is/image/samsung/...`) or high-quality alternatives from Unsplash showing the S26 Ultra
- Update copy to reflect the phone as launched, remove "Expected Launch" overlay
- Add specs highlights (camera, display, AI features)

## 4. Mobile Responsiveness Fixes
- Review and fix any overflow or spacing issues on mobile across all pages
- Ensure the hero section text scales properly on small screens
- Verify product grid, navigation, and footer render correctly on mobile viewport

## Files to Change

| File | Changes |
|------|---------|
| `package.json` | Add `framer-motion` |
| `src/index.css` | Add light theme variables under `:root` / `.dark` structure |
| `src/App.tsx` | Wrap with `ThemeProvider` from next-themes |
| `src/components/Navigation.tsx` | Add dark/light toggle button |
| `src/components/AnimatedSection.tsx` | New reusable scroll animation wrapper |
| `src/pages/Home.tsx` | Update S26 banner to "Newly Launched", wrap sections with AnimatedSection |
| `src/pages/Shop.tsx` | Wrap sections with AnimatedSection |
| `src/pages/Repair.tsx` | Wrap sections with AnimatedSection |
| `src/pages/About.tsx` | Wrap sections with AnimatedSection |
| `src/pages/Contact.tsx` | Wrap sections with AnimatedSection |
| `src/components/Footer.tsx` | Light theme compatible styles |

## Theme Architecture
- Current dark theme becomes the `.dark` class theme (default)
- New light theme uses clean whites, soft grays, and maintains brand colors (primary green, brand purple)
- `glass-card` in light mode: `bg-white/80 border-gray-200/50` instead of `bg-white/5 border-white/10`
- `next-themes` handles persistence via localStorage

## S26 Banner Strategy
- Replace "Coming Soon" badge with "Newly Launched" 
- Use Samsung's official press imagery URL or a high-quality Unsplash photo of a flagship Samsung phone
- Update text: remove "Expected Launch 2026", add key specs and "Available Now" messaging
- Keep the Pre-Book button but change to "Buy Now"

