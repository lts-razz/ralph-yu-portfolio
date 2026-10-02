# Ralph Jerome T. Yu Portfolio Direction

## Document status

- Last updated: 2026-10-02
- Repository: `lts-razz/ralph-yu-portfolio`
- Live site: `https://ralph-yu-portfolio.vercel.app/`
- Current phase: `03 / Projects`
- Current status: Project direction, roles, repository facts, and technology stacks are approved. The implementation prompt is paused. No Projects implementation has been made from this phase yet.

This file is the current source of truth for the portfolio’s intended design, approved content, section status, and project facts. GitHub `main` remains the source of truth for the current implementation. If the implementation and this file differ, identify the difference before changing it silently.

## Working workflow

The working sequence is:

`This Work conversation → VS Code Codex → GitHub → this Work conversation`

- This Work conversation handles design decisions, copy, project direction, implementation prompts, and review.
- VS Code Codex edits the repository, runs checks, commits, and pushes changes.
- GitHub `main` is inspected after every pushed implementation.
- After the user says `Codex finished and pushed`, review the latest commit, confirm locked sections were not changed, and either lock the completed section or prepare one focused corrective prompt.
- After each reviewed Codex completion, provide an updated copy of this `PORTFOLIO_DIRECTION.md` so the user can replace the previous context file.

## Overall direction

### Technical Editorial

The portfolio should combine technical precision, editorial creativity, and personal identity.

It should feel:

- clean
- intentional
- creative
- technically grounded
- personal
- restrained
- recruiter/client friendly

Creativity should come primarily from typography, hierarchy, composition, whitespace, asymmetry, project storytelling, and carefully used technical motifs.

Avoid:

- cyberpunk styling
- fake terminals or fake code editors
- excessive coding symbols
- excessive gradients
- glassmorphism
- floating decorative cards
- unnecessary animations
- animated grids
- cursor effects
- parallax
- meaningless statistics
- skill percentages or proficiency ratings
- unsupported rankings
- fake professional claims
- fake project metrics

Motion is a finishing layer only. Static composition must work first.

## Global requirements

Preserve:

- light theme
- dark theme
- responsive behavior
- semantic HTML
- keyboard focus
- reduced-motion support
- readable contrast
- comfortable mobile touch targets

Do not sacrifice accessibility for visual minimalism.

## Section numbering

- `00 / portfolio.ts` — Hero
- `01 / About`
- `02 / Skills`
- `03 / Projects`
- `04 / Contact`

Do not change this numbering or use `03.01`-style numbering.

## Section status

| Section | Status | Rule |
|---|---|---|
| `00 / portfolio.ts` — Hero | Locked | Do not redesign or modify during normal future work. |
| `01 / About` | Locked | Do not redesign or modify during normal future work. |
| `02 / Skills` | Locked | Do not redesign or modify during normal future work. |
| `03 / Projects` | Active / approved for implementation | Use the direction and facts below. Implementation has not started in this phase. |
| `04 / Contact` | Pending | Conform to the established Technical Editorial language. |

## Locked section: `00 / portfolio.ts` — Hero

### Approved content

- Role: `Web Developer`
- Introduction: `My work sits between structure and expression—building web experiences that are useful, considered, and clear.`
- Primary CTA: `View Projects`
- Supporting actions: `Contact Ralph`, `Resume / PDF`

### Approved design characteristics

- very large Ralph Jerome T. Yu name
- asymmetrical editorial layout
- quiet technical grid
- `00 / portfolio.ts` rendered as restrained monospace metadata
- small `RY` signature/monogram
- no Goal/Audience/Focus summary card
- no `</>` decoration
- no separate Portfolio eyebrow

### Approved page metadata

- Title: `Ralph Jerome T. Yu — Web Developer Portfolio`
- Description: `Web developer portfolio of Ralph Jerome T. Yu, featuring practical web projects and clear, useful digital experiences.`

## Locked section: `01 / About`

### Approved content

- Main statement: `I start with the problem, then build outward.`
- Copy: `I’m most interested in projects that make a process easier to follow or information easier to find. The web applications I build usually begin with a real workflow—something that needs to be organized, explained, or made easier to use.`
- Copy: `I learn through the work itself: building a first version, troubleshooting what does not hold together, and refining the result. That process connects my interest in web development with practical technical problem solving, while keeping an eye on both how a system functions and how a person experiences it.`
- Process annotation: `WORKING METHOD / understand → build → troubleshoot → refine`

### Approved design

- no photo
- no cards
- editorial two-column desktop layout
- quiet left `01 / About` margin
- large statement and body copy on the right
- one thin rule
- single process annotation

## Locked section: `02 / Skills`

### Approved direction

Use one editorial technical index rather than four cards with rounded technology chips. Do not add proficiency ratings, percentages, experience levels, or unsupported rankings.

### Approved heading and supporting copy

- Heading: `A technical toolkit for building working systems.`
- Supporting copy: `Languages, interface tools, data services, and deployment tools organized by their role in the build process.`

### Approved inventory

#### `01 / Languages`

