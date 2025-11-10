"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { AuroraText } from "@/components/ui/aurora-text"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 text-balance leading-tight">
          <span className="text-foreground">Prémiové</span>
          <br />
          <AuroraText 
            className="inline-block"
            colors={["#FFD700", "#FFA500", "#FFC107", "#F4D03F", "#F7DC6F"]}
          >
            OviCleaning
          </AuroraText>
          <span className="text-primary"> Služby</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
          Profesionálne nálepky, hĺbkové čistenie a kompletná príprava auta na predaj
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-10 py-7 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Rezervovať
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-7 border-0 bg-background/50 backdrop-blur text-foreground hover:bg-background/70"
            onClick={() => {
              const element = document.getElementById('services')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Zobraziť Služby
          </Button>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary">
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
