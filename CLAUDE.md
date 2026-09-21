# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing website for SHAKA AI, a single-page React/Vite site. It was scaffolded from a Manus "web-static" template (`template.json` is that scaffold's snapshot — not app code, don't edit it for feature work). Content lives entirely in `client/src/components/sections/*`, rendered in order by `client/src/pages/Home.tsx`.

## Commands

Package manager is pnpm (see `packageManager` field in package.json).

```bash
pnpm dev          # vite dev server on :3000 (falls back to next free port)
pnpm check        # tsc --noEmit — type-check the whole project
pnpm format       # prettier --write .
pnpm build        # vite build (client) + esbuild bundle of server/index.ts -> dist/
pnpm build:cf     # vite build only, for Cloudflare Pages (no Node server bundle)
pnpm preview       # vite preview -- serve the production client build locally
pnpm start        # NODE_ENV=production node dist/index.js
```

There is no test runner configured (vitest is a devDependency but no test files/scripts exist). There is no lint script; rely on `pnpm check` and `pnpm format`.

## Architecture

- **Static site, dual deploy targets.** `pnpm build` produces both a client bundle and a bundled Express server (`server/index.ts`) that just serves `dist/public` and falls back to `index.html` for client-side routing — used for a Node host. `pnpm build:cf` skips the server bundle for Cloudflare Pages, which serves the static output directly. There are no API routes; `server/index.ts` is a static file server only.
- **Routing** is `wouter`, defined in `client/src/App.tsx`. Only two real routes exist: `/` (`Home`) and a catch-all `NotFound`.
- **Page = ordered section stack.** `Home.tsx` composes `Navigation`, then section components (`Hero`, `Problem`, `Platform`, `Architecture`, `Trust`, `Founder`, `Vision`) from `client/src/components/sections/`, then `Footer`. Adding/removing page content means adding/removing a section component here, not editing markup inline in `Home.tsx`.
- **Theming:** `ThemeProvider` (`client/src/contexts/ThemeContext.tsx`) is mounted in `App.tsx` with `defaultTheme="dark"` but `switchable` is not passed, so it's effectively fixed and there is no theme toggle in the UI. The design is otherwise single-palette (see below), not dark/light-adaptive.
- **Design tokens** live in `client/src/index.css` as CSS custom properties consumed via Tailwind v4's `@theme inline`. The current, live palette is "Forest green × white × warm off-white" (see the `SHAKA AI green palette` block and `:root` vars — deep green `#12372A`, mid green `#245C46`, off-white `#F8F9F6`, etc.), Inter for type. **`ideas.md` at the repo root describes an earlier, now-superseded dark "Obsidian Command" amber/near-black concept — it does not reflect the current design and should not be used as a source of truth for colors; trust `index.css` instead.**
- **UI primitives:** `client/src/components/ui/` is a full shadcn/ui (`new-york` style, see `components.json`) set of ~50 generated primitives (button, dialog, card, etc.) — treat these as library code, prefer composing them over hand-rolling equivalents, and regenerate/extend via shadcn conventions rather than editing structure by hand.
- **Path aliases** (`vite.config.ts` / `tsconfig.json`): `@` → `client/src`, `@shared` → `shared`, `@assets` → `attached_assets`.
- **`shared/`** holds constants used by both client and (nominally) server code — currently just a session cookie name. `client/src/const.ts` re-exports these plus an OAuth login-URL helper; note there is no corresponding `/api/oauth/*` route in `server/index.ts` today, so that helper is currently unused/vestigial rather than wired up.
- **Leftover Manus scaffold plumbing:** `vite.config.ts` includes Manus-specific dev-only plugins (debug log collector at `/__manus__/logs`, a storage proxy at `/manus-storage`) and `allowedHosts` for `*.manus*.computer` domains. These are template artifacts for the Manus dev environment, not application features — leave them alone unless specifically asked to change the deploy/dev tooling.
