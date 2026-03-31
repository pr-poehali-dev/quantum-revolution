import { Check } from "lucide-react"

const plans = [
  {
    name: "Старт",
    description: "Для тех, кто только начинает",
    price: "345 ₽",
    period: "",
    gold: "500 Gold",
    features: [
      "500 голды на аккаунт",
      "Доставка за 5 минут",
      "Поддержка в чате",
      "Безопасная оплата",
    ],
    cta: "Купить",
    highlighted: false,
  },
  {
    name: "Популярный",
    description: "Лучший выбор для активных игроков",
    price: "1 035 ₽",
    period: "",
    gold: "1 500 Gold",
    features: [
      "1 500 голды на аккаунт",
      "Доставка за 3 минуты",
      "Приоритетная поддержка",
      "Безопасная оплата",
      "Скидка 5% на следующий заказ",
    ],
    cta: "Купить сейчас",
    highlighted: true,
  },
  {
    name: "Максимум",
    description: "Для хардкорных игроков",
    price: "3 450 ₽",
    period: "",
    gold: "5 000 Gold",
    features: [
      "5 000 голды на аккаунт",
      "Мгновенная доставка",
      "VIP поддержка 24/7",
      "Безопасная оплата",
      "Скидка 10% на следующий заказ",
      "Бонус +200 голды в подарок",
    ],
    cta: "Купить",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Пакеты голды</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Выберите свой пакет
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            Никаких скрытых платежей. Самые низкие цены на рынке. Мгновенная доставка.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border flex flex-col h-full ${
                plan.highlighted ? "bg-zinc-100 border-zinc-100" : "bg-zinc-900/50 border-zinc-800/50"
              }`}
            >
              <div className="mb-2">
                <div className={`text-2xl mb-2`}>💰</div>
                <h3 className={`font-heading text-xl font-semibold mb-1 ${plan.highlighted ? "text-zinc-900" : "text-zinc-100"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.description}</p>
              </div>

              <div className="mb-2 mt-4">
                <span className={`font-display text-4xl font-bold ${plan.highlighted ? "text-zinc-900" : "text-zinc-100"}`}>
                  {plan.price}
                </span>
              </div>

              <div className={`text-sm font-semibold mb-6 ${plan.highlighted ? "text-yellow-600" : "text-yellow-400"}`}>
                {plan.gold}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlighted ? "text-zinc-900" : "text-zinc-400"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-zinc-700" : "text-zinc-400"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                  plan.highlighted
                    ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                    : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
