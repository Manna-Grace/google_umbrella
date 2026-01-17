"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RotateCw } from "lucide-react"

export default function ProductShowcase() {
  const [rotation, setRotation] = useState(0)

  const angles = [
    { label: "Front", rotation: 0 },
    { label: "Side", rotation: 90 },
    { label: "Back", rotation: 180 },
    { label: "Other", rotation: 270 },
  ]

  return (
    <section id="showcase" className="bg-[#F8F9FA] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-[#202124] md:text-5xl">
            360° Product View
          </h2>
          <p className="text-pretty text-lg text-[#5F6368]">
            Explore every angle of the Stella. Crafted with precision and elegance.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* 3D Rotation Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-12 h-[400px] w-full max-w-xl"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-0 mx-auto h-80 w-80 rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-[#3B82F6]/20 blur-3xl" />

            {/* Product with rotation */}
            <motion.div
              animate={{ rotateY: rotation }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative flex h-full items-center justify-center"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <img
                src="/sleek-modern-smart-umbrella-floating-with-purple-a.jpg"
                alt="Google Stella - 360 View"
                className="h-auto max-h-[350px] w-auto rounded-2xl object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Rotation indicator */}
            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
              <RotateCw className="h-4 w-4 text-[#5F6368]" />
              <span className="text-sm font-medium text-[#5F6368]">Drag or use buttons to rotate</span>
            </div>
          </motion.div>

          {/* Rotation Controls */}
          <div className="flex flex-wrap justify-center gap-3">
            {angles.map((angle) => (
              <button
                key={angle.label}
                onClick={() => setRotation(angle.rotation)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${
                  rotation === angle.rotation
                    ? "bg-[#202124] text-white shadow-lg"
                    : "bg-white text-[#5F6368] hover:bg-[#E8EAED]"
                }`}
              >
                {angle.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
