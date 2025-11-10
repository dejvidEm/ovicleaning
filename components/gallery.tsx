"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const galleryItems = [
  {
    image: "/car-detailing-before-after-exterior.jpg",
    title: "Transformácia Exteriéru",
    description: "Pred a po - kompletná obnova vzhľadu vozidla",
  },
  {
    image: "/car-interior-leather-cleaning-detail.jpg",
    title: "Čistenie Kože",
    description: "Profesionálne ošetrenie kožených sedadiel",
  },
  {
    image: "/car-paint-correction.png",
    title: "Korekcia Laku",
    description: "Odstránenie škrabancov a obnova lesku",
  },
  {
    image: "/car-ceramic-coating.png",
    title: "Keramický Povlak",
    description: "Dlhodobá ochrana laku vozidla",
  },
  {
    image: "/luxury-car-engine-bay-cleaning.jpg",
    title: "Čistenie Motorového Priestoru",
    description: "Dôkladné čistenie a ošetrenie",
  },
  {
    image: "/car-headlight-restoration-before-after.jpg",
    title: "Obnova Svetlometov",
    description: "Vrátenie pôvodnej priehľadnosti",
  },
  {
    image: "/car-paint-correction-polish.jpg",
    title: "Leštenie Laku",
    description: "Profesionálne leštenie na zrkadlový lesk",
  },
  {
    image: "/luxury-car-interior-cleaning-leather.jpg",
    title: "Hĺbkové Čistenie Interiéru",
    description: "Kompletná sanitácia a ošetrenie",
  },
  {
    image: "/car-vinyl-wrap-custom-design.jpg",
    title: "Vlastný Vinylový Polep",
    description: "Jedinečný dizajn podľa vašich predstáv",
  },
]

export function Gallery() {
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
    <section id="gallery" ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2
          data-index="0"
          className={`text-4xl md:text-6xl font-semibold mb-6 text-center transition-all duration-700 ${
            visibleElements.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Naša <span className="text-primary">Práca</span>
        </h2>
        <p
          data-index="1"
          className={`text-muted-foreground text-center mb-20 max-w-xl mx-auto text-lg text-pretty transition-all duration-700 delay-150 ${
            visibleElements.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Pozrite si transformáciu, ktorú prinášame každému vozidlu
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => {
            // Define grid spans for asymmetrical bento layout (3 rows, 4 cols)
            const gridClasses = [
              "md:col-span-2 md:row-span-2", // First: large (2x2) - rows 1-2
              "md:col-span-2 md:row-span-1", // Second: wide (2x1) - row 1
              "md:col-span-1 md:row-span-1", // Third: small (1x1) - row 1
              "md:col-span-1 md:row-span-1", // Fourth: small (1x1) - row 1
              "md:col-span-2 md:row-span-1", // Fifth: wide (2x1) - row 2
              "md:col-span-1 md:row-span-1", // Sixth: small (1x1) - row 2
              "md:col-span-1 md:row-span-1", // Seventh: small (1x1) - row 2
              "md:col-span-2 md:row-span-1", // Eighth: wide (2x1) - row 3
              "md:col-span-2 md:row-span-1", // Ninth: wide (2x1) - row 3
            ]
            
            const minHeightClasses = [
              "min-h-[400px] md:min-h-[500px]", // Large (2x2)
              "min-h-[250px] md:min-h-[300px]", // Wide (2x1)
              "min-h-[250px] md:min-h-[300px]", // Small (1x1)
              "min-h-[250px] md:min-h-[300px]", // Small (1x1)
              "min-h-[250px] md:min-h-[300px]", // Wide (2x1)
              "min-h-[250px] md:min-h-[300px]", // Small (1x1)
              "min-h-[250px] md:min-h-[300px]", // Small (1x1)
              "min-h-[250px] md:min-h-[300px]", // Wide (2x1)
              "min-h-[250px] md:min-h-[300px]", // Wide (2x1)
            ]

            return (
              <Card
                key={index}
                data-index={index + 2}
                className={`relative overflow-hidden bg-card border-0 shadow-sm hover:shadow-md transition-all duration-700 group cursor-pointer ${gridClasses[index]} ${minHeightClasses[index]} ${
                  visibleElements.has(index + 2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: `${(index + 2) * 100}ms`,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300" />
                
                {/* Content - visible only on hover */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className={`font-semibold mb-2 text-foreground ${
                    index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty text-sm md:text-base">
                    {item.description}
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
