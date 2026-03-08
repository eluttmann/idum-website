# IDUM Website Restructuring - Session Notes

## Date: 2026-03-08

## Context
This is a marketing website landing page for IDUM (International Dialogues on Underwater Munitions), created by Craig in early experiments with Claude AI/Claude Code. The goal is to make it editable by non-technical folks through Claude Code.

## Problem
The original `index.html` was **8.8MB** because it contained base64-encoded images embedded directly in the HTML. This made the file:
- Slow to load (8+ second load times)
- Difficult to edit
- Hard for Claude to process due to size

## What We Did

### 1. Analyzed the file structure
- Identified 14 main sections (Nav, Hero, Mission, Threat, Founder, Projects, Documentaries, Operations, Ocean Action, Partnerships, Experts, Services, Contact, Footer)
- Found 5+ large base64-encoded PNG images causing the bloat

### 2. Renamed image files for clean URLs
Renamed all images from spaces to hyphens:

**Root images:**
- `Project 1.png` → `project-1.png`
- `Project 2.png` → `project-2.png`
- `Project 3.png` → `project-3.png`
- `Operation 1.png` → `operation-1.png`
- `Operation 2.png` → `operation-2.png`
- `Terry_photo.png` → `terry-photo.png`

**Films folder:**
- `Film 1.png` → `film-1.png` (through film-7.png)

**Partners folder (renamed from "collaborators and accreditors"):**
- All logos lowercase: `nato.png`, `un.png`, `opcw.jpg`, `sdg13.png`, `sdg14.png`, `helcom.png`, `ospar.png`, `scripps.png`, `woods.png`, `monaco.png`, `exponent.png`, `climate.png`, `tetiaroa.png`

**Experts folder:**
- `DrSylvia.png` → `dr-sylvia.png`
- `DrCraig.png` → `dr-craig.png`
- `DrBrian.png` → `dr-brian.png`
- `Jacques.png` → `jacques.png`
- `James.png` → `james.png`
- `Tom.png` → `tom.png`

### 3. Created clean temp file
- Extracted HTML structure without base64 data to understand the layout
- File at `index-clean-temp.html` (can be deleted)

## What Still Needs To Be Done

### Immediate Next Steps
1. **Write the new `index.html`** - Replace base64 images with file references and add edit markers
   - The new file should be ~50KB instead of 8.8MB
   - Each section should have HTML comment markers like:
     ```html
     <!-- ============================================================
          SECTION: Hero
          Edit: Main headline, subtitle, quote, and statistics
          ============================================================ -->
     ```

2. **Clean up** - Delete `index-clean-temp.html` after new index is written

3. **Test locally** - Open in browser to verify images load correctly

### Deployment
- For testing: Enable GitHub Pages in repo settings (free, instant)
- For production: Can use same files on cPanel hosting later

## File Structure (Target)
```
/
├── index.html          # Main page (~50KB, clean HTML)
├── images/
│   ├── terry-photo.png
│   ├── project-1.png
│   ├── project-2.png
│   ├── project-3.png
│   ├── operation-1.png
│   ├── operation-2.png
│   ├── films/
│   │   ├── film-1.png
│   │   └── ... (film-7.png)
│   ├── partners/
│   │   ├── nato.png
│   │   ├── un.png
│   │   └── ... (13 logos total)
│   └── experts/
│       ├── dr-sylvia.png
│       └── ... (6 photos total)
├── idum_brand_positioning_strategy.md
├── SESSION_NOTES.md    # This file
└── README.md           # (to be created - editing guide)
```

## Image Mapping Reference

| Section | Image Path |
|---------|-----------|
| Founder | `images/terry-photo.png` |
| Project 1 (CHEMSEA) | `images/project-1.png` |
| Project 2 (MODUM) | `images/project-2.png` |
| Project 3 (DAIMON) | `images/project-3.png` |
| Operation 1 | `images/operation-1.png` |
| Operation 2 | `images/operation-2.png` |
| Documentary 1-7 | `images/films/film-1.png` through `film-7.png` |
| Partner logos | `images/partners/*.png` |
| Expert photos | `images/experts/*.png` |

## Brand Guidelines
See `idum_brand_positioning_strategy.md` for:
- Target audience (Global Ocean Decision Makers)
- Mission, Vision, Purpose
- Core values
- Pain points and messaging strategy
