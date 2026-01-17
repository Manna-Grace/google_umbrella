"use client"

import { motion } from "framer-motion"
import { Bluetooth, MapPin, Battery, Wifi } from "lucide-react"

const specs = [
  {
    icon: MapPin,
    label: "GPS",
    value: "High-precision tracking",
    color: "#34A853",
  },
  {
    icon: Bluetooth,
    label: "Bluetooth",
    value: "5.2 Low Energy",
    color: "#4285F4",
  },
  {
    icon: Battery,
    label: "Battery",
    value: "30-day standby",
    color: "#FBBC05",
  },
  {
    icon: Wifi,
    label: "Connectivity",
    value: "LTE-M enabled",
    color: "#EA4335",
  },
]

const detailedSpecs = [
  { label: "Canopy Diameter", value: "48 inches (122 cm)" },
  { label: "Collapsed Length", value: "12 inches (30 cm)" },
  { label: "Weight", value: "14.5 oz (410g)" },
  { label: "Frame Material", value: "Carbon Fiber & Titanium" },
  { label: "Canopy Material", value: "Recycled Polyester" },
  { label: "Water Resistance", value: "IPX7 Rated" },
  { label: "Wind Resistance", value: "Up to 60 mph" },
  { label: "Charging", value: "USB-C & Wireless Qi" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function TechSpecs() {
  return (
    <section id="specs" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-[#202124] md:text-5xl">Tech Specs</h2>
          <p className="text-pretty text-lg text-[#5F6368]">Engineered with precision. Built for perfection.</p>
        </motion.div>

        {/* Icon Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {specs.map((spec) => (
            <motion.div
              key={spec.label}
              variants={itemVariants}
              className="flex flex-col items-center rounded-2xl bg-[#F8F9FA] p-6 text-center"
            >
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${spec.color}15` }}
              >
                <spec.icon className="h-7 w-7" style={{ color: spec.color }} />
              </div>
              <h3 className="mb-1 font-semibold text-[#202124]">{spec.label}</h3>
              <p className="text-sm text-[#5F6368]">{spec.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Specs Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl bg-[#F8F9FA]">
            {detailedSpecs.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-6 py-4 ${
                  index !== detailedSpecs.length - 1 ? "border-b border-[#E8EAED]" : ""
                }`}
              >
                <span className="text-[#5F6368]">{spec.label}</span>
                <span className="font-medium text-[#202124]">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
