import {ExternalLink, Github} from 'lucide-react';
import {petProjects} from '@/components/sections/PetProjects/data';

export default function PetProjects() {
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-8 text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl lg:text-5xl">
          Pet-<span className="text-cyan-500 dark:text-cyan-400">проекты</span> и примеры кода
        </h2>

        <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 2xl:grid-cols-3">
              {petProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col rounded-xl border bg-card p-4 backdrop-blur-sm transition sm:rounded-2xl sm:p-6 border-border/60"
                >
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-sm font-semibold text-card-foreground sm:text-base">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border px-1.5 py-0.5 text-[10px] font-medium sm:px-2 sm:text-[11px] border-border/50 bg-muted/30 text-cyan-600/70 dark:text-cyan-300/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.deployUrl && (
                      <a href={project.deployUrl} target={'_blank'} className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 px-3 py-1.5 text-[11px] font-medium text-cyan-600 dark:text-cyan-300 sm:text-xs">
                        <ExternalLink className="size-3" />
                        Демо
                      </a>
                    )}
                    <a href={project.githubUrl} target={'_blank'} className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 px-3 py-1.5 text-[11px] font-medium text-cyan-600 dark:text-cyan-300 sm:text-xs">
                      <Github className="size-3" />
                      GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>

        </div>
      </div>
    </section>
  )
}
