"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Zap, Shield, Sparkles, ChevronLeft, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const models = [
  {
    id: "stella-1",
    name: "Stella 1",
    tagline: "Where it all begins",
    price: 4999,
    description: "Rain prediction, LED indicators, and Google Weather integration.",
    icon: Zap,
    color: "#4285F4",
  },
  {
    id: "stella-2",
    name: "Stella 2",
    tagline: "Smarter. Better. Connected.",
    price: 7999,
    description: "Google Assistant, smart loss prevention, and mood lighting.",
    icon: Shield,
    color: "#34A853",
  },
  {
    id: "stella-3",
    name: "Stella 3 Pro",
    tagline: "The ultimate. Redefined.",
    price: 12999,
    description: "Carbon fiber, auto-open, 120 km/h wind resistance.",
    icon: Sparkles,
    color: "#9333EA",
  },
]

const accessories = [
  {
    id: "cover",
    name: "Umbrella Cover",
    description: "Premium waterproof protective cover. Scratch-resistant, easy slip-on.",
    price: 799,
  },
  {
    id: "stand",
    name: "Umbrella Stand",
    description: "Minimal indoor stand for home or office. Anti-slip base, modern design.",
    price: 1499,
  },
  {
    id: "pouch",
    name: "Travel Umbrella Pouch",
    description: "Compact travel pouch. Water-absorbing inner lining.",
    price: 999,
  },
  {
    id: "adapter",
    name: "Charging Adapter",
    description: "Magnetic charging adapter. USB-C fast charging.",
    price: 1199,
  },
  {
    id: "grip",
    name: "Smart Handle Grip",
    description: "Interchangeable ergonomic grip. Custom color accents.",
    price: 699,
  },
]

