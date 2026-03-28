"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight, Sparkles, Zap, Target, Clock, Shield } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Сияние и качество кожи",
    description: "Биоревитализация, мезотерапия, пилинги для здорового сияния",
    gradient: "from-primary/10 via-primary/5 to-transparent"
  },
  {
    icon: Zap,
    title: "Лифтинг и упругость",
    description: "Аппаратные методики, нитевой лифтинг, контурная пластика",
    gradient: "from-accent/10 via-accent/5 to-transparent"
  },
  {
    icon: Target,
    title: "Работа с акне и постакне",
    description: "Комплексное лечение, лазерная шлифовка, рубцы",
    gradient: "from-primary/10 via-primary/5 to-transparent"
  },
  {
    icon: Clock,
    title: "Коррекция возрастных изменений",
    description: "Ботулинотерапия, филлеры, объёмное моделирование",
    gradient: "from-accent/10 via-accent/5 to-transparent"
  },
  {
    icon: Shield,
    title: "Профилактика и поддержка",
    description: "Программы ухода, защита и восстановление кожи",
    gradient: "from-primary/10 via-primary/5 to-transparent"
  }
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
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-muted/30 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="reveal opacity-0 max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-sm text-primary tracking-widest uppercase mb-4">
            Направления
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Процедуры для вашей красоты
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Индивидуальный подбор методик для достижения естественного и гармоничного результата
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal opacity-0 group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${service.gradient} border border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer relative overflow-hidden`}>
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
