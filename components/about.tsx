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
              Sme detailingové štúdio s viacročnou praxou, v ktorom sa postaráme o vaše vozidlo.
            </p>
            <p
              data-index="2"
              className={`text-pretty transition-all duration-700 delay-300 ${
                visibleElements.has(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Či už hľadáte čistenie vozidla, kompletný detailing, ochranu auta alebo len radu, čo spraviť s vaším autom, neváhajte nás kontaktovať – radi vám pomôžeme a vyberieme službu šitú na mieru.
            </p>
            <div className="w-64 h-px bg-yellow-500/60 my-8" />
            <p
              data-index="3"
              className={`text-pretty transition-all duration-700 delay-450 ${
                visibleElements.has(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Každému autu venujeme individuálny prístup a používame len kvalitné produkty, ktoré zaručujú dlhodobý výsledok. Okrem čistenia ponúkame aj leštenie laku, keramickú ochranu či renováciu svetiel.
            </p>
            <div className="w-64 h-px bg-yellow-500/60 my-8" />
            <p
              data-index="4"
              className={`text-pretty transition-all duration-700 delay-600 ${
                visibleElements.has(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Naša práca je našou vášňou a spokojnosť zákazníka je pre nás vždy na prvom mieste.
            </p>
            <div
              data-index="5"
              className={`grid md:grid-cols-3 gap-12 pt-12 transition-all duration-700 delay-750 ${
                visibleElements.has(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