export default function PreOrderPage() {
  const router = useRouter()
  const [selectedModel, setSelectedModel] = useState<string | null>(null)
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([])
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [nameError, setNameError] = useState(false)

  const toggleAccessory = (id: string) => {
    setSelectedAccessories((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]))
  }

  const calculateTotal = () => {
    const modelPrice = models.find((m) => m.id === selectedModel)?.price || 0
    const accessoriesPrice = selectedAccessories.reduce((sum, id) => {
      const accessory = accessories.find((a) => a.id === id)
      return sum + (accessory?.price || 0)
    }, 0)
    return modelPrice + accessoriesPrice
  }

  const handleConfirm = () => {
    if (!fullName.trim()) {
      setNameError(true)
      return
    }
    if (!selectedModel) return

    const orderData = {
      model: models.find((m) => m.id === selectedModel),
      accessories: selectedAccessories.map((id) => accessories.find((a) => a.id === id)),
      fullName: fullName.trim(),
      email: email.trim(),
      total: calculateTotal(),
      orderDate: new Date().toISOString(),
    }

    localStorage.setItem("stellaPreOrder", JSON.stringify(orderData))
    router.push("/confirmation")
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-1">
            <span className="text-xl font-semibold" style={{ color: "#4285F4" }}>
              G
            </span>
            <span className="text-xl font-semibold" style={{ color: "#EA4335" }}>
              o
            </span>
            <span className="text-xl font-semibold" style={{ color: "#FBBC05" }}>
              o
            </span>
            <span className="text-xl font-semibold" style={{ color: "#4285F4" }}>
              g
            </span>
            <span className="text-xl font-semibold" style={{ color: "#34A853" }}>
              l
            </span>
            <span className="text-xl font-semibold" style={{ color: "#EA4335" }}>
              e
            </span>
            <span className="text-lg font-medium text-foreground ml-1">Stella</span>
          </div>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-4">Pre-order your Stella</h1>
          <p className="text-lg text-muted-foreground">Choose your model and complete your reservation.</p>
        </motion.div>

        {/* Model Selection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-medium text-foreground mb-6">Select your model</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {models.map((model) => {
              const Icon = model.icon
              const isSelected = selectedModel === model.id
              return (
                <motion.button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "relative p-6 rounded-2xl border-2 text-left transition-all duration-300",
                    isSelected
                      ? "border-[var(--google-blue)] bg-[#4285F4]/5 shadow-lg"
                      : "border-border hover:border-muted-foreground/50 hover:shadow-md",
                  )}
                >
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: model.color }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${model.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: model.color }} />
                  </div>
                  <p className="text-xs font-medium mb-1" style={{ color: model.color }}>
                    {model.tagline}
                  </p>
                  <h3 className="text-xl font-medium text-foreground mb-2">{model.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{model.description}</p>
                  <p className="text-2xl font-medium text-foreground">₹{model.price.toLocaleString("en-IN")}</p>
                </motion.button>
              )
            })}
          </div>
        </motion.section>

        {/* User Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-medium text-foreground mb-6">Your details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                Full Name <span className="text-[#EA4335]">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                  if (nameError) setNameError(false)
                }}
                className={cn(
                  "h-12 rounded-xl border-2 transition-all focus-visible:ring-0 focus-visible:ring-offset-0",
                  nameError
                    ? "border-[#EA4335] focus-visible:border-[#EA4335]"
                    : "border-border focus-visible:border-[#4285F4]",
                )}
              />
              <AnimatePresence>
                {nameError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-[#EA4335]"
                  >
                    Please enter your name to continue
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl border-2 border-border transition-all focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#4285F4]"
              />
            </div>
          </div>
        </motion.section>

        {/* Accessories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-medium text-foreground mb-2">Accessories designed to go with you.</h2>
          <p className="text-muted-foreground mb-6">Optional add-ons to enhance your experience.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {accessories.map((accessory) => {
              const isSelected = selectedAccessories.includes(accessory.id)
              return (
                <motion.div
                  key={accessory.id}
                  whileHover={{ scale: 1.02 }}
                  className={cn(
                    "relative p-5 rounded-2xl border-2 transition-all duration-300",
                    isSelected ? "border-[#34A853] bg-[#34A853]/5" : "border-border hover:border-muted-foreground/50",
                  )}
                >
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#34A853] flex items-center justify-center"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                  <h3 className="font-medium text-foreground mb-1">{accessory.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{accessory.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium text-foreground">₹{accessory.price.toLocaleString("en-IN")}</p>
                    <Button
                      variant={isSelected ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleAccessory(accessory.id)}
                      className={cn(
                        "rounded-full transition-all",
                        isSelected
                          ? "bg-[#34A853] hover:bg-[#34A853]/90"
                          : "hover:border-[#34A853] hover:text-[#34A853]",
                      )}
                    >
                      {isSelected ? (
                        <>
                          <Minus className="w-4 h-4 mr-1" />
                          Remove
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Order Summary & Confirm */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-muted/30 rounded-3xl p-8 border border-border"
        >
          <h2 className="text-2xl font-medium text-foreground mb-6">Order Summary</h2>
          <div className="space-y-4 mb-8">
            {selectedModel ? (
              <div className="flex justify-between items-center">
                <span className="text-foreground">{models.find((m) => m.id === selectedModel)?.name}</span>
                <span className="font-medium text-foreground">
                  ₹{models.find((m) => m.id === selectedModel)?.price.toLocaleString("en-IN")}
                </span>
              </div>
            ) : (
              <p className="text-muted-foreground">No model selected</p>
            )}
            {selectedAccessories.map((id) => {
              const accessory = accessories.find((a) => a.id === id)
              return (
                <div key={id} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{accessory?.name}</span>
                  <span className="text-foreground">₹{accessory?.price.toLocaleString("en-IN")}</span>
                </div>
              )
            })}
            <div className="border-t border-border pt-4 flex justify-between items-center">
              <span className="text-lg font-medium text-foreground">Total</span>
              <span className="text-2xl font-medium text-foreground">₹{calculateTotal().toLocaleString("en-IN")}</span>
            </div>
          </div>
          <Button
            onClick={handleConfirm}
            disabled={!selectedModel}
            className={cn(
              "w-full h-14 rounded-full text-lg font-medium transition-all",
              selectedModel
                ? "bg-[#4285F4] hover:bg-[#4285F4]/90 hover:shadow-lg"
                : "bg-muted text-muted-foreground cursor-not-allowed",
            )}
          >
            Confirm Pre-Order
          </Button>
          <p className="text-center text-sm text-muted-foreground mt-4">
            No payment required. Reserve your spot today.
          </p>
        </motion.section>
      </div>
    </motion.main>
  )
}
