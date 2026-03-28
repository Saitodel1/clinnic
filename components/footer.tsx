"use client"

import { Instagram, Send, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    services: [
      { label: "Сияние кожи", href: "#" },
      { label: "Лифтинг", href: "#" },
      { label: "Акне", href: "#" },
      { label: "Омоложение", href: "#" },
      { label: "Профилактика", href: "#" }
    ],
    company: [
      { label: "О клинике", href: "#clinic" },
      { label: "Врачи", href: "#doctors" },
      { label: "Отзывы", href: "#" },
      { label: "Контакты", href: "#contact" }
    ]
  }

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center border border-background/20">
                <span className="font-serif text-lg text-background">К</span>
              </div>
              <span className="font-serif text-xl tracking-tight">
                Косметология
              </span>
            </a>
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-xs">
              Премиум косметологическая клиника в Астане. 
              Современные технологии и индивидуальный подход.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-6">Услуги</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-6">Клиника</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-background/40 shrink-0 mt-0.5" />
                <span className="text-sm text-background/60">
                  г. Астана, пр. Республики, 42
                </span>
              </li>
              <li>
                <a 
                  href="tel:+77172123456" 
                  className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors"
                >
                  <Phone className="w-5 h-5 text-background/40" />
                  +7 (7172) 123-45-67
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@cosmetology.kz" 
                  className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5 text-background/40" />
                  info@cosmetology.kz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {currentYear} Косметология. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/40 hover:text-background/60 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-background/40 hover:text-background/60 transition-colors">
              Лицензии
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
