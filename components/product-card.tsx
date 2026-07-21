'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Eye, Star } from 'lucide-react'
import { Product, formatPrice } from '@/lib/catalog'
import { useStore } from '@/components/store-provider'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ProductCard({ product }: { product: Product }) {
  const { wishlist, toggleWishlist, addCart } = useStore()
  const saved = wishlist.includes(product.slug)
  const discount = product.comparePrice ? Math.round((1 - product.price / product.comparePrice) * 100) : 0
  return <article className="group flex min-w-0 flex-col gap-4 transition-transform duration-500 hover:-translate-y-1">
    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
      <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`} className="relative block size-full">
        <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" sizes="(max-width: 768px) 50vw, 25vw" />
        <Image src={product.altImage} alt="" fill className="object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" sizes="(max-width: 768px) 50vw, 25vw" />
      </Link>
      <div className="absolute left-3 top-3 flex gap-2">{product.isNew && <Badge>New</Badge>}{discount > 0 && <Badge variant="secondary">-{discount}%</Badge>}</div>
      <div className="absolute right-3 top-3 flex flex-col gap-2">
        <Button variant="secondary" size="icon" onClick={() => toggleWishlist(product.slug)} aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}><Heart fill={saved ? 'currentColor' : 'none'} /></Button>
        <Button variant="secondary" size="icon" nativeButton={false} render={<Link href={`/products/${product.slug}`} aria-label="Quick view" />}><Eye /></Button>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[.16em] text-muted-foreground"><span>{product.fabric}</span><span className="flex items-center gap-1"><Star className="size-3 fill-current" />{product.rating}</span></div>
      <Link href={`/products/${product.slug}`} className="font-serif text-xl leading-tight hover:text-primary">{product.name}</Link>
      <div className="flex items-baseline gap-2"><span className="font-price text-lg">{formatPrice(product.price)}</span>{product.comparePrice && <span className="text-sm text-muted-foreground line-through">{formatPrice(product.comparePrice)}</span>}</div>
      <Button className="mt-1 w-full" onClick={() => addCart(product.slug)}>Add to bag</Button>
    </div>
  </article>
}
