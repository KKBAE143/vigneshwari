'use client'

import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { products } from '@/lib/catalog'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const filters = ['Price','Color','Fabric','Occasion','Work','Discount','Availability','Rating']
function Filters() { return <div className="flex flex-col gap-6">{filters.map((filter) => <fieldset className="border-b border-border pb-5" key={filter}><legend className="mb-3 font-serif text-xl">{filter}</legend><div className="flex flex-col gap-2">{['All','Featured','New'].map((option) => <label className="flex items-center gap-2 text-sm" key={option}><input type="checkbox" className="accent-primary" />{option}</label>)}</div></fieldset>)}</div> }

export function CatalogBrowser({ title = 'The Saree Collection' }: { title?: string }) {
  const [sort, setSort] = useState('Featured')
  const items = useMemo(() => sort === 'Price: Low to High' ? [...products].sort((a,b)=>a.price-b.price) : products, [sort])
  return <div className="site-container section-space"><div className="mb-12 flex flex-col gap-4 text-center"><p className="text-xs font-semibold uppercase tracking-[.28em] text-primary">VIGNESHWARI EDIT</p><h1 className="text-5xl md:text-7xl">{title}</h1><p className="mx-auto max-w-2xl text-muted-foreground">Discover ceremonial silks, effortless linens, and storied weaves curated for every chapter.</p></div>
    <div className="mb-8 flex items-center justify-between border-y border-border py-4"><span className="text-sm">{items.length} heirlooms</span><div className="flex items-center gap-3"><Sheet><SheetTrigger render={<Button variant="outline" className="lg:hidden" />}><SlidersHorizontal data-icon="inline-start" /> Filters</SheetTrigger><SheetContent side="left"><SheetHeader><SheetTitle>Refine</SheetTitle></SheetHeader><div className="overflow-y-auto p-6"><Filters /></div></SheetContent></Sheet><label className="text-sm">Sort <select className="ml-2 bg-transparent p-2" value={sort} onChange={(e)=>setSort(e.target.value)}><option>Featured</option><option>Newest</option><option>Popularity</option><option>Price: Low to High</option></select></label></div></div>
    <div className="grid gap-10 lg:grid-cols-[220px_1fr]"><aside className="hidden lg:block"><Filters /></aside><div className="grid grid-cols-2 gap-x-4 gap-y-12 xl:grid-cols-3 xl:gap-7">{items.map((product)=><ProductCard key={product.slug} product={product} />)}</div></div>
  </div>
}
