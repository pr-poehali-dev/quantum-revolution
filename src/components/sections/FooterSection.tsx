import { MessageCircle } from "lucide-react"
import Icon from "@/components/ui/icon"

const footerLinks = {
  shop: [
    { label: "Купить голду", href: "#" },
    { label: "Цены", href: "#pricing" },
    { label: "Калькулятор", href: "#" },
    { label: "Акции", href: "#" },
  ],
  help: [
    { label: "Как купить", href: "#features" },
    { label: "Поддержка", href: "#" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "Конфиденциальность", href: "#" },
    { label: "Условия", href: "#" },
    { label: "Оферта", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-xl font-semibold text-zinc-100 flex items-center gap-1.5">
              <span className="text-yellow-400">💰</span> GoldShop
            </a>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Самый надёжный магазин голды для Standoff 2. Быстро, безопасно, по лучшей цене.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Магазин</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Помощь</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} GoldShop. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Telegram">
              <Icon name="Send" size={20} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="VK">
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
