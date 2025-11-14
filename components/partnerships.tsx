"use client"

import { useEffect, useRef, useState } from "react"

const partnerships = [
  { name: "Certified Detailer", logo: "/partnerships/certified-detailer.svg" },
  { name: "Premium Products", logo: "/partnerships/premium-products.svg" },
  { name: "Quality Assurance", logo: "/partnerships/quality-assurance.svg" },
  { name: "Professional Service", logo: "/partnerships/professional-service.svg" },
  { name: "Industry Leader", logo: "/partnerships/industry-leader.svg" },
  { name: "Customer Excellence", logo: "/partnerships/customer-excellence.svg" },
]

export function Partnerships() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 md:py-12 bg-background/50 border-y border-border/30"
    >
      <div className="w-full overflow-hidden">
        <div
          className={`flex items-center justify-center gap-12 md:gap-16 lg:gap-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {partnerships.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center group flex-shrink-0"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative h-10 md:h-12 w-auto px-3 md:px-4 flex items-center justify-center">
                {/* Placeholder for logo - in production, replace with actual logo images */}
                <div className="text-muted-foreground/50 group-hover:text-muted-foreground/80 transition-all duration-500 text-xs md:text-sm font-light tracking-[0.15em] uppercase whitespace-nowrap">
                  {partner.name}
                </div>
                {/* Uncomment and use when you have actual logo images:
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                */}
              </div>
              {index < partnerships.length - 1 && (
                <div className="h-8 w-px bg-border/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

