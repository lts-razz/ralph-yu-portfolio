# Portfolio Website Instructions

## Project

Build and maintain a professional single-page portfolio website for Ralph Jerome T. Yu.

The repository is an Astro portfolio using TypeScript, HTML, CSS, and Tailwind CSS. Read both `AGENTS.md` and `PORTFOLIO_DIRECTION.md` before making changes.

## Working relationship

- This repository is edited by VS Code Codex.
- The accompanying Work conversation owns design decisions, copy approval, project direction, and review.
- Do not create an intermediate prompt for another AI conversation.
- Inspect the current repository before editing.
- Preserve unrelated work and make the smallest maintainable change set that satisfies the task.
- Do not modify locked sections unless the task explicitly authorizes it or a genuine site-wide defect requires it.

## Direction and content

- Treat `PORTFOLIO_DIRECTION.md` as the current design and content source of truth.
- Do not invent project roles, contributions, technologies, metrics, testimonials, or claims.
- Use the exact approved copy when supplied.
- Do not reproduce personal information shown in project demos, screenshots, or seed data.
- Do not add placeholder content when verified project information is available.

## Design and accessibility

- Preserve the Technical Editorial direction: clean, intentional, creative, technically grounded, personal, restrained, and recruiter/client friendly.
- Preserve light mode, dark mode, responsive behavior, semantic HTML, keyboard focus, readable contrast, reduced-motion support, and comfortable mobile touch targets.
- Static composition must work before motion is added.
- Avoid cyberpunk styling, fake terminals, fake code editors, excessive coding symbols, excessive gradients, glassmorphism, floating decorative cards, animated grids, cursor effects, parallax, meaningless statistics, proficiency ratings, unsupported rankings, and fake project metrics.
- Avoid unnecessary dependencies. Do not add React or another framework to the portfolio unless the current task explicitly requires it.

## Implementation rules

- Keep components small and reusable.
- Prefer existing components, tokens, utilities, and styles over parallel implementations.
- Preserve existing URLs, anchors, theme behavior, and functional interactions unless the task explicitly changes them.
- Keep project data separate from layout when the current structure supports it.
- Use accessible link text and meaningful image `alt` text.
- External links should use safe, intentional behavior and clear accessible labels.

## Verification

After any meaningful change:

1. Review the diff and confirm only in-scope files changed.
2. Run `npm run build`.
3. Run `npm run astro check` when the change affects Astro or TypeScript files and the command is available.
4. Check responsive behavior at desktop and mobile widths.
5. Check light and dark themes.
6. Check keyboard focus and reduced-motion behavior when relevant.
7. Report changed files, verification results, known limitations, and the commit hash.

Do not claim completion if the build or required checks fail. Fix in-scope failures before committing, or report the exact blocker.

## Git workflow

- Commit only files related to the approved task.
- Use a concise, descriptive commit message.
- Push the completed commit to the expected branch when instructed by the task workflow.
- Do not rewrite history, force-push, or delete unrelated files.
- Do not edit `PORTFOLIO_DIRECTION.md` as part of a normal implementation unless the task explicitly asks for that file to be updated.
