"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Stella 1",
    tagline: "Essential Protection",
    price: "4,999",
    features: [
      "Rain prediction alerts",
      "LED rain intensity display",
      "Google Weather integration",
      "12-hour battery life",
      "1-year warranty",
    ],
    cta: "Buy Now",
    popular: false,
  },
  {
    name: "Stella 2",
    tagline: "Smart Companion",
    price: "7,999",
    features: [
      "Everything in Stella 1",
      "Google Assistant support",
      "Smart loss prevention",
      "Ambient mood lighting",
      "24-hour battery life",
      "2-year warranty",
    ],
    cta: "Buy Now",
    popular: true,
  },
  {
    name: "Stella 3 Pro",
    tagline: "Ultimate Experience",
    price: "12,999",
    features: [
      "Everything in Stella 2",
      "Auto-open technology",
      "Premium carbon fiber frame",
      "Wind resistance up to 120 km/h",
      "Wireless charging",
      "3-year warranty",
    ],
    cta: "Join Waitlist",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Just one-time purchase.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 ${
                plan.popular ? "bg-[var(--text-primary)] text-white scale-105" : "bg-[var(--surface-light)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[var(--google-blue)] text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3
                  className={`text-2xl font-medium mb-1 ${plan.popular ? "text-white" : "text-[var(--text-primary)]"}`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-gray-300" : "text-[var(--text-secondary)]"}`}>
                  {plan.tagline}
                </p>
              </div>
              <div className="mb-6">
                <span className={`text-4xl font-medium ${plan.popular ? "text-white" : "text-[var(--text-primary)]"}`}>
                  ₹{plan.price}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-[var(--google-green)]" : "text-[var(--google-blue)]"
                      }`}
                    />
                    <span className={`text-sm ${plan.popular ? "text-gray-200" : "text-[var(--text-secondary)]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full py-6 font-medium ${
                  plan.popular
                    ? "bg-white text-[var(--text-primary)] hover:bg-gray-100"
                    : "bg-[var(--google-blue)] text-white hover:bg-[#3367d6]"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-[var(--text-secondary)] mt-12"
        >
          Free shipping across India. 30-day return policy.
        </motion.p>
      </div>
    </section>
  )
}
