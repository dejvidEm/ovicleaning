export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Full-width Map */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps?q=%C4%8Cere%C5%A1%C5%88ov%C3%A1+378%2F26+941+23+Andovce&output=embed&hl=sk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16">
          <div>
            <a href="#home" className="cursor-pointer">
              <h3 className="text-xl font-bold mb-6">
                <span className="text-primary">Ovi</span>
                <span className="text-foreground">Cleaning</span>
              </h3>
            </a>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Prémiové autodetailing služby pre náročných majiteľov vozidiel.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Rýchle Odkazy</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Domov
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Služby
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Cenník
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Služby</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Autonálepky</li>
              <li className="text-muted-foreground">Hĺbkové Čistenie</li>
              <li className="text-muted-foreground">Príprava na Predaj</li>
              <li className="text-muted-foreground">Keramický Povlak</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Kontakt</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Ovicleaning s. r. o.</li>
              <li>Čerešňová 378/26</li>
              <li>941 23 Andovce</li>
              <li>0944 487 521</li>
              <li>ovicleaningsro@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 md:mt-20 pt-10 md:pt-12 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ovicleaning s. r. o. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}
