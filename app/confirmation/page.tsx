"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Package, Calendar, ArrowRight } from "lucide-react"

interface OrderData {
  model: {
    id: string
    name: string
    price: number
    color: string
  }
  accessories: Array<{
    id: string
    name: string
    price: number
  }>
  fullName: string
  email: string
  total: number
  orderDate: string
}

export default function ConfirmationPage() {
  const router = useRouter()
  const [orderData, setOrderData] = useState<OrderData | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("stellaPreOrder")
    if (stored) {
      setOrderData(JSON.parse(stored))
    } else {
      router.push("/pre-order")
    }
  }, [router])

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#4285F4] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center">
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
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#34A853] flex items-center justify-center"
        >
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}>
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </motion.div>
        </motion.div>

        {/* Confirmation Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-4">Your order has been confirmed!</h1>
          <p className="text-xl text-muted-foreground">
            Thank you, <span className="text-foreground font-medium">{orderData.fullName}</span>
          </p>
        </motion.div>

        {/* Order Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-muted/30 rounded-3xl border border-border overflow-hidden mb-8"
        >
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#4285F4]/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-[#4285F4]" />
              </div>
              <h2 className="text-lg font-medium text-foreground">Order Summary</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">{orderData.model.name}</span>
                <span className="text-foreground">₹{orderData.model.price.toLocaleString("en-IN")}</span>
              </div>
              {orderData.accessories.map((accessory) => (
                <div key={accessory.id} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{accessory.name}</span>
                  <span className="text-muted-foreground">₹{accessory.price.toLocaleString("en-IN")}</span>
                </div>
              ))}
              <div className="border-t border-border pt-3 flex justify-between items-center">
                <span className="font-medium text-foreground">Total</span>
                <span className="text-xl font-medium text-foreground">₹{orderData.total.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#4285F4]/5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#FBBC05]/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#FBBC05]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Expected Delivery</p>
                <p className="text-lg font-medium text-foreground">1st April 2026</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34A853]/10 border border-[#34A853]/20">
            <div className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            <span className="text-sm font-medium text-[#34A853]">Pre-Order Confirmed</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            className="h-14 px-8 rounded-full bg-[#4285F4] hover:bg-[#4285F4]/90 text-lg font-medium hover:shadow-lg transition-all"
          >
            <Link href="/">
              Back to Home
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-14 px-8 rounded-full border-2 text-lg font-medium hover:bg-muted/50 transition-all bg-transparent"
          >
            <Link href="/#models">Explore More Products</Link>
          </Button>
        </motion.div>
      </div>
    </motion.main>
  )
}
