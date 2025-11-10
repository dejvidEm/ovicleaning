"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "Vlastné Autonálepky",
    description: "Profesionálne vinylové polepy a vlastné nálepky na personalizáciu a ochranu vášho vozidla",
    image: "/car-vinyl-wrap-sticker-application.jpg",
  },
  {
    title: "Hĺbkové Čistenie",
    description: "Komplexné čistenie interiéru a exteriéru na obnovenie vášho auta do výstavného stavu",
    image: "/car-deep-cleaning-interior-detailing.jpg",
  },
  {
    title: "Príprava na Predaj",
    description: "Kompletná služba prípravy auta na maximalizáciu predajnej hodnoty a prilákanie kupcov",
    image: "/car-preparation-for-sale-polishing.jpg",
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleElements((prev) => new Set(prev).add(index))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      const children = sectionRef.current.querySelectorAll("[data-index]")
      children.forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2
          data-index="0"
          className={`text-4xl md:text-6xl font-semibold mb-6 text-center transition-all duration-700 ${
            visibleElements.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Naše <span className="text-primary">Služby</span>
        </h2>
        <p
          data-index="1"
          className={`text-muted-foreground text-center mb-20 max-w-xl mx-auto text-lg text-pretty transition-all duration-700 delay-150 ${
            visibleElements.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Komplexné riešenia autodetailingu šité na mieru vašim potrebám
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            // Define grid spans for asymmetrical bento layout
            const gridClasses = [
              "md:col-span-2 md:row-span-2", // First card: large (2x2)
              "md:col-span-2 md:row-span-1", // Second card: wide (2x1)
              "md:col-span-2 md:row-span-1", // Third card: wide (2x1)
            ]
            
            const minHeightClasses = [
              "min-h-[500px] md:min-h-[600px]", // Taller for large card
              "min-h-[300px] md:min-h-[350px]", // Medium for wide cards
              "min-h-[300px] md:min-h-[350px]",
            ]

            return (
              <Card
                key={index}
                data-index={index + 2}
                className={`relative overflow-hidden bg-card border-0 shadow-sm hover:shadow-md transition-all duration-700 group ${gridClasses[index]} ${minHeightClasses[index]} ${
                  visibleElements.has(index + 2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: `${(index + 2) * 150}ms`,
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
                
                {/* Content - positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                  <h3 className={`font-semibold mb-3 text-foreground ${index === 0 ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
