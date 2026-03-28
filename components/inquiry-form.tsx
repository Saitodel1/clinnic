"use client"

import { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { clinicContact } from "@/lib/contact"

type InquiryFormProps = {
  serviceTitle?: string
  submitLabel?: string
}

export function InquiryForm({
  serviceTitle,
  submitLabel = "Отправить заявку",
}: InquiryFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()
    const service = String(formData.get("service") ?? serviceTitle ?? "").trim()
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
    <form className="space-y-4" onSubmit={handleSubmit}>
      {serviceTitle ? <input type="hidden" name="service" value={serviceTitle} /> : null}
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
      <Textarea
        name="message"
        placeholder={
          serviceTitle
            ? `Комментарий по услуге «${serviceTitle}»`
            : "Комментарий: удобное время, пожелания, вопросы"
        }
        className="min-h-28 rounded-2xl border-border/50 bg-secondary/40 px-4 py-3"
      />

      <Button type="submit" size="lg" className="h-12 w-full rounded-full text-base">
        {submitLabel}
      </Button>
    </form>
  )
}
