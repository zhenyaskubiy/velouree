"use client"

import Image from "next/image"
import { Heart, X, ShoppingBag } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useStore } from "@/context/store-context"

export function WishlistDrawer() {
  const {
    wishlistItems,
    toggleWishlist,
    moveToCart,
    wishlistCount,
    isWishlistOpen,
    setWishlistOpen,
  } = useStore()

  return (
    <Sheet open={isWishlistOpen} onOpenChange={setWishlistOpen}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 pb-4">
          <SheetTitle className="font-serif text-xl font-semibold text-foreground">
            Wishlist
          </SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground">
            {wishlistCount} {wishlistCount === 1 ? "item" : "items"} saved
          </SheetDescription>
        </SheetHeader>

        {wishlistItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-velour-cream">
              <Heart className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="font-serif text-lg text-muted-foreground">
              Your wishlist is empty
            </p>
            <Button
              onClick={() => setWishlistOpen(false)}
              className="bg-velour-plum text-velour-ivory hover:bg-velour-plum-light"
            >
              Explore Products
            </Button>
          </div>
        ) : (
          <ScrollArea className="flex-1 px-6">
            <div className="flex flex-col gap-4 py-4">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-velour-cream/40"
                >
                  <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-md bg-velour-cream">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-foreground">
                        {item.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.subtitle}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => moveToCart(item.id)}
                      className="flex w-fit items-center gap-1.5 rounded-sm bg-velour-plum px-3 py-1.5 text-xs font-medium text-velour-ivory transition-colors hover:bg-velour-plum-light"
                    >
                      <ShoppingBag className="h-3 w-3" />
                      Move to Bag
                    </button>
                  </div>
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="mt-1 flex-shrink-0 self-start text-muted-foreground transition-colors hover:text-destructive"
                    aria-label={`Remove ${item.name} from wishlist`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </SheetContent>
    </Sheet>
  )
}
