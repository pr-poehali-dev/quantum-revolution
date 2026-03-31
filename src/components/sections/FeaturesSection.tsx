import { motion } from "framer-motion"

const features = [
  {
    icon: "⚡",
    title: "Мгновенная доставка",
    description: "Голда поступает на аккаунт в течение нескольких минут после оплаты. Никаких ожиданий.",
  },
  {
    icon: "🔒",
    title: "100% Безопасно",
    description: "Работаем через официальные каналы. Ваш аккаунт никогда не подвергается риску блокировки.",
  },
  {
    icon: "💰",
    title: "Лучшие цены",
    description: "Мы мониторим рынок и гарантируем самые низкие цены на голду Standoff 2.",
  },
  {
    icon: "🎮",
    title: "Любое количество",
    description: "Покупайте от 500 до 100 000 голды. Гибкий калькулятор для любого бюджета.",
  },
  {
    icon: "💬",
    title: "Поддержка 24/7",
    description: "Наша команда на связи круглосуточно. Ответим на любой вопрос в течение 5 минут.",
  },
  {
    icon: "🏆",
    title: "50 000+ покупок",
    description: "Более пятидесяти тысяч успешных заказов. Мы — самый надежный магазин голды.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Почему мы</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Всё для вашего удобства
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            Покупка голды в Standoff 2 — быстро, безопасно и по лучшей цене.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-zinc-100 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
