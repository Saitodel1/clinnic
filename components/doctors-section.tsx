"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Award, GraduationCap } from "lucide-react"
import Image from "next/image"

const doctors = [
  {
    name: "Др. Анна Серова",
    title: "Главный врач-косметолог",
    description: "Специалист по инъекционной косметологии с 12-летним стажем. Автор методик естественного омоложения.",
    image: "/images/doctor-anna.jpg",
    credentials: ["Дерматовенеролог", "Косметолог"],
    experience: "12 лет"
  },
  {
    name: "Др. Максим Орлов",
    title: "Врач-косметолог",
    description: "Эксперт в области аппаратной косметологии и лазерных технологий. Постоянный участник международных конференций.",
    image: "/images/doctor-maxim.jpg",
    credentials: ["Дерматолог", "Лазерный специалист"],
    experience: "8 лет"
  }
]

export function DoctorsSection() {
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
    <section id="doctors" ref={sectionRef} className="py-24 lg:py-32 bg-muted/30 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="reveal opacity-0 max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-sm text-primary tracking-widest uppercase mb-4">
            Команда
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Наши эксперты
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Врачи с клиническим образованием и международным опытом, которые заботятся о естественности результата
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className="reveal opacity-0 group"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 glass rounded-full px-4 py-2 border border-border/30">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Award className="w-4 h-4 text-primary" />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl text-foreground mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-primary text-sm">
                      {doctor.title}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {doctor.description}
                  </p>

                  {/* Credentials */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {doctor.credentials.map((credential) => (
                      <div
                        key={credential}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground"
                      >
                        <GraduationCap className="w-3.5 h-3.5" />
                        {credential}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Выбрать врача
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
