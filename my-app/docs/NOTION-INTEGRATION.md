# Connecting Notion to oliviabisset.com

This guide walks through using **Notion as a headless CMS** for your Next.js portfolio. You edit content in Notion; the site fetches it via the Notion API at build time or on a schedule.

---

## Overview

```
┌─────────────────────┐
│  Notion databases   │  ← You edit projects, experience, etc. here
│  (Projects, etc.)   │
└──────────┬──────────┘
           │ Notion API (server-side only)
           ▼
┌─────────────────────┐
│  Next.js app        │  ← Server Components fetch & render data
│  (my-app/)          │
└─────────────────────┘
           │
           ▼
     oliviabisset.com
```

**What Notion is good for on this site**

| Content | Use Notion? |
|---------|-------------|
| Projects | ✅ Yes |
| Experience | ✅ Yes |
| Skills / tags | ✅ Yes |
| About page copy | ✅ Optional |
| Contact form inbox | ✅ Possible |
| User login / auth | ❌ Use Supabase or similar instead |

**Important:** The Notion MCP plugin in Cursor helps *you* manage Notion while developing. It does **not** connect your live website. The deployed site uses the **Notion REST API** with a secret key stored in environment variables.

---

## Step 1 — Create a Notion integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations).
2. Click **New integration**.
3. Name it something like `Olivia Bisset Portfolio`.
4. Select your workspace.
5. Under **Capabilities**, enable:
   - **Read content** (required)
   - **Update content** (only if you want the site to write back, e.g. contact forms)
6. Click **Submit**.
7. Copy the **Internal Integration Secret** — it starts with `secret_` or `ntn_`.  
   You will use this as `NOTION_API_KEY`. **Never commit it to git.**

---

## Step 2 — Create Notion databases

Create one database per content type. Suggested structure for this portfolio:

### Projects database

| Property name | Type | Notes |
|---------------|------|-------|
| **Name** | Title | Project name |
| **Slug** | Text | URL-friendly id, e.g. `lemonadecode` |
| **Category** | Multi-select | e.g. Web Development, SaaS |
| **Type** | Select | Client Project, Product Development, Hackathon |
| **Summary** | Text | Short description |
| **Contributions** | Text | Comma-separated or one per line |
| **Technologies** | Multi-select | React, WordPress, etc. |
| **Status** | Select | Active, Completed, Award |
| **Award** | Checkbox | Show trophy badge |
| **Award Label** | Text | e.g. `3rd Place — Google AI for Social Good` |
| **Featured** | Checkbox | Show on homepage |
| **Order** | Number | Sort order on projects page |

### Experience database

| Property name | Type | Notes |
|---------------|------|-------|
| **Name** | Title | Role / project title |
| **Category** | Multi-select | Enterprise Software, SaaS, etc. |
| **Summary** | Text | What you did |
| **Impact** | Text | Outcome / results |
| **Order** | Number | Display order |

### Optional: Skills database

| Property name | Type | Notes |
|---------------|------|-------|
| **Name** | Title | e.g. React |
| **Group** | Select | Languages, Frameworks, Platforms, Design |
| **Order** | Number | Sort within group |

---

## Step 3 — Share databases with your integration

For **each** database you created:

1. Open the database as a full page in Notion.
2. Click **⋯** (top right) → **Connections** (or **Connect to**).
3. Find your integration (`Olivia Bisset Portfolio`) and connect it.

If you skip this step, API calls will return `404` or `object_not_found`.

---

## Step 4 — Get database IDs

Each Notion database has a 32-character ID in its URL:

```
https://www.notion.so/yourworkspace/abc123def456...?v=...
                              └──── database ID ────┘
```

Copy the ID (with or without hyphens — both work). You need one ID per database:

- Projects → `NOTION_PROJECTS_DB_ID`
- Experience → `NOTION_EXPERIENCE_DB_ID`
- Skills (optional) → `NOTION_SKILLS_DB_ID`

---

## Step 5 — Add environment variables

Create `my-app/.env.local` (this file is gitignored):

