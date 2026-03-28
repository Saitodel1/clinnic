"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, Syringe, Waves, ScanHeart, SunMedium, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"

const iconMap: Record<string, LucideIcon> = {
  "Консультация косметолога": Sparkles,
  "Чистка лица": SunMedium,
  "Пилинги": Waves,
  "Мезотерапия": Syringe,
  "Биоревитализация": Sparkles,
  "Ботулинотерапия": ScanHeart,
  "Контурная пластика": Syringe,
  "RF-лифтинг": Waves,
  "Лазерные процедуры": SunMedium,
}

const gradients = [
  "from-primary/12 via-primary/5 to-transparent",
  "from-accent/12 via-accent/5 to-transparent",
  "from-primary/10 via-background to-transparent",
]

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="reveal opacity-0 max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-sm text-primary tracking-widest uppercase mb-4">Направления</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Процедуры для вашей красоты
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Все ключевые процедуры собраны в одном разделе с понятным описанием, стоимостью и отдельной
            страницей для деталей.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.title] ?? Sparkles

            return (
              <article
                key={service.slug}
                className="reveal opacity-0 group"
                style={{ animationDelay: `${0.08 + index * 0.05}s` }}
              >
                <div
                  className={`h-full rounded-[2rem] border border-border/50 bg-gradient-to-br ${gradients[index % gradients.length]} p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-card/90 flex items-center justify-center border border-border/50">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">Цена</div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground min-h-16">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-4">
                    <div>
                      <div className="font-serif text-3xl text-foreground">{service.price}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {service.heroEyebrow}
                      </div>
                    </div>
                    <Button asChild variant="outline" className="rounded-full px-6 bg-background/70">
                      <Link href={`/services/${service.slug}`}>
                        Подробнее
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
