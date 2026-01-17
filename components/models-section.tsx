"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, Shield, Sparkles } from "lucide-react"

const models = [
  {
    name: "Stella 1",
    tagline: "Where it all begins",
    price: "4,999",
    description:
      "The essential smart umbrella. Rain prediction, LED indicators, and seamless Google Weather integration. Perfect for everyday use.",
    features: ["Rain prediction alerts", "LED rain intensity", "12-hour battery", "Lightweight design"],
    icon: Zap,
    color: "var(--google-blue)",
    image: "/sleek-umbrella-blue-minimal.jpg",
    cta: "Buy Now",
  },
  {
    name: "Stella 2",
    tagline: "Smarter. Better. Connected.",
    price: "7,999",
    description:
      "Enhanced intelligence with Google Assistant, smart loss prevention, and ambient mood lighting. Your personal weather companion.",
    features: ["Google Assistant built-in", "Find my umbrella", "Mood lighting", "24-hour battery"],
    icon: Shield,
    color: "var(--google-green)",
    image: "/smart-umbrella-green-tech.jpg",
    cta: "Buy Now",
  },
  {
    name: "Stella 3 Pro",
    tagline: "The ultimate. Redefined.",
    price: "12,999",
    description:
      "Premium carbon fiber construction with auto-open technology. Wind resistance up to 120 km/h. Wireless charging. The pinnacle of smart umbrellas.",
    features: ["Auto-open technology", "Carbon fiber frame", "120 km/h wind resistance", "Wireless charging"],
    icon: Sparkles,
    color: "var(--deep-purple)",
    image: "/premium-umbrella-purple-luxury.jpg",
    cta: "Join Waitlist",
  },
]

export default function ModelsSection() {
  return (
    <section id="models" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-4">Choose your Stella</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Three models. One mission. Keep you dry, intelligently.
          </p>
        </motion.div>

        <div className="space-y-16">
          {models.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${model.color}15` }}
                  >
                    <model.icon className="w-5 h-5" style={{ color: model.color }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: model.color }}>
                    {model.tagline}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-4">{model.name}</h3>
                <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">{model.description}</p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: model.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-medium text-[var(--text-primary)]">₹{model.price}</span>
                  <Button className="rounded-full px-8 py-6 font-medium" style={{ backgroundColor: model.color }}>
                    {model.cta}
                  </Button>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div
                  className="aspect-[3/4] rounded-3xl flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: `${model.color}08` }}
                >
                  <motion.img
                    src={model.image}
                    alt={model.name}
                    className="w-3/4 h-3/4 object-contain"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
