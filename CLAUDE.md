# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a DodoMan (嘟男旅遊) landing page website that promotes a travel app. The project is a fully responsive static website built with vanilla HTML, CSS, and JavaScript, focused on showcasing European travel experiences and encouraging app downloads. The site features Traditional Chinese content with comprehensive internationalization support.

## Key Features

The landing page includes:
- SEO-optimized hero section with structured data and meta tags
- "Why Choose DodoMan?" (為什麼選擇 DodoMan？) features section
- Popular European destinations showcase with pricing
- Package tours from Italy and Germany
- Download DodoMan APP section with smart app detection
- Multilingual support with i18n system
- About DodoMan section
- Footer with contact information

## Architecture

This is a comprehensive static website with the following structure:

### Core Files
- `index.html` - Main HTML page with SEO optimization, structured data, and all sections (header, hero, features, destinations, packages, about, footer)
- `styles.css` - Complete CSS styling with responsive design, modern UI components, and mobile-first approach
- `script.js` - JavaScript functionality including:
  - `AppManager` class for app detection and download logic
  - `DestinationManager` for destination data handling
  - Mobile app installation detection (iOS/Android)
  - Smooth scrolling navigation
  - Mobile menu toggle functionality
  - Package tour data loading and display
- `i18n.js` - Internationalization system with comprehensive translation support for Traditional Chinese and English

### Reference Data
- `Reference/tours.json` - Large JSON file (1MB, single line) containing comprehensive tour data
- `Reference/Italy_Germany_tours.json` - Detailed tour data (495KB, 7503 lines) with destinations across Europe including Rome, Milan, Munich, etc. Each tour includes:
  - Tour name, introduction, highlights in Traditional Chinese
  - Pricing in EUR with discounts
  - Location coordinates and detailed images
  - Unique tour IDs and categories
- `Reference/Florence_to_Uffizi_Route.md` - Specific route documentation
- `Reference/Germany.xls` - Additional tour data in Excel format

### Documentation and Specifications
- `Specs/DodoMan-Landing-Page-PRD.md` - Comprehensive Product Requirements Document with sprint planning
- `Specs/Sprint Items.txt` - Current sprint items tracking
- `Reference/Bug-1.png`, `Reference/Bug-2.png` - Bug documentation screenshots
- `Reference/page-1.png` - Design reference
- `Reference/CustomerService.jpg` - Customer service reference image

### App Integration
The website includes sophisticated app detection and deep linking:
- Detects iOS/Android platforms with detailed user agent parsing
- Attempts to open installed DodoMan app via `dodoman://` scheme with specific product deep links
- Falls back to drive.google.com download link (currently placeholder)
- Supports deep linking to specific booking pages and product types
- Currently uses Google Drive link as temporary download URL (`script.js:69`)

## Development Commands

This is a static website that can be served directly:

```bash
# Serve locally using Python
python -m http.server 8000

# Or using Node.js
npx serve .

# Or any other static file server
```

## Testing and Deployment

Since this is a static website:
- No build process required
- Can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)
- Test by opening `index.html` directly in browser or serving via local server

## Important Notes

- **App Store URLs**: The app download URL in `script.js:69` currently points to a Google Drive placeholder and needs to be updated with actual store URLs
- **Performance**: Tour data is loaded from large JSON files (tours.json: 1MB, Italy_Germany_tours.json: 495KB) - consider pagination or lazy loading for performance optimization
- **Internationalization**: Full i18n support implemented with Traditional Chinese (zh-TW) as primary language and English support
- **SEO Optimization**: Comprehensive meta tags, structured data (Schema.org), and Open Graph tags implemented
- **Responsive Design**: Mobile-first approach with complete responsive design across all devices
- **Deep Linking**: Advanced app integration with product-specific deep linking (`dodoman://booking/{productType}`)
- **Sprint Development**: Active development following PRD specifications with identified issues and feature roadmap

## Current Known Issues

Based on project analysis:
- App download URLs need to be updated from Google Drive placeholder to actual app stores
- Package tour booking buttons may need activation for live booking functionality
- Deep linking system is implemented but requires actual app URLs for production deployment