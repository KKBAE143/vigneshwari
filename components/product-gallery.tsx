'use client'

import Image from 'next/image'
import { Expand, Play } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/lib/catalog'

export function ProductGallery({ product }: { product: Product }) {
  const images = [product.image, product.altImage, product.image, product.altImage, product.image]
  const [active, setActive] = useState(0)
  return <div className="grid grid-cols-[72px_1fr] gap-3 md:grid-cols-[96px_1fr] md:gap-4">
    <div className="flex flex-col gap-3">{images.map((src, index) => <button key={`${src}-${index}`} onClick={() => setActive(index)} className={`relative aspect-[4/5] overflow-hidden border transition ${active === index ? 'border-accent' : 'border-transparent opacity-80 hover:opacity-100'}`} aria-label={`View image ${index + 1}`}><Image src={src} alt="" fill className={`object-cover ${index > 1 ? 'scale-125' : ''}`} sizes="96px" />{index === 4 && <span className="absolute inset-0 grid place-items-center bg-primary/25 text-primary-foreground"><Play className="size-6" /></span>}</button>)}</div>
    <div className="relative aspect-[4/5] overflow-hidden bg-muted"><Image src={images[active]} alt={`${product.name}, view ${active + 1}`} fill priority className={`object-cover transition duration-500 ${active > 1 ? 'scale-110' : ''}`} sizes="(max-width: 1024px) 80vw, 42vw" /><button className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full bg-card shadow-lg" aria-label="Expand product image"><Expand className="size-5" /></button></div>
  </div>
}
