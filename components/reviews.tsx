"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    name: "Michal Jankovič",
    rating: 5,
    text: "Absolútne neuveriteľná služba! Moje auto vyzerá lepšie ako keď som ho prvýkrát kúpil. Pozornosť k detailom je neporovnateľná.",
    date: "pred 2 týždňami",
  },
  {
    name: "Sára Nováková",
    rating: 5,
    text: "Služba prípravy na predaj mi pomohla predať auto o 2000€ drahšie, ako som očakávala. Stálo to za každý cent!",
    date: "pred 1 mesiacom",
  },
  {
    name: "Dávid Černý",
    rating: 5,
    text: "Profesionálny tím, úžasné výsledky. Keramický povlak udržal moje auto v perfektnom stave mesiace.",
    date: "pred 3 mesiacmi",
  },
  {
    name: "Ema Horváthová",
    rating: 5,
    text: "Najlepšia detailingová služba v meste! Premenili moje 10-ročné auto na niečo, čo vyzerá ako nové.",
    date: "pred 2 mesiacmi",
  },
  {
    name: "Jakub Tomášek",
    rating: 5,
    text: "Práca s vlastnými nálepkami bola bezchybná. Presne to, čo som chcel a kvalita je vynikajúca.",
    date: "pred 3 týždňami",
  },
  {
    name: "Lucia Anderová",
    rating: 5,
    text: "Služba hĺbkového čistenia prekročila všetky očakávania. Interiér môjho auta vonia a vyzerá úžasne!",
    date: "pred 1 mesiacom",
  },
  {
    name: "Róbert Martin",
    rating: 5,
    text: "Vynikajúca práca na korekcii laku! Povrch môjho auta je teraz ako zrkadlo. Tím skutočne ovláda svoje remeslo.",
    date: "pred 2 týždňami",
  },
  {
    name: "Jana Liová",
    rating: 5,
    text: "Vyskúšala som veľa detailingových služieb, ale táto je zďaleka najlepšia. Obnova svetlometov urobila moje auto o roky mladšie!",
    date: "pred 1 týždňom",
  },
  {
    name: "Tomáš Hnát",
    rating: 5,
    text: "Čistenie motorového priestoru bolo dôkladné a profesionálne. Môj mechanik dokonca komentoval, aké čisté to bolo!",
    date: "pred 3 týždňami",
  },
  {
    name: "Andrea Tóthová",
    rating: 5,
    text: "Inštalácia vinylového polepu bola perfektná. Pomohli mi navrhnúť niečo jedinečné a realizovali to bezchybne.",
    date: "pred 1 mesiacom",
  },
  {
    name: "Krištof Varga",
    rating: 5,
    text: "Rýchle, profesionálne a cenovo dostupné. Moje auto sa zmenilo z unaveného na výstavné za jeden deň.",
    date: "pred 2 mesiacmi",
  },
  {
    name: "Mária Gáborová",
    rating: 5,
    text: "Služba čistenia a kondicionovania kože obnovila moje sedadlá do stavu ako nové. Vrelo odporúčam!",
    date: "pred 3 týždňami",
  },
  {
    name: "Daniel Molnár",
    rating: 5,
    text: "Vynikajúca komunikácia počas celého procesu. Informovali ma a dodali presne to, čo bolo sľúbené.",
    date: "pred 1 mesiacom",
  },
  {
    name: "Jesika Biela",
    rating: 5,
    text: "Detailing interiéru bol neuveriteľný. Každý kútik bol vyčistený. Moje auto sa zvnútra cíti ako nové!",
    date: "pred 2 týždňami",
  },
  {
    name: "Rastislav Dávid",
    rating: 5,
    text: "Profesionálna služba od začiatku do konca. Tím bol presný, zdvorilý a výsledky hovoria samy za seba.",
    date: "pred 4 týždňami",
  },
]

export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      let newSlidesPerView = 3
      if (window.innerWidth < 768) {
        newSlidesPerView = 1
      } else if (window.innerWidth < 1024) {
        newSlidesPerView = 2
      }
      
      setSlidesPerView(newSlidesPerView)
      // Adjust current slide to stay within valid bounds
      setCurrentSlide((prev) => {
        const maxSlide = Math.max(0, reviews.length - newSlidesPerView)
        return Math.min(prev, maxSlide)
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
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
  }, [isVisible])

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = Math.max(0, reviews.length - slidesPerView)
      return prev >= maxSlide ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = Math.max(0, reviews.length - slidesPerView)
      return prev <= 0 ? maxSlide : prev - 1
    })
  }

  const goToSlide = (dotIndex: number) => {
    setCurrentSlide(dotIndex * slidesPerView)
  }

  const totalDots = Math.ceil(reviews.length / slidesPerView)
  const activeDot = Math.floor(currentSlide / slidesPerView)

  return (
    <section id="reviews" ref={sectionRef} className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <h2
          className={`text-4xl md:text-6xl font-semibold mb-6 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Recenzie <span className="text-primary">Klientov</span>
        </h2>
        <p
          className={`text-muted-foreground text-center mb-20 max-w-xl mx-auto text-lg text-pretty transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Nenechajte si to len od nás - počúvajte naše spokojné zákazníky
        </p>

        <div
          className={`relative transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Slider wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur border-0 shadow-sm hover:shadow-md transition-all flex-shrink-0"
                  style={{
                    width: `calc(${100 / slidesPerView}% - ${((slidesPerView - 1) * 16) / slidesPerView}px)`,
                  }}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{review.text}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="font-medium text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background/80 backdrop-blur border-0 shadow-md hover:bg-background hover:shadow-lg z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background/80 backdrop-blur border-0 shadow-md hover:bg-background hover:shadow-lg z-10"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-10">
            {[...Array(totalDots)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeDot === index
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
