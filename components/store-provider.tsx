'use client'

import { createContext, useContext, useState } from 'react'
import { toast } from 'sonner'

type StoreContextValue = { cart: string[]; wishlist: string[]; addCart: (slug: string) => void; toggleWishlist: (slug: string) => void }
const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<string[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const addCart = (slug: string) => { setCart((items) => [...items, slug]); toast('Added to your mock bag') }
  const toggleWishlist = (slug: string) => setWishlist((items) => items.includes(slug) ? items.filter((item) => item !== slug) : [...items, slug])
  return <StoreContext.Provider value={{ cart, wishlist, addCart, toggleWishlist }}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) throw new Error('useStore must be used within StoreProvider')
  return context
}
