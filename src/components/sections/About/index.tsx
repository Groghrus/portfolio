import {techStack} from '@/components/sections/About/data';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full border-b border-border/40 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold tracking-widest text-cyan-400 dark:text-cyan-400 uppercase">
          Обо мне
        </p>

        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-2">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:mb-6 sm:text-4xl lg:text-5xl">
              Фронтенд-разработчик
              <br />
              <span className="text-cyan-500 dark:text-cyan-400">
                с 4+ годами опыта
              </span>
            </h2>

            <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:mb-4 sm:text-base">
              Привет! Меня зовут Дмитрий. Я Frontend-разработчик с 4+ годами
              коммерческого опыта. Создаю клиентские приложения и удобные
              интерфейсы для пользователей на React и TypeScript.
            </p>

            <p className="mb-0 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
              Работал в стартапах и продуктовых проектах (в т.ч. в сфере
              туризма): разрабатывал CRM-системы, интерактивные карты,
              мультимедийные приложения, Telegram-ботов и лендинги. Участвовал в
              выборе стека, проектировании архитектуры и планировании спринтов.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground/60 uppercase sm:mb-5 sm:text-sm">
              Стек
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border px-2.5 py-1 text-xs backdrop-blur-sm transition hover:border-cyan-400/40 sm:px-3 sm:py-1.5 sm:text-sm border-border bg-card/50 text-muted-foreground hover:text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-4">
              <div className="rounded-xl border border-border bg-card p-2.5 text-center backdrop-blur-sm sm:rounded-2xl sm:p-4">
                <p className="text-lg font-bold text-cyan-500 dark:text-cyan-400 sm:text-2xl">
                  4+
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground sm:mt-1 sm:text-xs">
                  года опыта
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-2.5 text-center backdrop-blur-sm sm:rounded-2xl sm:p-4">
                <p className="text-lg font-bold text-cyan-500 dark:text-cyan-400 sm:text-2xl">
                  6
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground sm:mt-1 sm:text-xs">
                  проектов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
