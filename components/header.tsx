"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Product" },
  { href: "#specs", label: "Tech Specs" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <span className="text-2xl font-semibold" style={{ color: "#4285F4" }}>
                G
              </span>
              <span className="text-2xl font-semibold" style={{ color: "#EA4335" }}>
                o
              </span>
              <span className="text-2xl font-semibold" style={{ color: "#FBBC05" }}>
                o
              </span>
              <span className="text-2xl font-semibold" style={{ color: "#4285F4" }}>
                g
              </span>
              <span className="text-2xl font-semibold" style={{ color: "#34A853" }}>
                l
              </span>
              <span className="text-2xl font-semibold" style={{ color: "#EA4335" }}>
                e
              </span>
            </div>
            <span className="text-xl font-medium text-foreground">Stella</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-[#4285F4] px-6 text-white hover:bg-[#4285F4]/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/pre-order">Pre-order</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-background py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full rounded-full bg-[#4285F4] text-white hover:bg-[#4285F4]/90">
                  <Link href="/pre-order">Pre-order</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
