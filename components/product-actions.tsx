'use client'

import { Heart, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { useStore } from '@/components/store-provider'
import { Button } from '@/components/ui/button'

export function ProductActions({ slug }: { slug: string }) {
  const { addCart, toggleWishlist, wishlist } = useStore()
  const [quantity, setQuantity] = useState(1)
  const saved = wishlist.includes(slug)
  return <div className="mt-7 flex flex-col gap-4">
    <div className="flex items-end justify-between gap-6"><div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[.2em]">Quantity</p><div className="flex h-11 items-center border border-border"><button className="grid size-11 place-items-center" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus className="size-4" /></button><span className="grid size-11 place-items-center border-x border-border text-sm">{quantity}</span><button className="grid size-11 place-items-center" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus className="size-4" /></button></div></div><span className="pb-3 text-sm"><span className="mr-2 inline-block size-2 rounded-full bg-green-700" />In stock</span></div>
    <Button size="lg" className="w-full rounded-none uppercase tracking-[.16em]" onClick={() => { for (let i = 0; i < quantity; i++) addCart(slug) }}><ShoppingBag data-icon="inline-start" />Add to bag</Button>
    <Button size="lg" variant="outline" className="w-full rounded-none uppercase tracking-[.16em]" onClick={() => toast('Checkout will be connected in Phase 2.')}>Buy now</Button>
    <button className="flex items-center gap-2 py-2 text-left text-xs font-semibold uppercase tracking-[.12em]" onClick={() => toggleWishlist(slug)}><Heart className="size-5" fill={saved ? 'currentColor' : 'none'} />{saved ? 'Saved to wishlist' : 'Add to wishlist'}</button>
  </div>
}
