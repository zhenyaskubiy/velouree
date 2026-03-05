"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react"
import type { Product, CartItem, WishlistItem } from "@/lib/types"
import { toast } from "sonner"

interface StoreContextValue {
  // Cart
  cartItems: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  cartCount: number
  cartTotal: number
  isCartOpen: boolean
  setCartOpen: (open: boolean) => void

  // Wishlist
  wishlistItems: WishlistItem[]
  toggleWishlist: (product: Product) => void
  isInWishlist: (id: string) => boolean
  moveToCart: (id: string) => void
  wishlistCount: number
  isWishlistOpen: boolean
  setWishlistOpen: (open: boolean) => void
}

const StoreContext = createContext<StoreContextValue | null>(null)

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    loadFromStorage("velouree-cart", [])
  )
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() =>
    loadFromStorage("velouree-wishlist", [])
  )
  const [isCartOpen, setCartOpen] = useState(false)
  const [isWishlistOpen, setWishlistOpen] = useState(false)

  // Persist
  useEffect(() => {
    localStorage.setItem("velouree-cart", JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem("velouree-wishlist", JSON.stringify(wishlistItems))
  }, [wishlistItems])

  // Cart actions
  const addToCart = useCallback(
    (product: Product) => {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.id === product.id)
        if (existing) {
          toast.success(`${product.name} quantity updated`)
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
        toast.success(`${product.name} added to bag`)
        return [...prev, { ...product, quantity: 1 }]
      })
    },
    []
  )

  const removeFromCart = useCallback((id: string) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === id)
      if (item) toast("Removed from bag", { description: item.name })
      return prev.filter((i) => i.id !== id)
    })
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) return
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }, [])

  const clearCart = useCallback(() => {
    setCartItems([])
    toast("Bag cleared")
  }, [])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  // Wishlist actions
  const toggleWishlist = useCallback((product: Product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id)
      if (exists) {
        toast("Removed from wishlist", { description: product.name })
        return prev.filter((item) => item.id !== product.id)
      }
      toast.success(`${product.name} added to wishlist`)
      return [...prev, product]
    })
  }, [])

  const isInWishlist = useCallback(
    (id: string) => wishlistItems.some((item) => item.id === id),
    [wishlistItems]
  )

  const moveToCart = useCallback(
    (id: string) => {
      const item = wishlistItems.find((i) => i.id === id)
      if (!item) return
      addToCart(item)
      setWishlistItems((prev) => prev.filter((i) => i.id !== id))
      toast.success(`${item.name} moved to bag`)
    },
    [wishlistItems, addToCart]
  )

  const wishlistCount = wishlistItems.length

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setCartOpen,
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        moveToCart,
        wishlistCount,
        isWishlistOpen,
        setWishlistOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error("useStore must be used within StoreProvider")
  return ctx
}
