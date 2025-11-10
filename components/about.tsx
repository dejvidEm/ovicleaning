"use client"

import { useEffect, useRef, useState } from "react"
import { NumberTicker } from "@/components/ui/number-ticker"

export function About() {
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
    <section id="about" ref={sectionRef} className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2
            data-index="0"
            className={`text-4xl md:text-6xl font-semibold mb-8 text-center transition-all duration-700 ${
              visibleElements.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            O <span className="text-primary">nás</span>
          </h2>
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p
              data-index="1"
              className={`text-pretty transition-all duration-700 delay-150 ${
                visibleElements.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              S viac ako 10-ročnou skúsenosťou v autodetailingu sme si vybudovali povesť poskytovaním
              výnimočných výsledkov, ktoré prekračujú očakávania. Náš tím certifikovaných profesionálov používa iba prémiové
              produkty a najmodernejšie techniky, aby zabezpečil, že vaše vozidlo vyzerá absolútne najlepšie.
            </p>
            <p
              data-index="2"
              className={`text-pretty transition-all duration-700 delay-300 ${
                visibleElements.has(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Či už hľadáte ochranu vašej investície pomocou vlastných nálepiek, obnovenie výstavného lesku vášho auta
              hĺbkovým čistením, alebo prípravu vášho vozidla na predaj pre maximalizáciu jeho hodnoty, máme odbornosť a
              vášeň na poskytnutie vynikajúcich výsledkov zakaždým.
            </p>
            <div
              data-index="3"
              className={`grid md:grid-cols-3 gap-12 pt-12 transition-all duration-700 delay-500 ${
                visibleElements.has(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center">
                <div className="text-5xl font-semibold mb-3">
                  <NumberTicker 
                    value={10} 
                    className="text-5xl font-semibold" 
                    style={{ color: 'oklch(0.85 0.15 95)' }}
                  />+
                </div>
                <div className="text-foreground font-medium">Rokov Skúseností</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-semibold mb-3">
                  <NumberTicker 
                    value={5000} 
                    className="text-5xl font-semibold" 
                    style={{ color: 'oklch(0.85 0.15 95)' }}
                  />+
                </div>
                <div className="text-foreground font-medium">Vyčistených Áut</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-semibold mb-3">
                  <NumberTicker 
                    value={100} 
                    className="text-5xl font-semibold" 
                    style={{ color: 'oklch(0.85 0.15 95)' }}
                  />%
                </div>
                <div className="text-foreground font-medium">Spokojnosť</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
