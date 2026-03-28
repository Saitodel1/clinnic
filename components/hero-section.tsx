"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="reveal opacity-0 space-y-6" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Премиум косметология</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground text-balance">
                Эстетическая косметология{" "}
                <span className="text-primary">точной работы</span>
              </h1>
            </div>

            <p className="reveal opacity-0 text-lg text-muted-foreground leading-relaxed max-w-xl" style={{ animationDelay: "0.2s" }}>
              Современные протоколы омоложения, восстановления и ухода за кожей 
              с деликатным результатом без перегруженного эффекта
            </p>

            <div className="reveal opacity-0 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2 group"
              >
                <a href="#appointment">
                  Записаться
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-border hover:bg-secondary"
              >
                Посмотреть процедуры
              </Button>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 flex gap-12 pt-8 border-t border-border/50" style={{ animationDelay: "0.4s" }}>
              <div>
                <div className="font-serif text-3xl text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-foreground">5000+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Процедур</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="reveal opacity-0 order-1 lg:order-2 relative" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[3/4] lg:aspect-[4/5] max-w-md lg:max-w-none mx-auto">
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero-face.jpg"
                  alt="Эстетическая косметология"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Geometric Overlay Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 500"
                  preserveAspectRatio="none"
                >
                  {/* Facial mapping lines */}
                  <path
                    d="M100,100 Q200,80 300,100"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                    className="animate-pulse-glow"
                  />
                  <path
                    d="M120,180 Q200,160 280,180"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                    className="animate-pulse-glow"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <path
                    d="M140,280 Q200,260 260,280"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                    className="animate-pulse-glow"
                    style={{ animationDelay: "1s" }}
                  />
                  <path
                    d="M160,350 Q200,330 240,350"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                    className="animate-pulse-glow"
                    style={{ animationDelay: "1.5s" }}
                  />
                  
                  {/* Vertical lines */}
                  <line
                    x1="200" y1="50" x2="200" y2="450"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                  
                  {/* Corner accents */}
                  <path
                    d="M30,30 L30,80 M30,30 L80,30"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                  />
                  <path
                    d="M370,30 L370,80 M370,30 L320,30"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                  />
                  <path
                    d="M30,470 L30,420 M30,470 L80,470"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                  />
                  <path
                    d="M370,470 L370,420 M370,470 L320,470"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                  />
                  
                  {/* Glow dots */}
                  <circle cx="200" cy="100" r="3" fill="rgba(255,255,255,0.6)" className="animate-pulse-glow" />
                  <circle cx="150" cy="180" r="2" fill="rgba(255,255,255,0.4)" className="animate-pulse-glow" style={{ animationDelay: "0.3s" }} />
                  <circle cx="250" cy="180" r="2" fill="rgba(255,255,255,0.4)" className="animate-pulse-glow" style={{ animationDelay: "0.6s" }} />
                  <circle cx="200" cy="280" r="2" fill="rgba(255,255,255,0.4)" className="animate-pulse-glow" style={{ animationDelay: "0.9s" }} />
                </svg>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Floating glass card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 border border-border/30 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Натуральный результат</div>
                    <div className="text-xs text-muted-foreground">Без эффекта маски</div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-primary/20 animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Листайте</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
