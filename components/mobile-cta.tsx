"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-4 backdrop-blur-md md:hidden"
        >
          <Button
            asChild
            className="w-full rounded-full bg-[#4285F4] py-6 text-base font-medium text-white shadow-lg hover:bg-[#3367D6]"
          >
            <Link href="/pre-order">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Pre-order Stella
            </Link>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
