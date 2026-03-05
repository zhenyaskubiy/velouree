"use client"

import { useState } from "react"
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Collections", href: "#" },
  { label: "Shop", href: "#featured" },
  { label: "Rituals", href: "#ritual" },
  { label: "About", href: "#philosophy" },
  { label: "Journal", href: "#" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-velour-plum transition-shadow duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start">
          <span className="font-serif text-2xl font-semibold tracking-[0.15em] text-velour-ivory lg:text-3xl">
            VELOUREE
          </span>
          <span className="font-serif text-xs italic tracking-widest text-velour-gold">
            sacred ritual
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-light tracking-wide text-velour-ivory/80 transition-colors duration-200 hover:text-velour-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-velour-ivory/80 transition-colors hover:text-velour-gold"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Wishlist"
            className="hidden text-velour-ivory/80 transition-colors hover:text-velour-gold sm:block"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            aria-label="Shopping bag"
            className="relative text-velour-ivory/80 transition-colors hover:text-velour-gold"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-velour-gold text-[10px] font-semibold text-velour-plum">
              3
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="text-velour-ivory lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-velour-ivory/10 bg-velour-plum px-4 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-serif text-lg text-velour-ivory/90 transition-colors hover:text-velour-gold"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
