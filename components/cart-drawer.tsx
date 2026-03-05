"use client"

import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useStore } from "@/context/store-context"

export function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal,
    isCartOpen,
    setCartOpen,
  } = useStore()

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 pb-4">
          <SheetTitle className="font-serif text-xl font-semibold text-foreground">
            Shopping Bag
          </SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground">
            {cartCount} {cartCount === 1 ? "item" : "items"} in your bag
          </SheetDescription>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-velour-cream">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="font-serif text-lg text-muted-foreground">
              Your bag is empty
            </p>
            <Button
              onClick={() => setCartOpen(false)}
              className="bg-velour-plum text-velour-ivory hover:bg-velour-plum-light"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6">
              <div className="flex flex-col gap-4 py-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
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
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-velour-cream disabled:opacity-40"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-velour-cream"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-1 flex-shrink-0 self-start text-muted-foreground transition-colors hover:text-destructive"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="border-t border-border px-6 pt-4">
              <Separator className="mb-2" />
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-medium text-foreground">
                  Subtotal
                </span>
                <span className="font-serif text-xl font-semibold text-foreground">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
              <Button className="mt-2 w-full bg-velour-plum py-6 text-sm font-medium tracking-wide text-velour-ivory hover:bg-velour-plum-light">
                Checkout
              </Button>
              <button
                onClick={() => setCartOpen(false)}
                className="mt-1 text-center text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Continue Shopping
              </button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
