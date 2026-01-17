"use client"

import { motion } from "framer-motion"

const boxContents = [
  {
    name: "Google Stella",
    description: "Your AI-powered smart umbrella",
  },
  {
    name: "USB-C Charging Cable",
    description: "1.5m braided cable",
  },
  {
    name: "Quick Start Guide",
    description: "Get started in minutes",
  },
  {
    name: "Safety & Care Manual",
    description: "Keep your Stella in perfect condition",
  },
  {
    name: "Welcome Card",
    description: "A personal note from the team",
  },
]

export default function WhatsInBox() {
  return (
    <section className="py-24 bg-[var(--surface-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-6">What's in the box</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-10">Everything you need, nothing you don't.</p>
            <ul className="space-y-6">
              {boxContents.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--google-blue)] mt-2.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)]">{item.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-background rounded-3xl flex items-center justify-center overflow-hidden">
              <img
                src="/premium-product-box-unboxing-minimal-white-google-.jpg"
                alt="Google Stella box contents"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
