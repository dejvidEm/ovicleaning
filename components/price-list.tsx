"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const packages = [
  {
    name: "Základný",
    price: "99€",
    features: ["Ručné umytie exteriéru", "Vysávanie interiéru", "Čistenie okien", "Lesk pneumatík", "Vôňa do auta"],
  },
  {
    name: "Prémiový",
    price: "199€",
    features: [
      "Všetko zo Základného",
      "Clay bar ošetrenie",
      "Leštenie laku",
      "Hĺbkové čistenie interiéru",
      "Kondicionovanie kože",
      "Čistenie motorového priestoru",
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "349€",
    features: [
      "Všetko z Prémiového",
      "Keramický povlak",
      "Obnova svetlometov",
      "Korekcia laku",
      "Odstránenie zápachu",
      "Kompletný detailing",
      "6-mesačná ochrana",
    ],
  },
]

const individualServices = [
  { name: "Ručné umytie exteriéru", price: "25€" },
  { name: "Vysávanie interiéru", price: "15€" },
  { name: "Čistenie okien", price: "20€" },
  { name: "Lesk pneumatík", price: "10€" },
  { name: "Vôňa do auta", price: "5€" },
  { name: "Clay bar ošetrenie", price: "45€" },
  { name: "Leštenie laku", price: "60€" },
  { name: "Hĺbkové čistenie interiéru", price: "80€" },
  { name: "Kondicionovanie kože", price: "35€" },
  { name: "Čistenie motorového priestoru", price: "40€" },
  { name: "Keramický povlak", price: "250€" },
  { name: "Obnova svetlometov", price: "70€" },
  { name: "Korekcia laku", price: "120€" },
  { name: "Odstránenie zápachu", price: "50€" },
  { name: "Kompletný detailing", price: "180€" },
  { name: "Vlastné autonálepky", price: "od 30€" },
  { name: "Vinylový polep", price: "od 200€" },
  { name: "Príprava na predaj", price: "150€" },
]

export function PriceList() {
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
    <section id="pricing" ref={sectionRef} className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <h2
          data-index="0"
          className={`text-4xl md:text-6xl font-semibold mb-6 text-center transition-all duration-700 ${
            visibleElements.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary">Cenník</span> Balíčkov
        </h2>
        <p
          data-index="1"
          className={`text-muted-foreground text-center mb-20 max-w-xl mx-auto text-lg text-pretty transition-all duration-700 delay-150 ${
            visibleElements.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Vyberte si perfektný balíček pre potreby vášho vozidla
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              data-index={index + 2}
              className={`p-10 bg-card/50 backdrop-blur border-0 shadow-sm hover:shadow-md transition-all duration-700 ${
                pkg.popular ? "ring-1 ring-primary/20 md:scale-[1.02]" : ""
              } ${visibleElements.has(index + 2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              {pkg.popular && (
                <div className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full inline-block mb-6">
                  Najobľúbenejší
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2 text-foreground">{pkg.name}</h3>
              <div className="text-5xl font-semibold mb-8" style={{ color: 'oklch(0.85 0.15 95)' }}>{pkg.price}</div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-medium cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Vybrať Balíček
              </Button>
            </Card>
          ))}
        </div>

        {/* Individual Services Table */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3
            data-index="5"
            className={`text-3xl md:text-4xl font-semibold mb-8 text-center transition-all duration-700 ${
              visibleElements.has(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary">Cenník</span> Individuálnych Služieb
          </h3>
          <p
            data-index="6"
            className={`text-muted-foreground text-center mb-12 max-w-xl mx-auto text-lg text-pretty transition-all duration-700 delay-150 ${
              visibleElements.has(6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ceny jednotlivých služieb pri objednávke samostatne
          </p>
          
          <Card
            data-index="7"
            className={`bg-card/50 backdrop-blur border-0 shadow-sm transition-all duration-700 delay-300 p-4 md:p-6 ${
              visibleElements.has(7) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="overflow-x-auto -mx-4 md:-mx-6 px-4 md:px-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-foreground font-semibold text-base md:text-lg py-4">
                      Služba
                    </TableHead>
                    <TableHead className="text-right text-foreground font-semibold text-base md:text-lg py-4">
                      Cena
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {individualServices.map((service, index) => (
                    <TableRow key={index} className="hover:bg-muted/30 border-b border-border/50">
                      <TableCell className="text-muted-foreground font-medium py-4 text-sm md:text-base">
                        {service.name}
                      </TableCell>
                      <TableCell className="text-right font-semibold py-4 text-sm md:text-base whitespace-nowrap" style={{ color: 'oklch(0.85 0.15 95)' }}>
                        {service.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
