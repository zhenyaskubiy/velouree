export interface Product {
  id: string
  name: string
  subtitle: string
  price: number
  rating: number
  image: string
  badge: string | null
}

export interface CartItem extends Product {
  quantity: number
}

export type WishlistItem = Product
