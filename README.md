# GREENRAIL

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)

**AI-assisted decision rails for public goods funding.**

GREENRAIL helps committees, funders, and communities evaluate proposals with more clarity, fairness, and transparency.

---

## Why GREENRAIL exists

Public goods funding suffers from decision entropy: too many proposals, inconsistent reviews, opaque processes, and weak transparency. GREENRAIL provides structured AI-assisted decision rails that give funding committees better infrastructure — without replacing human judgment.

**AI assists. Humans decide. Everything is auditable.**

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: System sans-serif stack

---

## Local Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Install and run

```bash
git clone https://github.com/your-org/greenrail.git
cd greenrail
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type check |

---

## Folder Structure

```
greenrail/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   ├── demo/page.tsx       # Demo request page
│   └── platform/page.tsx   # Platform overview page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   └── sections/
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Solution.tsx
│       ├── HowItWorks.tsx
│       ├── Features.tsx
│       ├── WhoItsFor.tsx
│       ├── Principles.tsx
│       ├── DashboardPreview.tsx
│       └── CallToAction.tsx
├── lib/
│   ├── utils.ts            # Utility functions (cn helper)
│   └── constants.ts        # Site constants
└── public/                 # Static assets
```

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Environment Variables

Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME=GREENRAIL
```

---

## Roadmap

### Phase 1 — Marketing Site (current)
- [x] Landing page with all sections
- [x] Platform overview page
- [x] About, Contact, Demo placeholder pages
- [x] Responsive header and footer

### Phase 2 — Core Platform
- [ ] Applicant Portal (proposal submission)
- [ ] Admin Funding Round Setup
- [ ] Reviewer Dashboard

### Phase 3 — AI Layer
- [ ] Proposal intake normalization
- [ ] AI-assisted scoring and summarization
- [ ] Cross-proposal comparison engine
- [ ] Uncertainty and bias flagging

### Phase 4 — Decision Infrastructure
- [ ] Structured reviewer workflows
- [ ] Funding scenario modeling
- [ ] Disagreement tracking and surfacing

### Phase 5 — Transparency
- [ ] Public transparency dashboard
- [ ] Audit trail generation
- [ ] Applicant feedback reports

### Phase 6 — Scale
- [ ] Multilingual support
- [ ] Multi-currency funding
- [ ] API access for integrations

---

## License

MIT © GREENRAIL
