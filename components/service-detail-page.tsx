import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { clinicContact } from "@/lib/contact"
import type { ServiceEntry } from "@/lib/services"
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone, Send, Sparkles } from "lucide-react"
import { InquiryForm } from "@/components/inquiry-form"

type ServiceDetailPageProps = {
  service: ServiceEntry
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-8">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Все процедуры
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                {service.heroEyebrow}
              </div>
              <h1 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{service.subtitle}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-8">
                  <a href="#service-cta">
                    Записаться на консультацию
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  <Link href="/#services">Назад к услугам</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/50 bg-background/85 p-8 shadow-2xl shadow-foreground/5 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.22em] text-primary">Цена от</div>
              <div className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">{service.price}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.priceLabel}</p>
              <div className="mt-8 h-px bg-border/60" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Точная стоимость определяется после консультации специалиста и зависит от индивидуальных
                показаний.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-border/50 bg-card/80 p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-foreground">Для кого подходит</h2>
              <div className="mt-6 space-y-4">
                {service.indications.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-border/50 bg-card/80 p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-foreground">Что входит в процедуру</h2>
              <div className="mt-6 space-y-4">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-border/50 bg-card/80 p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-foreground">Результат</h2>
              <div className="mt-6 space-y-4">
                {service.results.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-6">
          <div className="rounded-[2rem] border border-border/50 bg-gradient-to-br from-card to-secondary/40 p-8 shadow-lg lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-[0.22em] text-primary">Стоимость</div>
                <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">{service.price}</h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Точная стоимость определяется после консультации специалиста и зависит от индивидуальных
                  показаний и объёма процедуры.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#service-cta">Записаться</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="inline-block text-sm uppercase tracking-[0.22em] text-primary">FAQ</span>
              <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">Частые вопросы о процедуре</h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Заранее отвечаем на базовые вопросы, чтобы вы понимали формат процедуры и восстановление.
              </p>
            </div>

            <div className="rounded-3xl border border-border/50 bg-card/80 p-6 shadow-sm sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                {service.faq.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className="text-base text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section id="service-cta" className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/40 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid gap-10 rounded-[2rem] border border-border/50 bg-background/85 p-8 shadow-2xl shadow-primary/5 backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div className="max-w-2xl">
              <span className="inline-block text-sm uppercase tracking-[0.22em] text-primary">Запись</span>
              <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">Запишитесь на консультацию</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Поможем подобрать процедуру под состояние вашей кожи и желаемый результат.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${clinicContact.phoneLink}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {clinicContact.phoneDisplay}
                </a>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Оставьте заявку через форму, и почтовое приложение откроется уже с готовым текстом
                  обращения.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border/50 bg-secondary/25 p-6 sm:p-8">
              <InquiryForm serviceTitle={service.title} submitLabel="Оставить заявку" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
