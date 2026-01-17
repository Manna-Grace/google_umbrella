"use client"

import { motion } from "framer-motion"
import { Smartphone, Brain, Vibrate, Umbrella, Mic } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Connect to Google Weather",
    description: "Pair your Stella with the Google Weather app using your Google account. One-tap setup.",
    icon: Smartphone,
    color: "var(--google-blue)",
  },
  {
    step: 2,
    title: "AI Analyzes Weather",
    description: "Our AI continuously monitors real-time weather data, learning your location patterns.",
    icon: Brain,
    color: "var(--google-red)",
  },
  {
    step: 3,
    title: "Gentle Alert",
    description: "Stella gently buzzes and LED lights indicate rain intensity — blue for light, purple for heavy.",
    icon: Vibrate,
    color: "var(--google-yellow)",
  },
  {
    step: 4,
    title: "Auto Protection",
    description: "When rain is detected nearby, Stella automatically opens to keep you protected.",
    icon: Umbrella,
    color: "var(--google-green)",
  },
  {
    step: 5,
    title: "Stay Connected",
    description: "Ask Google Assistant for weather updates, play music, or control your smart home — all hands-free.",
    icon: Mic,
    color: "var(--deep-purple)",
  },
]

export default function HowToUse() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-4">How it works</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Simple setup. Intelligent protection. Zero effort.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--google-blue)] via-[var(--google-yellow)] to-[var(--google-green)] -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <span className="text-sm font-medium mb-2" style={{ color: item.color }}>
                  Step {item.step}
                </span>
                <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
