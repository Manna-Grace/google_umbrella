"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CloudRain, MapPin, Lightbulb, Mic } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function FeaturesGrid() {
  const [moodColor, setMoodColor] = useState<"sunny" | "cloudy" | "rainy">("sunny")

  const moodColors = {
    sunny: { bg: "from-[#FBBC05] to-[#F9AB00]", label: "Sunny", temp: "24°C" },
    cloudy: { bg: "from-[#5F6368] to-[#80868B]", label: "Cloudy", temp: "18°C" },
    rainy: { bg: "from-[#4285F4] to-[#1A73E8]", label: "Rainy", temp: "14°C" },
  }

  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-[#202124] md:text-5xl">
            Intelligent Features
          </h2>
          <p className="text-pretty text-lg text-[#5F6368]">
            Four breakthrough technologies that make Stella your smartest companion.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
        >
          {/* Predictive Rain Alert - Large Card */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl bg-[#F8F9FA] p-8 lg:col-span-2 lg:row-span-2"
          >
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4285F4]/10">
                <CloudRain className="h-7 w-7 text-[#4285F4]" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-[#202124]">Predictive Rain Alert</h3>
              <p className="mb-8 max-w-sm text-[#5F6368]">
                The handle vibrates 15 minutes before rain. Never get caught unprepared again.
              </p>
            </div>

            {/* Weather UI Mock */}
            <div className="relative mt-4">
              <div className="mx-auto max-w-xs rounded-2xl bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#5F6368]">San Francisco</span>
                  <span className="text-sm text-[#5F6368]">Now</span>
                </div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="text-5xl font-light text-[#202124]">72°</div>
                  <div className="flex flex-col">
                    <CloudRain className="h-10 w-10 text-[#4285F4]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#EA4335]/10 px-3 py-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                    className="h-2 w-2 rounded-full bg-[#EA4335]"
                  />
                  <span className="text-sm font-medium text-[#EA4335]">Rain in 15 min</span>
                </div>
              </div>

              {/* Vibration indicator */}
              <motion.div
                animate={{ x: [-2, 2, -2, 2, 0] }}
                transition={{ duration: 0.4, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                className="absolute -right-4 top-1/2 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg"
              >
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scaleY: [1, 1.5, 1] }}
                      transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
                      className="h-4 w-1 rounded-full bg-[#7C3AED]"
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-[#5F6368]">Vibrating</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Smart Loss Prevention */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl bg-[#F8F9FA] p-6 lg:col-span-2"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#34A853]/10">
                  <MapPin className="h-6 w-6 text-[#34A853]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#202124]">Smart Loss Prevention</h3>
                <p className="max-w-xs text-sm text-[#5F6368]">
                  Integrated GPS tracking with Google Maps. Find your Stella anywhere.
                </p>
              </div>

              {/* Mini Map */}
              <div className="relative h-32 w-full overflow-hidden rounded-xl bg-[#E8EAED] sm:h-28 sm:w-40">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -inset-4 rounded-full bg-[#34A853]/20"
                  />
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#34A853] shadow-lg">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-1 text-xs font-medium text-[#202124]">
                  Find My Stella
                </div>
              </div>
            </div>
          </motion.div>

          {/* Atmospheric Mood Lighting - Interactive */}
          <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl bg-[#F8F9FA] p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FBBC05]/10">
              <Lightbulb className="h-6 w-6 text-[#FBBC05]" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-[#202124]">Mood Lighting</h3>
            <p className="mb-4 text-sm text-[#5F6368]">Handle glows based on weather conditions.</p>

            {/* Toggle buttons */}
            <div className="flex gap-2">
              {(["sunny", "cloudy", "rainy"] as const).map((mood) => (
                <button
                  key={mood}
                  onClick={() => setMoodColor(mood)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                    moodColor === mood ? "bg-[#202124] text-white" : "bg-white text-[#5F6368] hover:bg-[#E8EAED]"
                  }`}
                >
                  {moodColors[mood].label}
                </button>
              ))}
            </div>

            {/* Color indicator */}
            <motion.div
              key={moodColor}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mt-4 flex items-center justify-between rounded-xl bg-gradient-to-r ${moodColors[moodColor].bg} p-4 text-white`}
            >
              <span className="text-sm font-medium">{moodColors[moodColor].label}</span>
              <span className="text-lg font-semibold">{moodColors[moodColor].temp}</span>
            </motion.div>
          </motion.div>

          {/* Google Assistant Integration */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] p-6 text-white"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <Mic className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Google Assistant</h3>
            <p className="mb-4 text-sm text-white/80">Voice-activated weather updates and controls.</p>

            {/* Voice waveform */}
            <div className="flex h-12 items-center justify-center gap-1">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scaleY: [1, Math.random() * 2 + 1, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.05,
                    ease: "easeInOut",
                  }}
                  className="h-full w-1 rounded-full bg-white/60"
                  style={{ height: `${20 + Math.random() * 30}px` }}
                />
              ))}
            </div>
            <p className="mt-2 text-center text-xs text-white/60">{'"Hey Google, will it rain today?"'}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