- JavaScript
- TypeScript

#### `02 / Frontend / Web`

- Astro
- React
- Tailwind CSS
- shadcn/ui
- HeroUI

#### `03 / Backend / Data`

- Node.js
- FastAPI
- Supabase
- PostgreSQL
- MySQL
- MongoDB

#### `04 / Tools / Deployment`

- Git
- GitHub
- Vercel

### Approved implementation characteristics

- numbered category rows
- thin dividers
- colored technology SVG icons
- neutral technology names
- official documentation links
- no rounded badge containers

## Active section: `03 / Projects`

### Approved section direction

Projects should become the visual centerpiece of the portfolio through two numbered editorial project bands with alternating image/text composition. Do not use two conventional project cards.

### Section content

- Heading: `Selected work shaped around real workflows.`
- Supporting copy: `Two web projects built around practical needs: managing resort bookings and making school lost-and-found information easier to organize.`

### Desktop composition

1. `01 / Selected work` — Woodberry: content left, large screenshot right.
2. Thin editorial rule between projects.
3. `02 / Selected work` — Lost & Found: large screenshot left, content right.

### Mobile order

For both projects, use this logical order:

1. project number/type
2. title
3. context/problem
4. screenshot
5. supporting details
6. actions

### Screenshot treatment

- make screenshots substantially larger
- use screenshots as project evidence
- preserve the actual UI shown
- remove fake browser three-dot chrome
- use only a thin editorial border/frame
- avoid unnecessary cropping
- do not use laptop or device mockups

### CTA treatment

- Primary: `View live project`
- Secondary where available: `View source`
- The live project may retain the filled blue primary treatment.
- Source/repository should remain a quieter text action.

### Technology display

Display technologies as quiet editorial metadata, such as a `Built with` line or restrained text row. Do not use rounded pills or turn the project details into a giant checklist.

#### Project 01 — Woodberry

- Full name: `Woodberry Resort and Events Booking and Management System`
- Live project: `https://capstone-clone-tan.vercel.app/`
- Repository: `https://github.com/lts-razz/capstone-clone`
- Preview image: `/projects/woodberry-preview.png`
- Role: `Lead developer · Team project of 3`
- Primary contribution areas: `Front-end UI/UX · Documentation · Sales forecasting`
- Contribution scope: Ralph contributed across the system, with primary responsibility for front-end UI/UX, documentation, and sales forecasting.
- Technology metadata: `Astro · TypeScript · Tailwind CSS · Supabase · Zod · Vercel`
- Additional integrations found in the repository: `PayMongo · Brevo · Termux-based SMS notifications`
- Verified project areas: resort and events booking and management, booking creation and management, availability and blocked-date management, customer/staff/admin workflows, venue/package management, payment/status tracking, sales forecasting/reports, Google Maps integration, email/SMS notifications, public deployment, and public repository.
- Recommended compact supporting grouping: `Booking operations / Availability / Admin workflows / Notifications`

Do not display every verified area as a long checklist.

#### Project 02 — Lost & Found

- Full name: `Lost and Found Website for Local Schools`
- Live project: `https://lost-and-found-website-azure.vercel.app/`
- Repository: `https://github.com/lts-razz/Lost-and-Found-Website`
- Preview image: `/projects/lost-and-found-preview.png`
- Role: `Sole developer`
- Technology metadata: `Astro · React · JavaScript/JSX · Tailwind CSS · Supabase · Vercel`
- Verified project areas: school-focused lost-and-found database, missing/found item filtering, browseable listings, item description/color/location/status information, contact information associated with an item, public deployment, authentication, and administrative posting flow.
- Recommended concise description: `A school-focused database for organizing missing and found items, filtering listings, and making item details easier to review.`

The repository also uses Astro Heroicons, but it does not need to appear in the main visible technology line unless space and hierarchy support it.

Do not reproduce sample names, phone numbers, email addresses, or other personal information from the deployed project or screenshots.

### Project content principle

Do not force both projects into identical content lengths. Woodberry may contain more supporting detail because more information is documented. Lost & Found may remain shorter. This asymmetry should feel intentional.

## Future work after Projects

After Projects is implemented and reviewed, likely remaining work is:

- `04 / Contact`
- header/navigation review
- footer/site-ending treatment if necessary
- global visual consistency pass
- mobile/responsive review
- light/dark theme review
- accessibility QA
- deployment consistency
- final production audit

Do not redesign locked sections merely to make future sections match. Make future work conform to the established visual language.

## Review rule after Codex completion

When the user reports `Codex finished and pushed`:

1. Inspect the latest GitHub commit and changed files.
2. Confirm the requested section was implemented.
3. Confirm Hero, About, and Skills were not unnecessarily changed.
4. Check copy, links, screenshots, responsive behavior, themes, accessibility, and build status when available.
5. Identify regressions, unnecessary changes, or inconsistencies.
6. If sound, mark the section locked in the next updated version of this file.
7. If not sound, prepare one focused corrective Codex prompt.

Do not begin a new redesign cycle without a meaningful issue.