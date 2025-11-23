"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "Vlastné PPF fólie",
    description: "Profesionálne vinylové polepy a vlastné nálepky na personalizáciu a ochranu vášho vozidla",
    image: "/photos/1.jpg",
  },
  {
    title: "Hĺbkové Čistenie",
    description: "Komplexné čistenie interiéru a exteriéru na obnovenie vášho auta do výstavného stavu",
    image: "/photos/2.jpg",
  },
  {
    title: "Strojové leštenie",
    description: "Kompletná služba leštenia laku vozidla na zrkadlový lesk",
    image: "/photos/3.jpg",
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

        {/* Yellow divider line */}
        <div className="w-64 h-px bg-yellow-500/60 my-16 mx-auto" />

        {/* Detailed Services Subsection */}
        <div className="space-y-24">
          {/* Service 1: Čistenie - Image left, Text right */}
          <div
            data-index="5"
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ${
              visibleElements.has(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="/own_photos/img_3.jpeg"
                alt="Čistenie vozidla"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                Čistenie
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Pravidelné čistenie vášho auta zabezpečí, že budete na cestách v čistom prostredí a vaše auto sa vám odvďačí dlhšou životnosťou. Niekedy však bežná údržba nestačí a vtedy je dobré dopriať autu hĺbkové čistenie aby bolo opäť ako nové.
              </p>
            </div>
          </div>

          {/* Service 2: Strojové leštenie - Text left, Image right */}
          <div
            data-index="6"
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ${
              visibleElements.has(6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                Strojové leštenie
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Strojové leštenie odstráni z vášho auta škrabance, zapečený hmyz, vodný kameň, dodá autu lesk a prehĺbi farbu. Pre ešte lepšie výsledky sa na aute vykoná viackrokové leštenie.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden order-1 md:order-2">
              <img
                src="/own_photos/img_4.jpeg"
                alt="Strojové leštenie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Service 3: Keramická ochrana - Image left, Text right */}
          <div
            data-index="7"
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ${
              visibleElements.has(7) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="/own_photos/img_2.jpeg"
                alt="Keramická ochrana"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                Keramická ochrana
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Keramická ochrana je povlak na vozidle, ktorý chráni lak pred chemickým poškodením, má hydrofóbne vlastnosti, ľahšie sa umýva a takisto aj suší.
              </p>
            </div>
          </div>

          {/* Service 4: PPF fólia - Text left, Image right */}
          <div
            data-index="8"
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ${
              visibleElements.has(8) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                PPF fólia
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                PPF fólia je ochrana pôvodného laku pred odletujúcimi kamienkami, škrabancami, parkoviskovými šuchancami a zanecháva vaše auto na dlhé roky nepoškodené a lesklé. Oblepiť sa dá hociktorá čast vášho vozidla, výber je len na vás.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden order-1 md:order-2">
              <img
                src="/own_photos/img_5.jpeg"
                alt="PPF fólia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
