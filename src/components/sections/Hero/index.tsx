"use client"

import { useEffect, useRef } from "react"

class Star {
  x = 0
  y = 0
  z = 1
  size = 1
  speed = 0.1
  opacity = 0.5
  canvas: HTMLCanvasElement
  isDark: boolean

  constructor(canvas: HTMLCanvasElement, isDark: boolean) {
    this.canvas = canvas
    this.isDark = isDark
    this.reset()
  }

  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.z = Math.random() * 3 + 0.5
    this.size = Math.random() * 1.5 + 0.3
    this.speed = Math.random() * 0.3 + 0.05
    this.opacity = Math.random() * 0.8 + 0.2
  }

  update() {
    this.z -= this.speed
    if (this.z <= 0) this.reset()
    this.opacity = Math.min(1, (3 - this.z) / 2)
  }

  draw(ctx: CanvasRenderingContext2D) {
    const scale = 1 / this.z
    const x = (this.x - this.canvas.width / 2) * scale + this.canvas.width / 2
    const y = (this.y - this.canvas.height / 2) * scale + this.canvas.height / 2
    const size = this.size * scale

    const color = this.isDark ? "255, 255, 255" : "107, 102, 224"

    ctx.beginPath()
    ctx.arc(x, y, Math.min(size, 2), 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${color}, ${this.opacity * 0.6})`
    ctx.fill()
  }
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDark = document.documentElement.classList.contains("dark")

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const starCount = Math.min(
      200,
      Math.floor((canvas.width * canvas.height) / 8000)
    )
    const stars = Array.from(
      { length: starCount },
      () => new Star(canvas, isDark)
    )

    const observer = new MutationObserver(() => {
      const nowDark = document.documentElement.classList.contains("dark")
      for (const star of stars) {
        star.isDark = nowDark
      }
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const star of stars) {
        star.update()
        star.draw(ctx)
      }
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden bg-gradient-to-b from-cyan-100 via-white to-background dark:from-cyan-950 dark:via-[#0d0820] dark:to-background">
      <ParticleCanvas />

      <div className="absolute inset-0 z-10">
        <div className="pointer-events-none absolute inset-x-0 top-24 px-6 sm:top-28 md:top-1/2 md:-translate-y-2/3 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-xl md:max-w-2xl">
              <p className="mb-2 text-6xl font-semibold tracking-widest text-cyan-600 dark:text-cyan-400">
                Киселев Дмитрий
              </p>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Frontend
                <br />
                <span className="text-cyan-600 dark:text-cyan-300">Разработчик</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-white/65 sm:text-base">
                Создаю клиентские приложения и удобные интерфейсы на React и
                TypeScript. Работал в стартапах и продуктовых проектах: CRM,
                интерактивные карты, мультимедийные приложения и Telegram-боты.
              </p>

              <div className="pointer-events-auto mt-4 flex flex-wrap items-center gap-3 sm:mt-8">
                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-100/80 px-5 py-2.5 text-sm font-semibold text-gray-800 backdrop-blur-sm transition hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/20 dark:bg-white/5 dark:text-white/90 dark:hover:border-cyan-300/45 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  Резюме (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 inset-x-0 z-20 flex justify-center md:bottom-16">
          <a
            href="#about"
            className="flex cursor-pointer flex-col items-center gap-1 text-[11px] uppercase tracking-[0.25em] text-gray-400 transition-colors hover:text-gray-600 dark:text-white/45 dark:hover:text-white/85"
            aria-label="Прокрутить к следующей секции"
          >
            <span className="inline-block animate-bounce text-4xl leading-none text-cyan-500 dark:text-cyan-300/90">
              ↓
            </span>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-20 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
