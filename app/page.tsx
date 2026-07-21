import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Gem, HandHeart, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { collections, products } from '@/lib/catalog'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) { return <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center"><p className="text-xs font-semibold uppercase tracking-[.28em] text-primary">{eyebrow}</p><h2 className="text-balance text-4xl md:text-6xl">{title}</h2>{copy && <p className="text-pretty leading-relaxed text-muted-foreground">{copy}</p>}</div> }

export default function HomePage() {
  return <>
    <section className="relative min-h-[calc(92vh-10rem)] overflow-hidden bg-primary text-primary-foreground">
      <Image src="/images/vigneshwari-hero.png" alt="Four women wearing VIGNESHWARI heritage sarees" fill priority className="object-cover object-center opacity-90" sizes="100vw" />
      <div className="absolute inset-0 bg-primary/20" />
      <div className="site-container relative flex min-h-[calc(92vh-10rem)] flex-col items-center justify-end pb-14 text-center md:pb-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.32em]">The Heirloom Chapter</p><h1 className="max-w-4xl text-balance text-5xl leading-none md:text-7xl lg:text-8xl">Woven for the stories you will carry</h1><Button variant="secondary" className="mt-8" nativeButton={false} render={<Link href="/collections" />}>Explore the collection <ArrowRight data-icon="inline-end" /></Button>
      </div>
    </section>

    <Reveal className="section-space site-container"><SectionTitle eyebrow="Celebrate every occasion" title="Find your expression" /><div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">{['Banarasi','Kanjivaram','Organza','Wedding','Festive','Linen'].map((item, index) => <Link key={item} href={`/products?fabric=${item}`} className="group flex flex-col items-center gap-4 text-center"><div className="relative aspect-square w-full overflow-hidden rounded-full border border-border"><Image src={products[index].image} alt={item} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="200px" /></div><span className="font-serif text-xl">{item}</span></Link>)}</div></Reveal>

    <section className="section-space bg-card"><div className="site-container"><SectionTitle eyebrow="Curated stories" title="Shop by collection" /><div className="grid gap-5 md:grid-cols-3">{collections.map((collection) => <Link href={`/collections/${collection.slug}`} key={collection.slug} className="group relative aspect-[4/5] overflow-hidden"><Image src={collection.image} alt={collection.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" /><div className="absolute inset-0 bg-primary/25" /><div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground"><p className="font-serif text-4xl">{collection.title}</p><p className="mt-2 text-sm">{collection.subtitle}</p></div></Link>)}</div></div></section>

    <Reveal className="section-space site-container"><SectionTitle eyebrow="Just arrived" title="New heirlooms" copy="Expressions of enduring craft, designed for the woman of today." /><div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-7">{products.slice(0,4).map((product) => <ProductCard key={product.slug} product={product} />)}</div><div className="mt-12 flex justify-center"><Button variant="outline" nativeButton={false} render={<Link href="/products" />}>View all sarees <ArrowRight data-icon="inline-end" /></Button></div></Reveal>

    <section className="grid bg-primary text-primary-foreground lg:grid-cols-2"><div className="relative min-h-[600px]"><Image src="/images/bridal-editorial.png" alt="VIGNESHWARI bridal saree editorial" fill className="object-cover" sizes="50vw" /></div><div className="flex items-center px-6 py-16 md:px-16 lg:px-24"><Reveal className="flex max-w-xl flex-col items-start gap-6"><p className="text-xs font-semibold uppercase tracking-[.3em] text-accent">The bridal heirloom</p><h2 className="text-balance text-5xl md:text-7xl">A promise, woven in gold</h2><p className="leading-relaxed text-primary-foreground/80">Created with master weavers and rooted in ceremonial traditions, each bridal drape carries hundreds of hours of craft—and the quiet dignity of something meant to outlive a moment.</p><Button variant="secondary" nativeButton={false} render={<Link href="/collections/bridal" />}>Discover bridal <ArrowRight data-icon="inline-end" /></Button></Reveal></div></section>

    <Reveal className="section-space site-container"><SectionTitle eyebrow="The VIGNESHWARI promise" title="Crafted with conscience" /><div className="grid gap-8 md:grid-cols-4">{[[Gem,'Authentic craft','Directly sourced from weaving communities.'],[HandHeart,'Made with care','Considered details and impeccable finishing.'],[ShieldCheck,'Quality assured','Every drape is inspected by hand.'],[Sparkles,'Heirloom service','Thoughtful guidance before and after purchase.']].map(([Icon,title,copy]) => { const I = Icon as typeof Gem; return <div className="flex flex-col items-center gap-4 border-t border-border pt-7 text-center" key={title as string}><I className="size-6 text-accent" /><h3 className="text-2xl">{title as string}</h3><p className="text-sm leading-relaxed text-muted-foreground">{copy as string}</p></div> })}</div></Reveal>

    <section className="section-space bg-card"><div className="site-container"><SectionTitle eyebrow="Words from our patrons" title="Loved, worn, remembered" /><div className="grid gap-5 md:grid-cols-3">{['The Banarasi felt like it had always belonged in our family. Every detail was exquisite.','Beautifully packed, thoughtfully guided, and even more luminous in person.','The drape, the fall, the quiet gold—this is a saree I will return to for years.'].map((quote,index) => <blockquote key={quote} className="border border-border bg-background p-8"><div className="mb-5 flex gap-1 text-accent">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 fill-current" />)}</div><p className="font-serif text-2xl leading-relaxed">“{quote}”</p><footer className="mt-6 text-xs font-semibold uppercase tracking-widest">VIGNESHWARI Patron {index+1}</footer></blockquote>)}</div></div></section>
  </>
}
