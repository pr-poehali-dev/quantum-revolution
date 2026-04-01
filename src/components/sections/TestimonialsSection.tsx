import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Купил 3000 голды — пришла за 3 минуты. Самый быстрый магазин, которым я пользовался!",
    name: "xShadow_Kill3r",
    role: "Игрок Standoff 2",
  },
  {
    text: "Цены реально ниже, чем в других местах. Беру голду только здесь уже полгода.",
    name: "N1ck_Pr0",
    role: "Постоянный клиент",
  },
  {
    text: "Поддержка ответила моментально, помогли с заказом. Всё честно и без обмана.",
    name: "AceQueen",
    role: "Игрок Standoff 2",
  },
  {
    text: "Заказывал уже раз 10. Ни разу не было проблем. Рекомендую всем друзьям!",
    name: "DarkViper_99",
    role: "Постоянный клиент",
  },
  {
    text: "Думал, что мошенники, но рискнул — и не пожалел. Голда пришла быстро, аккаунт цел.",
    name: "MaxFury",
    role: "Игрок Standoff 2",
  },
  {
    text: "Лучший курс на рынке! Экономлю по 200-300 рублей на каждом заказе.",
    name: "EagleEye_X",
    role: "Постоянный клиент",
  },
  {
    text: "Купил 5000 голды для скинов — всё пришло, скины купил. Сайт огонь 🔥",
    name: "Bl4zeR",
    role: "Игрок Standoff 2",
  },
  {
    text: "Обратился в поддержку ночью — ответили за 2 минуты. Вот это сервис!",
    name: "StormRider",
    role: "Клиент",
  },
  {
    text: "Покупаю регулярно. Цена стабильная, доставка мгновенная. Топовый магазин.",
    name: "CryptoFox",
    role: "Постоянный клиент",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["Standoff 2", "Лучший курс", "50 000+ клиентов", "Доставка за 3 мин", "Поддержка 24/7", "Безопасно"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Что говорят игроки
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Тысячи довольных клиентов уже купили голду у нас.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Нас выбирают игроки по всей России</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 20, repeat: Infinity, ease: "linear" } }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}