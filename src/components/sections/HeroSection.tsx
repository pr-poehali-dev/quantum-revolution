import { useState } from "react"
import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"

const GOLD_RATE = 0.69 // rub per 1 gold

const goldOptions = [500, 1000, 1500, 2000, 3000, 5000, 10000]

export function HeroSection() {
  const [gold, setGold] = useState(1500)
  const [nickname, setNickname] = useState("")

  const price = (gold * GOLD_RATE).toFixed(2)

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-transparent" />

      <div className="relative z-10 text-center max-w-2xl mx-auto w-full">
        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-zinc-100 block">Купите Голду в</span>
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Standoff 2
          </span>
          <span className="text-zinc-100 block text-3xl md:text-4xl mt-1">на Самом Лучшем Сайте</span>
        </h1>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-900/40 border border-emerald-700/50 mb-6 w-full max-w-md justify-center">
          <span className="text-lg">🔥</span>
          <span className="text-sm font-semibold text-emerald-300">Самая низкая цена на рынке!</span>
          <span className="text-lg">🔥</span>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex-1 justify-center">
            <span className="text-xl">🛡️</span>
            <span className="text-sm font-medium text-zinc-200">Безопасно</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex-1 justify-center">
            <span className="text-xl">🚀</span>
            <span className="text-sm font-medium text-zinc-200">Быстро</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex-1 justify-center">
            <span className="text-xl">📞</span>
            <span className="text-sm font-medium text-zinc-200">Связь 24/7</span>
          </div>
        </div>

        {/* Calculator */}
        <div className="space-y-3 text-left mb-4">
          {/* You Pay */}
          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
            <p className="text-sm text-zinc-500 mb-1">Ты Платишь</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-zinc-100">{Number(price).toLocaleString("ru-RU", { minimumFractionDigits: 2 })}</span>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 border border-zinc-700">
                <span className="text-sm font-medium text-zinc-300">₽ Рубли</span>
              </div>
            </div>
          </div>

          {/* You Buy */}
          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
            <p className="text-sm text-zinc-500 mb-1">Ты Покупаешь</p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold text-zinc-100">{gold.toLocaleString("ru-RU")}</span>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 border border-zinc-700">
                <span className="text-yellow-400 text-base">💰</span>
                <span className="text-sm font-medium text-zinc-300">Gold</span>
              </div>
            </div>
            {/* Slider */}
            <input
              type="range"
              min={500}
              max={10000}
              step={500}
              value={gold}
              onChange={(e) => setGold(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-blue-500"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((gold - 500) / (10000 - 500)) * 100}%, #3f3f46 ${((gold - 500) / (10000 - 500)) * 100}%, #3f3f46 100%)`
              }}
            />
            {/* Quick select */}
            <div className="flex flex-wrap gap-2 mt-3">
              {goldOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setGold(opt)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    gold === opt
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  {opt.toLocaleString("ru-RU")}
                </button>
              ))}
            </div>
          </div>

          {/* Nickname */}
          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
            <p className="text-sm text-zinc-500 mb-2">Никнейм или ID в Standoff 2:</p>
            <input
              type="text"
              placeholder="Введите Никнейм или ID*"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Buy Button */}
        <LiquidCtaButton className="w-full">Купить Голду</LiquidCtaButton>

        {/* Social proof */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
          <span>⭐⭐⭐⭐⭐</span>
          <span>Нам доверяют <span className="text-zinc-300 font-medium">50 000+</span> игроков</span>
        </div>
      </div>
    </section>
  )
}