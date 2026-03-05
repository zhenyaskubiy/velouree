import { Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = {
  Colosseum: ["Collections", "Shop", "Rituals", "Consulting"],
  Category: ["Body", "Serums", "Beauty", "Candles"],
  Rituals: ["Routines", "Custom Boxes", "Bundles"],
  Footer: ["Privacy", "Contact", "Careers", "Return policies"],
}

export function Footer() {
  return (
    <footer className="bg-velour-dark py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-velour-ivory">
                {title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-velour-ivory/50 transition-colors hover:text-velour-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-velour-ivory/10 pt-8 md:flex-row">
          <p className="text-xs text-velour-ivory/40">
            &copy; 2025-2026 &middot; Flagship Classic Shop
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-velour-ivory/40 transition-colors hover:text-velour-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-velour-ivory/40 transition-colors hover:text-velour-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-velour-ivory/40 transition-colors hover:text-velour-gold"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {["Visa", "MC", "Amex", "PayPal"].map((pm) => (
              <span
                key={pm}
                className="rounded-sm bg-velour-ivory/10 px-2 py-1 text-[10px] font-medium text-velour-ivory/50"
              >
                {pm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
