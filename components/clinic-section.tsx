"use client"

import { useEffect, useRef } from "react"
import { MapPin, Clock, Phone } from "lucide-react"
import Image from "next/image"

export function ClinicSection() {
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
    <section id="clinic" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal opacity-0 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Интерьер клиники"
                fill
                className="object-cover"
              />
              
              {/* Overlay with geometric elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/10 via-transparent to-transparent" />
              
              {/* Corner accents */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <path
                  d="M20,20 L20,50 M20,20 L50,20"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                />
                <path
                  d="M380,20 L380,50 M380,20 L350,20"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                />
                <path
                  d="M20,280 L20,250 M20,280 L50,280"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                />
                <path
                  d="M380,280 L380,250 M380,280 L350,280"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Floating info card */}
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 glass rounded-2xl p-6 border border-border/30 max-w-xs animate-float">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Астана</div>
                  <div className="text-sm text-muted-foreground">Проспект Республики, 42</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="reveal opacity-0" style={{ animationDelay: "0.1s" }}>
              <span className="inline-block text-sm text-primary tracking-widest uppercase mb-4">
                Пространство
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
                Пространство, в котором важна каждая деталь
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Наша клиника — это сочетание медицинской точности и атмосферы спокойствия. 
                Минималистичный интерьер, современное оборудование и внимание к деталям создают 
                пространство, где вы можете расслабиться и довериться профессионалам.
              </p>
            </div>

            {/* Contact Info */}
            <div className="reveal opacity-0 space-y-4" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/30">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Часы работы</div>
                  <div className="font-medium text-foreground">Пн-Сб: 9:00 — 21:00</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/30">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="font-medium text-foreground">+7 (7172) 123-45-67</div>
                </div>
              </div>
            </div>

            {/* Features list */}
            <div className="reveal opacity-0 grid grid-cols-2 gap-4" style={{ animationDelay: "0.3s" }}>
              {["Премиум оборудование", "Стерильность", "Приватные кабинеты", "Парковка"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