```env
NOTION_API_KEY=secret_your_integration_secret_here

NOTION_PROJECTS_DB_ID=your_projects_database_id
NOTION_EXPERIENCE_DB_ID=your_experience_database_id
NOTION_SKILLS_DB_ID=your_skills_database_id
```

**Local development:** Restart the dev server after changing `.env.local`.

**Production (Vercel):**

1. Open your project on [vercel.com](https://vercel.com).
2. **Settings** → **Environment Variables**.
3. Add the same keys and values for Production (and Preview if desired).
4. Redeploy.

---

## Step 6 — Install the Notion SDK

From the `my-app` directory:

```bash
pnpm add @notionhq/client
```

---

## Step 7 — Create a Notion client helper

Create `my-app/lib/notion.ts`:

```typescript
import { Client } from "@notionhq/client";

if (!process.env.NOTION_API_KEY) {
  throw new Error("NOTION_API_KEY is not set");
}

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
```

Add `my-app/lib/notion/` for query helpers, e.g. `projects.ts`:

```typescript
import { notion } from "../notion";

export async function getProjects() {
  const databaseId = process.env.NOTION_PROJECTS_DB_ID;
  if (!databaseId) throw new Error("NOTION_PROJECTS_DB_ID is not set");

  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ property: "Order", direction: "ascending" }],
  });

  return response.results;
}
```

You will map Notion property objects to the `Project` type already used in `app/projects/page.tsx`.

---

## Step 8 — Map Notion properties to your types

Notion returns rich property objects. Example mapper for a project:

```typescript
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

function getPlainText(prop: { rich_text?: { plain_text: string }[] } | undefined) {
  return prop?.rich_text?.map((t) => t.plain_text).join("") ?? "";
}

function getTitle(page: PageObjectResponse) {
  const titleProp = page.properties.Name;
  if (titleProp?.type === "title") {
    return titleProp.title.map((t) => t.plain_text).join("");
  }
  return "";
}

function getMultiSelect(page: PageObjectResponse, name: string) {
  const prop = page.properties[name];
  if (prop?.type === "multi_select") {
    return prop.multi_select.map((o) => o.name);
  }
  return [];
}

export function mapNotionToProject(page: PageObjectResponse) {
  const props = page.properties;

  return {
    name: getTitle(page),
    category: getMultiSelect(page, "Category"),
    type:
      props.Type?.type === "select" ? (props.Type.select?.name ?? "") : "",
    summary: getPlainText(
      props.Summary?.type === "rich_text" ? props.Summary : undefined
    ),
    contributions: getPlainText(
      props.Contributions?.type === "rich_text" ? props.Contributions : undefined
    )
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean),
    technologies: getMultiSelect(page, "Technologies"),
    status:
      props.Status?.type === "select" ? (props.Status.select?.name ?? "") : "",
    award:
      props.Award?.type === "checkbox" ? props.Award.checkbox : false,
  };
}
```

Adjust property names to match exactly what you created in Notion (case-sensitive).

---

## Step 9 — Update pages to fetch from Notion

Convert static pages to **async Server Components**.

### Projects page (`app/projects/page.tsx`)

```typescript
import { getProjects } from "@/lib/notion/projects";
import { mapNotionToProject } from "@/lib/notion/mappers";

export const revalidate = 3600; // Re-fetch from Notion every hour

export default async function Projects() {
  const pages = await getProjects();
  const projects = pages
    .filter((p): p is PageObjectResponse => "properties" in p)
    .map(mapNotionToProject);

  // Render using existing ProjectCard component...
}
```

### Experience page (`app/experience/page.tsx`)

Same pattern with `getExperience()` and your experience mapper.

### Homepage featured projects (`app/page.tsx`)

Query with a filter:

```typescript
filter: {
  property: "Featured",
  checkbox: { equals: true },
},
```

---

## Step 10 — Keep a fallback (recommended)

While setting up Notion, keep your hardcoded arrays as a fallback so the site never breaks:

```typescript
let projects;

try {
  projects = await getProjectsFromNotion();
} catch (error) {
  console.error("Notion fetch failed, using fallback:", error);
  projects = fallbackProjects;
}
```

Remove the fallback once Notion is populated and stable.

---

## Step 11 — Caching and revalidation

| Strategy | When to use |
|----------|-------------|
| `export const revalidate = 3600` | Refresh content every hour (simple) |
| `export const revalidate = 60` | Near-real-time, more API usage |
| On-demand revalidation | After you publish in Notion, call a secret API route to refresh |

Example on-demand route (`app/api/revalidate/route.ts`):

```typescript
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/projects");
  revalidatePath("/experience");
  revalidatePath("/");

  return Response.json({ revalidated: true });
}
```

Add `REVALIDATION_SECRET` to `.env.local` and hit:

```
POST /api/revalidate?secret=your_secret
```

after updating Notion (or automate with a Notion webhook via Zapier/Make).

---

## Step 12 — Migrate existing content into Notion

Copy data from your current hardcoded arrays into Notion:

1. **Projects** — from `app/projects/page.tsx` → Projects database  
2. **Experience** — from `app/experience/page.tsx` → Experience database  
3. **Homepage featured items** — mark `Featured = true` on selected projects  

You can paste rows manually or ask Cursor (with Notion MCP connected) to help bulk-create rows.

---

## Step 13 — Deploy checklist

- [ ] All databases shared with the integration  
- [ ] `NOTION_API_KEY` set in Vercel (Production)  
- [ ] All `NOTION_*_DB_ID` values set in Vercel  
- [ ] `.env.local` is in `.gitignore` (default for Next.js)  
- [ ] Site builds successfully: `pnpm build`  
- [ ] Projects and Experience pages show Notion data  
- [ ] Optional: set up revalidation webhook or cron  

---

## Security notes

- **Never** expose `NOTION_API_KEY` in client components or `NEXT_PUBLIC_*` variables.  
- Only call Notion from **Server Components**, **Route Handlers**, or **Server Actions**.  
- Use read-only integration capabilities unless you need write access (e.g. contact forms).  
- Rotate the integration secret if it is ever leaked.

---

## Troubleshooting

| Error | Likely cause | Fix |
|-------|--------------|-----|
| `object_not_found` | Database not shared with integration | Step 3 |
| `unauthorized` | Wrong or missing API key | Check `NOTION_API_KEY` |
| Empty results | Wrong database ID | Re-copy ID from URL |
| Property undefined | Property name mismatch | Match Notion column names exactly |
| Works locally, fails on Vercel | Env vars not set in production | Vercel → Settings → Environment Variables |

---

## Optional next steps

- **Contact form → Notion:** POST form data to a Route Handler that creates a page in a “Leads” database.  
- **Dynamic project pages:** `app/projects/[slug]/page.tsx` using the Slug property.  
- **Preview drafts:** Add a `Published` checkbox; filter `Published = true` in production only.  
- **Supabase alongside Notion:** Notion for marketing content; Supabase for auth, analytics, or form backups.

---

## File structure (after integration)

```
my-app/
├── .env.local                    # Secrets (not committed)
├── lib/
│   └── notion/
│       ├── client.ts             # Notion Client instance
│       ├── projects.ts           # getProjects(), getFeaturedProjects()
│       ├── experience.ts         # getExperience()
│       └── mappers.ts            # Notion → TypeScript types
├── app/
│   ├── projects/page.tsx         # Fetches from Notion
│   ├── experience/page.tsx       # Fetches from Notion
│   └── api/revalidate/route.ts   # Optional on-demand refresh
└── docs/
    └── NOTION-INTEGRATION.md     # This file
```

---

## Quick reference — official docs

- [Notion API overview](https://developers.notion.com/docs/getting-started)
- [Create a Notion integration](https://developers.notion.com/docs/create-a-notion-integration)
- [@notionhq/client on npm](https://www.npmjs.com/package/@notionhq/client)
- [Next.js data fetching & revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching)
