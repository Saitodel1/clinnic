"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { clinicContact } from "@/lib/contact"
import { CalendarDays, MessageCircle, Phone, Send, ShieldCheck } from "lucide-react"

const services = [
  "Консультация косметолога",
  "Чистка лица",
  "Инъекционная косметология",
  "Лазерные процедуры",
  "Подбор домашнего ухода",
]

export function AppointmentSection() {
  const [selectedService, setSelectedService] = useState(services[0])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()
    const service = String(formData.get("service") ?? selectedService).trim()
    const message = String(formData.get("message") ?? "").trim()

    const subject = encodeURIComponent(`Запись на прием: ${name || "новый клиент"}`)
    const body = encodeURIComponent(
      [
        "Здравствуйте!",
        "",
        "Хочу записаться на прием.",
        `Имя: ${name || "-"}`,
        `Телефон: ${phone || "-"}`,
        `Услуга: ${service || "-"}`,
        `Комментарий: ${message || "-"}`,
      ].join("\n"),
    )

    window.location.href = `mailto:${clinicContact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="appointment" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-5 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 text-primary" />
                Запись на прием
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance leading-tight">
                Оставьте заявку, и мы подберем удобное время для визита
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Заполните короткую форму, и мы свяжемся с вами для подтверждения записи.
                Если удобнее, можно сразу написать в WhatsApp или Telegram.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/40 bg-background/80 p-5 shadow-sm backdrop-blur">
                <ShieldCheck className="mb-4 h-5 w-5 text-primary" />
                <div className="font-medium text-foreground">Бережный подход</div>
                <p className="mt-2 text-sm text-muted-foreground">Подбираем процедуры под состояние кожи и ваш запрос.</p>
              </div>
              <div className="rounded-2xl border border-border/40 bg-background/80 p-5 shadow-sm backdrop-blur">
                <Phone className="mb-4 h-5 w-5 text-primary" />
                <div className="font-medium text-foreground">Быстрая связь</div>
                <p className="mt-2 text-sm text-muted-foreground">Обычно подтверждаем запись в рабочее время в течение дня.</p>
              </div>
              <div className="rounded-2xl border border-border/40 bg-background/80 p-5 shadow-sm backdrop-blur">
                <MessageCircle className="mb-4 h-5 w-5 text-primary" />
                <div className="font-medium text-foreground">Удобные мессенджеры</div>
                <p className="mt-2 text-sm text-muted-foreground">Можно сразу написать нам в привычном канале без звонка.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-border/40 bg-background/85 p-6 shadow-lg shadow-primary/5 backdrop-blur">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-8">
                  <a href={clinicContact.whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  <a href={clinicContact.telegramUrl} target="_blank" rel="noreferrer">
                    <Send className="h-4 w-4" />
                    Telegram
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Телефон для связи: <a className="text-foreground underline-offset-4 hover:underline" href={`tel:${clinicContact.phoneLink}`}>{clinicContact.phoneDisplay}</a>
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/50 bg-background/90 p-6 shadow-2xl shadow-foreground/5 backdrop-blur sm:p-8">
            <div className="mb-6">
              <h3 className="font-serif text-2xl text-foreground">Форма записи</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                После отправки откроется почтовое приложение с уже заполненной заявкой.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                name="name"
                type="text"
                placeholder="Ваше имя"
                required
                className="h-12 rounded-2xl border-border/50 bg-secondary/40 px-4"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Телефон для связи"
                required
                className="h-12 rounded-2xl border-border/50 bg-secondary/40 px-4"
              />
              <div className="grid gap-2">
                <label htmlFor="service" className="text-sm font-medium text-foreground">
                  Интересующая услуга
                </label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(event) => setSelectedService(event.target.value)}
                  className="h-12 rounded-2xl border border-border/50 bg-secondary/40 px-4 text-sm text-foreground outline-none transition focus:border-ring focus:ring-3 focus:ring-ring/50"
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <Textarea
                name="message"
                placeholder="Комментарий: удобное время, пожелания, вопросы"
                className="min-h-32 rounded-2xl border-border/50 bg-secondary/40 px-4 py-3"
              />

              <Button type="submit" size="lg" className="h-12 w-full rounded-full text-base">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
