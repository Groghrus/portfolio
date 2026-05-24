# Portfolio — Киселев Дмитрий

Фронтенд-разработчик с 4+ годами опыта. React, TypeScript, Next.js.

## Stack

| Технология | Версия |
|---|---|
| Next.js | 15.5.4 (Turbopack) |
| React | 19.1 |
| TypeScript | 5.x |
| Tailwind CSS | 4.1 |
| shadcn/ui | latest |
| Framer Motion | 12.x |
| Lucide React | 0.544 |
| next-themes | 0.4 |

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3002](http://localhost:3002).

### Скрипты

| Команда | Описание |
|---|---|
| `npm run dev` | Запуск dev-сервера (Turbopack, порт 3002) |
| `npm run build` | Production-сборка |
| `npm run start` | Запуск production-сервера |
| `npm run lint` | ESLint проверка |

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx          # Корневой layout (шрифты, метаданные, ThemeProvider)
│   ├── page.tsx            # Главная страница (Hero, About, Projects, Contact)
│   └── globals.css         # Глобальные стили
├── components/
│   ├── providers/
│   │   └── theme-provider.tsx  # Обёртка next-themes
│   ├── sections/
│   │   ├── Header/         # Шапка с навигацией, бургер-меню, ThemeToggle
│   │   ├── Hero/           # Герой-секция с canvas-частицами
│   │   ├── About/          # Обо мне и стек
│   │   ├── Projects/       # Проекты и опыт
│   │   ├── Contact/        # Контакты
│   │   └── Footer/         # Подвал
│   └── ui/                 # shadcn/ui компоненты
│       ├── button.tsx
│       └── ThemeToggle/
├── hooks/
│   └── useScrollSpy.ts     # Хук для подсветки активного пункта навигации
├── lib/
│   └── utils.ts            # Утилита cn() (clsx + tailwind-merge)
└── styles/
    ├── text.css             # Типографика (text-h1, text-body1, ...)
    └── shadcn-theme.css     # CSS-переменные темы (неоновая cyan)
```

## Тема

Тёмная и светлая тема. Акцентный цвет — неоновый cyan (`cyan-*`). Переключение через кнопку в хедере.

CSS-переменные: `src/styles/shadcn-theme.css`

## Команды для добавления новых shadcn/ui компонентов

```bash
npx shadcn@latest add <component-name>
```
