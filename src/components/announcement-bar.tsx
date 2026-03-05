export function AnnouncementBar() {
  const items = [
    "Free shipping over $75",
    "Spring Ritual Collection",
    "Cruelty-free & Vegan",
    "New arrivals every Thursday",
  ]

  const repeatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden bg-velour-gold py-3" role="marquee" aria-label="Promotional announcements">
      <div className="animate-marquee flex w-max items-center gap-8">
        {repeatedItems.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap text-sm font-medium tracking-wide text-velour-plum"
          >
            {item}
            <span className="text-velour-plum/50" aria-hidden="true">
              &middot;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
