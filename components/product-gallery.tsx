'use client'

import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/lib/catalog'

export function ProductGallery({ product }: { product: Product }) {
  const images = product.gallery || [
    product.image,
    product.altImage,
    '/images/detail-zari-border.png',
    '/images/detail-soft-silk.png',
    '/images/detail-floral-motif.png',
  ]
  const [active, setActive] = useState(0)

  const viewLabels = ['Full Drape', 'Editorial View', 'Zari Border', 'Silk Weave', 'Floral Motif']

  return (
    <div className="grid grid-cols-[76px_1fr] gap-3 md:grid-cols-[90px_1fr] md:gap-4 lg:grid-cols-[100px_1fr]">
      {/* Thumbnails list */}
      <div className="flex flex-col gap-3">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            onClick={() => setActive(index)}
            className={`group relative aspect-[4/5] overflow-hidden border transition-all duration-300 ${
              active === index
                ? 'border-accent shadow-sm ring-1 ring-accent/50'
                : 'border-accent/20 opacity-75 hover:opacity-100 hover:border-accent/50'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image src={src} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="100px" />
            {index >= 2 && (
              <span className="absolute bottom-1 right-1 grid size-4 place-items-center rounded-full bg-primary/80 text-[8px] text-primary-foreground">
                <Sparkles className="size-2.5 text-accent" />
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Main Image Stage */}
      <div className="relative aspect-[4/5] overflow-hidden border border-accent/30 bg-card shadow-sm">
        <Image
          src={images[active]}
          alt={`${product.name}, ${viewLabels[active] || 'view'}`}
          fill
          priority={active === 0}
          className="object-cover transition duration-700 ease-out"
          sizes="(max-width: 1024px) 80vw, 45vw"
        />
        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-accent/40 bg-card/90 px-3 py-1.5 backdrop-blur-md shadow-md">
          <Sparkles className="size-3 text-accent" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
            {viewLabels[active] || 'View Detail'}
          </span>
        </div>
      </div>
    </div>
  )
}
