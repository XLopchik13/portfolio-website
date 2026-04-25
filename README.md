# Portfolio Website

Personal portfolio for a Full Stack Developer. Built with Next.js, TypeScript, and Tailwind CSS v4. Notion-inspired design.

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Content:** MDX via `next-mdx-remote`
- **Email:** Resend
- **Analytics:** Vercel Analytics
- **Linting:** Biome
- **Deployment:** Vercel

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/          — Next.js App Router pages and layouts
components/   — UI components organized by section
features/     — Domain logic (scroll reveal, active nav, accordion)
lib/          — Utilities, MDX loader, Zod schemas
content/      — MDX project files
styles/       — Global CSS, design system tokens
public/       — Static assets
```

## Adding a Project

Create a new `.mdx` file in `content/projects/`:

```mdx
---
title: Project Name
emoji: 🚀
tagline: Short one-liner
description: Full description
tech: [React, TypeScript, PostgreSQL]
type: Full Stack · SaaS
date: 2024-01-15
github: https://github.com/...
demo: https://...
featured: true
---

## Overview
...
```

## Environment Variables

```env
RESEND_API_KEY=re_...
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```
