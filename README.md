# 🌐 Site Cloner Agent

**Founding AI Engineer — Assignment: AI-Powered Frontend Website Cloning Agent**

An AI agent that takes a public website URL, analyzes it, and rebuilds it as a real **Next.js + TypeScript + Tailwind** frontend — then lets you edit it with plain-English prompts like *"change the primary color to blue"* or *"add a testimonials section."* The output is a brand-new implementation, not an embedded copy of the original site.

Made by **Uzair Meran Khan**.

---

## 🔄 Workflow

```
Website URL
   ↓
AI Agent
   ↓
Analyze Website
   ↓
Understand UI / Layout
   ↓
Generate React / Next.js Frontend
   ↓
Run & Validate
   ↓
Local Preview
   ↓
Modify using AI Prompts
```

---

## 🚀 Setup

```bash
npm run setup            # install deps + Chromium
cp .env.example .env     # add your API key
npm start                # opens studio at http://localhost:4000
```

Paste a URL → click **Clone**. Or use the terminal:

```bash
npm run clone -- https://example.com
npm run modify -- <site-name> "Make the navbar sticky"
```

> No API key? It still runs in a basic offline mode, with lower accuracy.

---

## 🏗️ Architecture

**Analyze** (Playwright reads layout, sections, nav, text, images, colors, typography, spacing, components, responsive structure) → **Generate** (AI writes one React component per section) → **Validate & Repair** (type-checks + fixes build/runtime errors, falls back to safe code if needed) → **Preview** (live `next dev` in the studio) → **Score & Refine** (compares against the original and fixes weak sections) → **Modify** (natural-language edits, undoable).

---

## 🛠️ Tech / Models

- **Agent:** TypeScript, Node.js, Express
- **Browser automation:** Playwright + `sharp`/`pixelmatch`
- **Generated sites:** Next.js 15, React 19, TypeScript, Tailwind CSS v4
- **AI:** Any OpenAI-compatible model (default: Groq)

---

## ✅ Requirements Covered

- Accepts any public website URL — not hardcoded to one site, tested across multiple websites
- Analyzes layout, sections, navigation, text, images, colors, typography, spacing, components, and responsive structure
- Generates a responsive React/Next.js frontend with reusable components
- Detects and auto-repairs generated-code/build errors
- Provides a local preview (desktop, tablet, mobile)
- Supports natural-language modifications: change colors, add/remove sections, make elements sticky, replace content, etc.
- Runs fully locally — no hosting required

---

## 🔑 Key Decisions

- Reads the **rendered** page (not raw HTML) for accuracy
- Sends compact **outlines** instead of full HTML to keep prompts cheap
- Generates **one component per section**, in parallel, to isolate errors
- Uses **theme tokens** so style changes are one-line edits
- Has a **deterministic fallback** so the build never breaks

---

## ⚠️ Limitations

- Only clones the given page, not the whole site
- Videos, canvases, and complex animations are simplified
- Can't access sites behind logins or bot-protection
- Similarity scoring is approximate, not pixel-perfect

---

Made with ❤️ by **Uzair Meran Khan**
