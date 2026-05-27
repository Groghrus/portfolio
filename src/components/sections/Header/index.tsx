"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "@/components/ui/ThemeToggle"
import { Button } from "@/components/ui/button"
import { Code, FolderKanban, Mail, Menu, User, X } from "lucide-react"
import { useScrollSpy } from "@/hooks/useScrollSpy"

const links = [
  { title: "Обо мне", href: "/#about", icon: User, type: "hash" as const },
  { title: "Опыт работы", href: "/#projects", icon: FolderKanban, type: "hash" as const },
  { title: "Проекты", href: "/pet-projects", icon: Code, type: "page" as const },
  { title: "Контакты", href: "/#contact", icon: Mail, type: "hash" as const },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const hashLinks = links.filter((l) => l.type === "hash")
  const activeId = useScrollSpy(hashLinks.map((l) => l.href.replace("/", "")), 120)

  return (
    <header className="pointer-events-auto absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 lg:px-8">
        <a href="/" className="group shrink-0 select-none text-left">
          <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 bg-clip-text text-2xl font-semibold tracking-tight text-transparent dark:from-white dark:via-cyan-100 dark:to-cyan-300">
            dkiselev
          </span>
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
          <nav
            aria-label="Разделы страницы"
            className="hidden items-center gap-0.5 px-1 py-1 backdrop-blur-xl sm:flex"
          >
            {links.map((link) => {
              const Icon = link.icon
              const isActive =
                link.type === "hash"
                  ? activeId === link.href.replace("/", "")
                  : pathname === link.href

              const className = `relative shrink-0 flex items-center rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wide transition-colors duration-200 sm:text-[14px] ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-700 dark:bg-cyan-500/25 dark:text-white"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`

              if (link.type === "page") {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={className}
                  >
                    <Icon className="mr-1.5 inline-block size-3.5 sm:size-4" />
                    {link.title}
                  </Link>
                )
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={className}
                >
                  <Icon className="mr-1.5 inline-block size-3.5 sm:size-4" />
                  {link.title}
                </a>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl sm:hidden">
          <nav className="flex flex-col items-center gap-2 px-4 py-4">
            {links.map((link) => {
              const Icon = link.icon
              const className = "w-full flex justify-center rounded-lg px-4 py-2 text-center text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"

              if (link.type === "page") {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={className}
                  >
                    <Icon className="mr-2 inline-block size-4" />
                    {link.title}
                  </Link>
                )
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={className}
                >
                  <Icon className="mr-2 inline-block size-4" />
                  {link.title}
                </a>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
