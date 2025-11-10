"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Domov", href: "#home" },
  { name: "O nás", href: "#about" },
  { name: "Služby", href: "#services" },
  { name: "Cenník", href: "#pricing" },
  { name: "Galéria", href: "#gallery" },
  { name: "Recenzie", href: "#reviews" },
  { name: "Kontakt", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-primary cursor-pointer">
            Ovi<span className="text-foreground">Cleaning</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+421912123456"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium text-sm"
            >
              <Phone className="h-4 w-4" />
              <span>+421 912 123 456</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+421912123456"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span>+421 912 123 456</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
