export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Full-width Map */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
              <li>123 OviCleaning ulica</li>
              <li>Auto Mesto, AM 12345</li>
              <li>+421 912 123 456</li>
              <li>info@ovicleaning.sk</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 md:mt-20 pt-10 md:pt-12 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OviCleaning. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}
