"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function FinalCTA() {
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
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative element */}
          <div className="reveal opacity-0 flex justify-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Main text */}
          <div className="reveal opacity-0" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 text-balance leading-tight">
              Красота, которая выглядит как вы.{" "}
              <span className="text-primary">Только лучше отдохнувшей.</span>
            </h2>
          </div>

          <p className="reveal opacity-0 text-lg text-muted-foreground mb-10 max-w-xl mx-auto" style={{ animationDelay: "0.2s" }}>
            Запишитесь на бесплатную консультацию, и мы подберём индивидуальный план ухода за вашей кожей
          </p>

          {/* CTA Button */}
          <div className="reveal opacity-0" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg gap-3 group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <a href="#appointment">
                Записаться на консультацию
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="reveal opacity-0 flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-border/50" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="font-serif text-2xl text-foreground">Бесплатно</div>
              <div className="text-sm text-muted-foreground">Первая консультация</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl text-foreground">30 мин</div>
              <div className="text-sm text-muted-foreground">Диагностика кожи</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl text-foreground">План</div>
              <div className="text-sm text-muted-foreground">Персональный уход</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
