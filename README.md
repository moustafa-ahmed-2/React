# React Project Structure

A small React + TypeScript app (Vite) built to demonstrate a clean, scalable folder structure.
Everything lives under `src`, and each folder holds exactly one kind of thing.

## Run it

```bash
npm install
npm run dev
```

## Structure

```
src/
├── components/
│   ├── ui/          Button.tsx, Input.tsx            — presentational, reusable
│   ├── layout/      Navbar.tsx, Footer.tsx, Layout.tsx — page shell
│   ├── providers/   AppProvider.tsx                  — context providers
│   ├── skeleton/    LoadingSkeleton.tsx              — loading placeholders
│   └── common/      EmptyState.tsx, ErrorMessage.tsx — shared states
├── hooks/           useDebounce.ts, useUsers.ts      — reusable logic
├── api/             axios.ts, users.api.ts           — HTTP layer
├── types/           user.types.ts, api.types.ts      — shared TypeScript types
├── store/           auth.store.ts, index.ts          — global state (Zustand)
├── pages/           Home.tsx, Users.tsx, About.tsx, NotFound.tsx
├── constants/       routes.ts, config.ts             — fixed values
├── i18n/            config.ts, en.json, ar.json      — translations
├── assets/          icons/logo.svg                   — images, icons, fonts
├── schemas/         user.schema.ts                   — Zod validation
└── utils/           formatDate.ts, cn.ts             — pure helpers
```

## Conventions

- Components are `PascalCase.tsx`, everything else is `camelCase.ts`.
- Files with a role in their name use it as a suffix: `users.api.ts`, `user.types.ts`, `auth.store.ts`, `user.schema.ts`.
- Pages compose components; components never call the API directly — hooks do.
- API responses are validated with Zod before reaching the UI.
