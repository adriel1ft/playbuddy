# playbuddy

The buddy who helps you create playlists.

## Stack

- **React 18** + **TypeScript**
- **Vite** — dev server & build
- **Tailwind CSS** — styling
- **React Router v6** — navegação entre páginas

## Setup

```bash
npm install
npm run dev
```

O app abre em `http://localhost:5173`.

## Estrutura

```
src/
├── main.tsx              # Entry point (BrowserRouter)
├── App.tsx               # Rotas + layout compartilhado
├── index.css             # Tailwind + tema dark do Curator
├── components/
│   ├── Sidebar.tsx       # Logo + navegação + New Mix
│   ├── TopBar.tsx        # Título da página + avatar
│   └── icons.tsx         # Ícones SVG inline
└── pages/
    ├── Discover.tsx      # Tela principal (add música, vibes, gerar)
    ├── Library.tsx       # Placeholder
    ├── Moods.tsx         # Placeholder
    ├── Profile.tsx       # Placeholder
    └── Placeholder.tsx   # Componente reutilizável "em breve"
```

## Scripts

- `npm run dev` — inicia o Vite em modo dev
- `npm run build` — build de produção em `dist/`
- `npm run preview` — preview do build final
