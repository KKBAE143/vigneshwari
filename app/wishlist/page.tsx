'use client'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useStore } from '@/components/store-provider'
import { products } from '@/lib/catalog'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
export default function WishlistPage(){ const {wishlist}=useStore(); const saved=products.filter((p)=>wishlist.includes(p.slug)); return <div className="site-container section-space"><h1 className="mb-12 text-center text-6xl">Your wishlist</h1>{saved.length?<div className="grid grid-cols-2 gap-5 md:grid-cols-4">{saved.map((p)=><ProductCard key={p.slug} product={p}/>)}</div>:<div className="mx-auto flex max-w-lg flex-col items-center gap-5 py-20 text-center"><Heart className="size-10 text-accent"/><h2 className="text-3xl">A place for future heirlooms</h2><p className="text-muted-foreground">Save the drapes you love and return to them anytime during this preview.</p><Button render={<Link href="/products" />}>Explore sarees</Button></div>}</div> }
