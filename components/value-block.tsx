"use client"

import { useEffect, useRef } from "react"
import { Stethoscope, Cpu, Leaf, FileText } from "lucide-react"

const features = [
  {
    icon: Stethoscope,
    title: "Врачи с клиническим подходом",
    description: "Профессиональный медицинский взгляд на каждую процедуру"
  },
  {
    icon: Cpu,
    title: "Современное оборудование",
    description: "Передовые технологии и сертифицированные препараты"
  },
  {
    icon: Leaf,
    title: "Естественный результат",
    description: "Деликатные изменения без эффекта перегруженности"
  },
  {
    icon: FileText,
    title: "Персональные протоколы",
    description: "Индивидуальный подход к потребностям вашей кожи"
  }
]

export function ValueBlock() {
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
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Quote */}
        <div className="reveal opacity-0 max-w-4xl mx-auto text-center mb-20">
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground leading-relaxed text-balance">
            Мы не меняем лицо. Мы возвращаем ему{" "}
            <span className="text-primary">точность</span>,{" "}
            <span className="text-primary">свет</span> и{" "}
            <span className="text-primary">свежесть</span>.
          </blockquote>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="reveal opacity-0 group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
