import {projects} from '@/components/sections/Projects/data';

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
