'use client'
import { Heart, ShoppingBag } from 'lucide-react'
import { useStore } from '@/components/store-provider'
import { Button } from '@/components/ui/button'
export function ProductActions({slug}:{slug:string}){ const {addCart,toggleWishlist,wishlist}=useStore(); const saved=wishlist.includes(slug); return <div className="mt-8 flex gap-3"><Button size="lg" className="flex-1" onClick={()=>addCart(slug)}><ShoppingBag data-icon="inline-start" />Add to bag</Button><Button size="lg" variant="outline" onClick={()=>toggleWishlist(slug)} aria-label="Toggle wishlist"><Heart fill={saved?'currentColor':'none'} /></Button></div> }
