"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F9FA] pt-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-[#202124] md:text-6xl lg:text-7xl">
              Meet <span className="stella-gradient">Stella</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-[#5F6368] md:text-xl">
              The AI-powered umbrella that predicts the storm before it starts.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="group rounded-full bg-[#4285F4] px-10 py-7 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#3367D6] hover:shadow-xl hover:-translate-y-1"
              >
                Pre-order
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative mt-16 w-full max-w-2xl"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 mx-auto h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#7C3AED]/30 to-[#3B82F6]/30 blur-3xl" />

            {/* Product image */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <img
                src="/sleek-modern-smart-umbrella-floating-with-purple-a.jpg"
                alt="Google Stella - AI-Powered Smart Umbrella"
                className="mx-auto drop-shadow-2xl stella-glow rounded-3xl"
                width={600}
                height={500}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[#5F6368]">Scroll to explore</span>
          <div className="h-12 w-6 rounded-full border-2 border-[#E8EAED] p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="h-2 w-2 rounded-full bg-[#4285F4]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
