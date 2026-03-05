"use client"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="bg-velour-cream py-16 lg:py-20">
      <div className="mx-auto max-w-xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
          Newsletter
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Glowing the border of your grace in select beauty
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setEmail("")
          }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="flex-1 rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-velour-gold focus:outline-none focus:ring-1 focus:ring-velour-gold"
          />
          <button
            type="submit"
            className="rounded-sm bg-velour-plum px-6 py-3 text-sm font-medium tracking-wide text-velour-ivory transition-colors hover:bg-velour-plum-light"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  )
}
