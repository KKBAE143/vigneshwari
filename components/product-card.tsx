'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Eye, Star, ShoppingBag, Check } from 'lucide-react'
import { Product, formatPrice } from '@/lib/catalog'
import { useStore } from '@/components/store-provider'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ProductCard({ product }: { product: Product }) {
  const { wishlist, toggleWishlist, addCart } = useStore()
  const [isAdded, setIsAdded] = useState(false)
  const saved = wishlist.includes(product.slug)
  const discount = product.comparePrice ? Math.round((1 - product.price / product.comparePrice) * 100) : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addCart(product.slug)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1800)
  }

  return (
    <article className="group relative flex min-w-0 flex-col gap-3 rounded-2xl border border-border/80 bg-card p-3 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted">
        <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`} className="relative block size-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <Image
            src={product.altImage}
            alt=""
            fill
            className="object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute left-2.5 top-2.5 z-10 flex flex-wrap gap-1.5">
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground font-semibold text-[10px] tracking-wider uppercase px-2.5 py-0.5 shadow-sm border-none">
              New
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-accent text-accent-foreground font-bold text-[11px] tracking-tight px-2 py-0.5 rounded-md shadow-sm border-none">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Top Right Wishlist & Quick View */}
        <div className="absolute right-2.5 top-2.5 z-10 flex flex-col gap-2 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
          <Button
            variant="secondary"
            size="icon"
            className="size-8 rounded-full bg-card/85 text-foreground backdrop-blur-md shadow-md hover:bg-card hover:scale-105 transition-all"
            onClick={() => toggleWishlist(product.slug)}
            aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className="size-4" fill={saved ? 'currentColor' : 'none'} color={saved ? 'var(--primary)' : 'currentColor'} />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="size-8 rounded-full bg-card/85 text-foreground backdrop-blur-md shadow-md hover:bg-card hover:scale-105 transition-all"
            nativeButton={false}
            render={<Link href={`/products/${product.slug}`} aria-label="Quick view" />}
          >
            <Eye className="size-4" />
          </Button>
        </div>

        {/* Floating ADD TO CART Button - Smooth Motion on Hover in VIGNESHWARI Crimson & Gold Schema */}
        <div className="absolute inset-x-2.5 bottom-2.5 z-20 transition-all duration-300 ease-out max-md:opacity-100 max-md:translate-y-0 md:opacity-0 md:translate-y-4 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto">
          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full py-3 px-4 rounded-lg font-sans font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-lg flex items-center justify-center gap-2 active:scale-98 cursor-pointer ${
              isAdded
                ? 'bg-accent text-accent-foreground shadow-accent/20'
                : 'bg-primary text-primary-foreground hover:bg-secondary shadow-primary/30'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="size-4 animate-bounce" />
                <span>ADDED TO BAG</span>
              </>
            ) : (
              <>
                <ShoppingBag className="size-3.5" />
                <span>ADD TO CART</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-1.5 px-1 pt-1">
        <div className="flex items-center justify-between gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <span>{product.fabric}</span>
          <span className="flex items-center gap-1 text-accent font-semibold">
            <Star className="size-3 fill-current" />
            {product.rating}
          </span>
        </div>

        <Link href={`/products/${product.slug}`} className="font-serif text-base font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary line-clamp-1">
          {product.name}
        </Link>

        <div className="flex items-center gap-2.5 pt-0.5">
          {product.comparePrice && (
            <span className="text-sm font-price text-muted-foreground/80 line-through">
              {formatPrice(product.comparePrice)}
            </span>
          )}
          <span className="text-base font-bold font-price text-primary">
            {formatPrice(product.price)}
          </span>
          {discount > 0 && (
            <span className="text-[11px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">
              -{discount}%
            </span>
          )}
        </div>
      </div>
    </article>
  )
}


