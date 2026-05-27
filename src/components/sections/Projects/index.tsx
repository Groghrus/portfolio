const projects = [
  {
    company: "Crystal Sound",
    period: "Июль 2022 — Апрель 2026",
    title: "CRM-система",
    description:
      "Полный рефакторинг CRM с Vue 2 на React/TypeScript: модули заказов, календарь (FullCalendar), аналитика (ApexCharts), интерактивные таблицы (MUI X DataGrid), drag-and-drop задач. Интеграция Auth0, мультиязычность (i18next), генерация PDF-отчётов.",
    achievements: [
      "Сократил время сборки и загрузки CRM на 45% после переписывания с Vue 2 на React + Vite + TS",
      "Разработал кастомный UI Kit, унифицировав интерфейсы 3 проектов и снизив time-to-market на 30%",
      "Ускорил работу с таблицами (10k+ строк) на 60% за счёт виртуализации, мемоизации и оптимизации ререндеров",
      "Покрытие автотестами выросло до 65%, время онбординга новых разработчиков сократилось на 25%",
    ],
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Vite",
      "MUI X",
      "FullCalendar",
      "ApexCharts",
      "Auth0",
      "i18next",
      "WebSocket",
    ],
  },
  {
    company: "Crystal Sound",
    period: "Июль 2022 — Апрель 2026",
    title: "Веб-приложение управления GPS-маршрутами аудиогидов",
    description:
      "Интерактивная карта (MapLibre) с редактированием меток, real-time синхронизация через WebSocket, управление аудиотреками, PWA для оффлайн-режима и мультиязычность (RU, EN, IT).",
    achievements: [
      "Реализовал real-time синхронизацию через WebSocket, снизив задержку обновления геоданных до менее 200 мс",
      "Оптимизировал работу с большими объёмами данных через виртуализированные таблицы",
      "Внедрил PWA для оффлайн-режима и мультиязычность (RU, EN, IT)",
    ],
    tags: [
      "React",
      "TypeScript",
      "MapLibre GL",
      "WebSocket",
      "PWA",
      "i18next",
      "react-window",
    ],
  },
  {
    company: "Crystal Sound",
    period: "Июль 2022 — Апрель 2026",
    title: "Аудио-конвертер и менеджер плейлистов",
    description:
      "Monorepo (Lerna) с клиентской (React) и серверной (Node.js/Express) частями для обработки аудиофайлов. Конвертация MP3/WAV/FLAC/AAC/OGG, drag-and-drop сортировка, визуальный сплит аудио, REST API + PostgreSQL.",
    achievements: [
      "Создал монолитную архитектуру с клиентской и серверной частями для обработки аудиофайлов",
      "Ускорил отклик интерфейса при работе с большими списками на 40% благодаря react-window и PWA",
      "Настроил REST API и PostgreSQL (Sequelize, миграции) для хранения данных и генерации QR-кодов",
    ],
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Lerna",
      "Docker",
      "PWA",
      "dnd-kit",
    ],
  },
  {
    company: "Crystal Sound",
    period: "Июль 2022 — Апрель 2026",
    title: "Telegram-боты мониторинга",
    description:
      "Бот мониторинга серверов (CPU/RAM/Disk), алерты в Telegram при деградации. Бот GitLab CI/CD: уведомления о статусе пайплайнов и деплоях. Интеграция через Webhook.",
    achievements: [
      "Сократил среднее время реакции на инциденты (MTTR) на 40%",
      "Исключил 80% ручных проверок деплоев благодаря автоматическим уведомлениям",
      "Автоматизировал CI/CD пайплайны, сократив время сборки на 50% и количество ручных операций релиза на 70%",
    ],
    tags: ["Node.js", "Telegram Bot API", "GitLab CI/CD", "Docker", "Webhook"],
  },
  {
    company: "Смарт-ком",
    period: "Июнь 2021 — Апрель 2022",
    title: "Маркетплейс услуг для сотрудников",
    description:
      "Аналог Госуслуг: каталог услуг, личный кабинет, система заявок на Vue.js 2 + Element UI. Интеграция с C# бэкендом через REST API, адаптивная вёрстка.",
    achievements: [
      "Ускорил загрузку интерфейсов на 35% за счёт оптимизации Vue-компонентов и ленивой загрузки",
      "Повысил корректность отображения на мобильных на 35% после адаптации интерфейсов",
      "Сократил время разработки новых экранов на 40% благодаря библиотеке переиспользуемых компонентов",
    ],
    tags: ["Vue.js 2", "Element UI", "REST API", "C#", "CSS3/SASS", "Figma"],
  },
  {
    company: "Смарт-ком",
    period: "Июнь 2021 — Апрель 2022",
    title: "Система мониторинга и обучающий портал",
    description:
      "Дашборды визуализации данных с интеграцией Microsoft SharePoint. Обучающий портал с видеоплеером, трекингом прогресса и системой онлайн-тестирования. Промо-лендинг для внутреннего сервиса.",
    achievements: [
      "Оптимизировал работу с SharePoint API, сократив время отклика данных на 45%",
      "Снизил потребление памяти браузером на 30% и ускорил скролл таблиц на 40%",
      "Повысил конверсию заявок на 20% после оптимизации Lighthouse-метрик до 90+",
    ],
    tags: ["Vue.js 2", "SharePoint", "MySQL", "Docker", "Figma", "REST API"],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full border-b border-border/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl lg:text-5xl">
            Опыт <span className="text-cyan-500 dark:text-cyan-400">работы</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 2xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border bg-card p-4 backdrop-blur-sm transition hover:border-cyan-400/30 sm:rounded-2xl sm:p-6 border-border/60 hover:bg-card/80"
            >
              <div className="mb-3 sm:mb-4">
                <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                  <span className="text-[11px] font-medium text-cyan-500/80 dark:text-cyan-400/80 sm:text-xs">
                    {project.company}
                  </span>
                  <span className="text-[11px] text-muted-foreground/60 sm:text-xs">
                    {project.period}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-card-foreground transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-300 sm:text-base">
                  {project.title}
                </h3>
              </div>

              <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:mb-4">
                {project.description}
              </p>

              <ul className="mb-4 flex flex-col gap-1.5 sm:mb-5">
                {project.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[11px] leading-relaxed text-muted-foreground/80 sm:text-xs"
                  >
                    <svg
                      className="mt-0.5 size-3 shrink-0 text-cyan-500 dark:text-cyan-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mb-1 mt-auto flex flex-wrap gap-1 sm:mb-0 sm:gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border px-1.5 py-0.5 text-[10px] font-medium sm:px-2 sm:text-[11px] border-border/50 bg-muted/30 text-cyan-600/70 dark:text-cyan-300/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
