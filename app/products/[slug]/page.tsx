import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Gem, PackageCheck, RotateCcw, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { products, formatPrice } from '@/lib/catalog'
import { ProductActions } from '@/components/product-actions'
import { ProductCard } from '@/components/product-card'
import { ProductGallery } from '@/components/product-gallery'
import { ProductEditorial } from '@/components/product-editorial'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })) }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)
  if (!product) notFound()
  const recommendations = products.filter((item) => item.slug !== slug).slice(0, 4)
  return <main>
    <div className="site-container py-7 md:py-10">
      <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-xs text-muted-foreground"><Link href="/">Home</Link><ChevronRight className="size-3" /><Link href="/products">Sarees</Link><ChevronRight className="size-3" /><span className="text-foreground">{product.name}</span></nav>
      <div className="grid gap-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-20">
        <ProductGallery product={product} />
        <section className="lg:pt-1">
          {product.isNew && <Badge className="mb-5 rounded-none uppercase tracking-[.18em]">New arrival</Badge>}
          <h1 className="max-w-xl text-4xl uppercase leading-[1.1] tracking-[.04em] md:text-5xl">{product.name}</h1>
          <div className="my-5 flex items-center gap-3"><Separator className="flex-1" /><Sparkles className="size-5 text-accent" /><Separator className="flex-1" /></div>
          <div className="flex items-end justify-between gap-4"><div className="flex items-baseline gap-3"><span className="font-price text-2xl">{formatPrice(product.price)}</span>{product.comparePrice && <span className="text-sm text-muted-foreground line-through">{formatPrice(product.comparePrice)}</span>}</div><span className="flex items-center gap-1 text-sm"><Star className="size-4 fill-accent text-accent" />{product.rating} · 38 reviews</span></div>
          <p className="mt-2 text-xs text-muted-foreground">Taxes included. Shipping calculated at the next step.</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{product.story} A refined expression of Indian craft, designed for ceremonies and celebrations that call for timeless elegance.</p>
          <ul className="mt-6 flex flex-col gap-3 border-b border-border pb-7 text-sm"><li className="flex gap-3"><Gem className="size-4 text-accent" /><span>Material: 100% {product.fabric}</span></li><li className="flex gap-3"><Sparkles className="size-4 text-accent" /><span>Colour: {product.color} & antique gold</span></li><li className="flex gap-3"><PackageCheck className="size-4 text-accent" /><span>Length: 5.5 metres with blouse piece</span></li><li className="flex gap-3"><ShieldCheck className="size-4 text-accent" /><span>Origin: Handcrafted in India</span></li></ul>
          <div className="mt-6"><p className="mb-3 text-[11px] font-semibold uppercase tracking-[.2em]">Colour</p><div className="flex gap-3"><button className="grid size-11 place-items-center rounded-full border-2 border-primary bg-primary text-primary-foreground" aria-label={product.color}>✓</button><button className="size-11 rounded-full border border-border bg-accent" aria-label="Antique gold" /></div></div>
          <ProductActions slug={product.slug} />
          <div className="mt-7 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center text-[10px] uppercase tracking-[.1em]"><span className="flex flex-col items-center gap-2"><PackageCheck className="size-6 text-accent" />Fast delivery</span><span className="flex flex-col items-center gap-2"><ShieldCheck className="size-6 text-accent" />Secure payment</span><span className="flex flex-col items-center gap-2"><RotateCcw className="size-6 text-accent" />Easy returns</span></div>
        </section>
      </div>
    </div>

    <ProductEditorial product={product} />

    <section className="bg-card py-12 md:py-16"><div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-24"><div className="text-center"><Sparkles className="mx-auto size-7 text-accent" /><h2 className="mt-4 text-2xl uppercase tracking-[.12em]">Product details</h2><p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground">A true work of textile artistry, woven by master craftspeople and finished with traditional motifs in luminous zari. Created for weddings, ceremonies, and treasured occasions.</p></div><Accordion><AccordionItem value="delivery"><AccordionTrigger>Delivery & returns</AccordionTrigger><AccordionContent>Preview content: delivery estimates and returns will connect to the custom commerce backend in Phase 2.</AccordionContent></AccordionItem><AccordionItem value="care"><AccordionTrigger>Care instructions</AccordionTrigger><AccordionContent>Dry clean only. Store in breathable muslin, away from direct sunlight, and air periodically.</AccordionContent></AccordionItem><AccordionItem value="guide"><AccordionTrigger>Saree & fabric guide</AccordionTrigger><AccordionContent>Includes a 5.5 metre saree and matching unstitched blouse piece. Natural variations celebrate the handmade process.</AccordionContent></AccordionItem></Accordion></div></section>

    <section className="site-container section-space"><div className="mb-10 text-center"><p className="text-xs font-semibold uppercase tracking-[.25em] text-primary">Curated for you</p><h2 className="mt-3 text-4xl uppercase tracking-[.08em]">You may also love</h2></div><div className="grid grid-cols-2 gap-5 md:grid-cols-4">{recommendations.map((item) => <ProductCard key={item.slug} product={item} />)}</div></section>
  </main>
}
