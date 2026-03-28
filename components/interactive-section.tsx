"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getServiceBySlug } from "@/lib/services"

const concerns = [
  { id: "dull", label: "Тусклый тон" },
  { id: "dry", label: "Сухость" },
  { id: "wrinkles", label: "Морщины" },
  { id: "texture", label: "Неровный рельеф" },
  { id: "elasticity", label: "Потеря упругости" },
]

const procedures: Record<string, { slug: string; description: string; image: string }[]> = {
  dull: [
    { slug: "biorevitalizaciya", description: "Глубокое увлажнение и естественное сияние кожи", image: "💧" },
    { slug: "pilingi", description: "Мягкое обновление и более ровный тон", image: "✨" },
    { slug: "lazernye-procedury", description: "Точная работа с тоном и качеством кожи", image: "☀️" },
  ],
  dry: [
    { slug: "mezoterapiya", description: "Поддержка кожи при обезвоженности", image: "💎" },
    { slug: "biorevitalizaciya", description: "Восстановление гидробаланса и комфорта кожи", image: "💧" },
    { slug: "konsultaciya-kosmetologa", description: "Подбор деликатного плана ухода и процедур", image: "🌿" },
  ],
  wrinkles: [
    { slug: "botulinoterapiya", description: "Мягкая коррекция мимических морщин", image: "✨" },
    { slug: "konturnaya-plastika", description: "Работа с контуром, объёмом и гармонией лица", image: "💫" },
    { slug: "rf-lifting", description: "Аппаратное укрепление и лифтинг-эффект", image: "⚡" },
  ],
  texture: [
    { slug: "lazernye-procedury", description: "Работа с рельефом, постакне и качеством кожи", image: "🎯" },
    { slug: "pilingi", description: "Деликатное обновление и выравнивание поверхности", image: "🔬" },
    { slug: "chistka-lica", description: "Профессиональное очищение и ощущение свежести", image: "🫧" },
  ],
  elasticity: [
    { slug: "rf-lifting", description: "Поддержка тонуса и плотности кожи", image: "⚡" },
    { slug: "biorevitalizaciya", description: "Работа с увлажнением и качеством кожи", image: "💧" },
    { slug: "mezoterapiya", description: "Инъекционная поддержка кожи и свежего вида", image: "🌸" },
  ],
}

export function InteractiveSection() {
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="reveal opacity-0 max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-sm text-primary tracking-widest uppercase mb-4">
            Подбор процедур
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Что вас беспокоит?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Выберите основной запрос, и мы покажем процедуры, с которых стоит начать знакомство.
          </p>
        </div>

        <div className="reveal opacity-0 flex flex-wrap justify-center gap-3 mb-12" style={{ animationDelay: "0.1s" }}>
          {concerns.map((concern) => (
            <button
              key={concern.id}
              onClick={() => setSelectedConcern(selectedConcern === concern.id ? null : concern.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedConcern === concern.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-primary/50 text-foreground"
              }`}
            >
              {concern.label}
            </button>
          ))}
        </div>

        {selectedConcern && (
          <div className="animate-fade-up">
            <div className="text-center mb-8">
              <h3 className="text-lg text-muted-foreground">Подходящие процедуры</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {procedures[selectedConcern]?.map((procedure, index) => {
                const service = getServiceBySlug(procedure.slug)

                if (!service) {
                  return null
                }

                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary to-accent" />
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 text-2xl border border-border/30">
                        {procedure.image}
                      </div>

                      <h4 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">{procedure.description}</p>
                      <div className="mb-4 font-serif text-2xl text-foreground">{service.price}</div>

                      <div className="flex items-center gap-2 text-sm text-primary">
                        <span>Подробнее</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {!selectedConcern && (
          <div className="reveal opacity-0 text-center py-12" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted text-muted-foreground">
              <span>Выберите запрос для просмотра процедур</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
