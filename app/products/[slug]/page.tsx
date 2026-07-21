import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronRight, Heart, RotateCcw, ShieldCheck, Star, Truck } from 'lucide-react'
import { products, formatPrice } from '@/lib/catalog'
import { ProductActions } from '@/components/product-actions'
import { ProductCard } from '@/components/product-card'
import { ProductGallery } from '@/components/product-gallery'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }))
}

// Custom Traditional Icons
const WeddingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="size-7 text-primary">
    <path d="M4 21h16" />
    <path d="M6 21V11c0-2.5 2-4.5 6-4.5s6 2 6 4.5v10" />
    <path d="M12 6.5V4.5" />
    <path d="M10.5 4.5h3" />
    <path d="M6 11c1.5 1 2.5 1 4 0s2.5-1 4 0 2.5 1 4 0" />
    <path d="M12 11v4" />
    <circle cx="12" cy="16.5" r="1.5" fill="currentColor" />
  </svg>
)

const FestivalsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="size-7 text-primary">
    <path d="M12 3c0 0-2.5 3-2.5 5.5s1.125 4 2.5 4 2.5-1.5 2.5-4S12 3 12 3Z" fill="currentColor" fillOpacity={0.2} />
    <path d="M5 14.5c0 4 3 5 8 5s8-1 8-5H5Z" />
    <path d="M12 19.5v2" />
    <path d="M9 21.5h6" />
  </svg>
)

const PartyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="size-7 text-primary">
    <circle cx="12" cy="4.5" r="1.5" />
    <path d="M11 2h2v1h-2zM9.5 4.5h5" />
    <path d="M6 9.5c1-1 3-2 6-2s5 1 6 2" />
    <path d="M5.5 10.5l.5-1" />
    <path d="M18.5 10.5l-.5-1" />
    <path d="M12 6v6" />
    <path d="M12 12l-4 5.5c-.3.4-.2 1 .2 1.3.5.4 1.2.5 1.8.3L12 18l2.2 1.1c.6.2 1.3.1 1.8-.3.4-.3.5-.9.2-1.3L12 12Z" />
    <path d="M11 20.5v1.5M13 20.5v1.5" />
  </svg>
)

const TraditionalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="size-7 text-primary">
    <path d="M8.5 12.5c0-1.5 1-2.5 3.5-2.5s3.5 1 3.5 2.5c0 2-1 4-3.5 4s-3.5-2-3.5-4Z" />
    <path d="M10 10h4" />
    <path d="M9.5 10.8h5" />
    <path d="M12 6.5c1 0 1.5 1 1.5 2.2H10.5c0-1.2.5-2.2 1.5-2.2Z" fill="currentColor" fillOpacity={0.2} />
    <path d="M12 5V6.5" />
    <path d="M7.5 10c-.5-1.5-1.2-2-2.2-2.5.4.8 1.2 1.5 2.2 2.5Z" fill="currentColor" />
    <path d="M16.5 10c.5-1.5 1.2-2 2.2-2.5-.4.8-1.2 1.5-2.2 2.5Z" fill="currentColor" />
    <path d="M10.5 16.5v2.5h3v-2.5" />
    <path d="M9 19h6" />
    <path d="M7.5 21.5h9" />
  </svg>
)

const detailIcons = [
  { icon: WeddingsIcon, label: 'Weddings' },
  { icon: FestivalsIcon, label: 'Festivals' },
  { icon: PartyIcon, label: 'Party' },
  { icon: TraditionalIcon, label: 'Traditional Events' },
]

function SectionDivider({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex items-center justify-center gap-3">
      <div className="flex flex-1 items-center gap-1.5">
        <span className="h-[0.5px] flex-1 bg-accent/40" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-1.5 text-accent">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
        </svg>
      </div>
      <h3 className="text-center font-serif text-xs uppercase tracking-[0.22em] text-primary font-medium">{children}</h3>
      <div className="flex flex-1 items-center gap-1.5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-1.5 text-accent">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
        </svg>
        <span className="h-[0.5px] flex-1 bg-accent/40" />
      </div>
    </div>
  )
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)
  if (!product) notFound()
  const recommendations = products.filter((item) => item.slug !== slug).slice(0, 4)

  return (
    <main className="bg-background">
      <div className="site-container py-6 md:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="size-3 text-accent" />
          <Link href="/products" className="hover:text-primary transition-colors">Sarees</Link>
          <ChevronRight className="size-3 text-accent" />
          <span className="font-medium text-foreground">{product.name}</span>
        </nav>

        {/* Hero Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.12fr_.88fr] lg:gap-12">
          {/* Left Column: Gallery + Quote Banner */}
          <div className="flex flex-col gap-6">
            <ProductGallery product={product} />

            {/* "be your own kind of beautiful" Quote Banner */}
            <div className="relative overflow-hidden rounded-sm border border-accent/30 bg-card p-6 text-center shadow-sm">
              <div className="absolute right-0 bottom-0 top-0 w-[40%] pointer-events-none opacity-30 mix-blend-multiply">
                <Image
                  src="/images/detail-floral-motif.png"
                  alt=""
                  fill
                  className="object-contain object-right-bottom scale-110 origin-bottom-right"
                  sizes="200px"
                />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span className="font-serif text-2xl italic text-primary leading-tight tracking-wide block">be your own</span>
                <span className="font-serif text-2xl italic text-primary leading-tight tracking-wide block mt-0.5">kind of</span>
                <span className="font-serif text-3xl italic text-primary leading-tight tracking-wide block mt-1">beautiful</span>
                <div className="mt-3 flex justify-center text-primary">
                  <Heart className="size-3 fill-primary text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Specifications, Occasion, Accessories & Purchase Panel */}
          <section className="flex flex-col justify-start">
            {product.isNew && (
              <Badge className="mb-3 w-max rounded-none bg-primary text-primary-foreground uppercase tracking-[.2em] text-[10px] px-3 py-1">
                New Arrival
              </Badge>
            )}

            <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-accent">
              Handwoven Heritage • {product.fabric}
            </p>

            <h1 className="mt-1.5 text-3xl uppercase leading-tight tracking-[.04em] font-serif text-primary md:text-4xl">
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <span className="font-price text-2xl md:text-3xl text-primary font-semibold">
                  {formatPrice(product.price)}
                </span>
                {product.comparePrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.comparePrice)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-card border border-accent/30 px-3 py-1.5 rounded-full">
                <Star className="size-3.5 fill-accent text-accent" />
                <span className="font-semibold text-primary">{product.rating}</span>
                <span>(38 reviews)</span>
              </div>
            </div>

            <p className="mt-1 text-[11px] text-muted-foreground">
              Inclusive of all taxes. Free express shipping across India.
            </p>

            {/* Story / Description */}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground border-l-2 border-accent/60 pl-3.5 italic">
              “{product.story}”
            </p>

            {/* Comprehensive Saree Details Grid */}
            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-y border-accent/30 py-4 text-xs">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Fabric</dt>
                <dd className="font-medium text-primary">{product.fabric}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Work</dt>
                <dd className="font-medium text-primary">Handwoven Zari</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Pattern</dt>
                <dd className="font-medium text-primary">Heritage Motifs</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Occasion</dt>
                <dd className="font-medium text-primary">{product.occasion}, Festive</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Includes</dt>
                <dd className="font-medium text-primary">5.5m + Unstitched Blouse</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Origin</dt>
                <dd className="font-medium text-primary">Certified Indian Handloom</dd>
              </div>
            </dl>

            {/* Color Swatch & Palette */}
            <div className="mt-4 flex items-center justify-between border-b border-accent/20 pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-primary">
                  Shade: <span className="font-normal text-muted-foreground">{product.color}</span>
                </p>
                <div className="mt-1.5 flex gap-2">
                  <button
                    className="grid size-8 place-items-center rounded-full border-2 border-primary bg-primary text-[10px] text-primary-foreground shadow-sm"
                    aria-label={product.color}
                  >
                    ✓
                  </button>
                  <button
                    className="size-8 rounded-full border border-accent/40 bg-accent/40 hover:scale-105 transition"
                    aria-label="Gold Accent"
                  />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-primary text-right">
                  Palette Harmony
                </p>
                <div className="mt-1.5 flex gap-1.5">
                  {['bg-primary', 'bg-secondary', 'bg-[#C58B82]', 'bg-[#C9A079]', 'bg-accent'].map((color) => (
                    <span key={color} className={`size-5 rounded-full border border-accent/30 ${color}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* PERFECT FOR Section */}
            <SectionDivider>Perfect For</SectionDivider>
            <div className="grid grid-cols-4 gap-2">
              {detailIcons.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon />
                  <span className="text-[9px] font-semibold uppercase tracking-wider leading-tight text-primary">
                    {label.split(' ').map((word, idx) => (
                      <span key={idx} className="block">{word}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            {/* STYLE IT WITH Section */}
            <SectionDivider>Style It With</SectionDivider>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Statement Earrings', image: '/images/style-necklace.png' },
                { label: 'Golden Bangles', image: '/images/style-bangles.png' },
                { label: 'Embellished Clutch', image: '/images/style-clutch.png' },
              ].map(({ label, image }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <div className="relative aspect-square w-full overflow-hidden rounded-full border border-accent/40 bg-muted">
                    <Image
                      src={image}
                      alt={label}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="80px"
                    />
                  </div>
                  <span className="text-[9px] font-semibold uppercase tracking-wider leading-tight text-primary">
                    {label.split(' ').map((word, idx) => (
                      <span key={idx} className="block">{word}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            {/* Purchase Actions */}
            <div className="mt-6">
              <ProductActions slug={product.slug} />
            </div>

            {/* Shipping & Assurance Badges */}
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-accent/20 pt-4 text-center text-[10px] font-semibold uppercase tracking-[.1em] text-muted-foreground">
              <span className="flex flex-col items-center gap-1">
                <Truck className="size-4 text-accent" />
                Express Shipping
              </span>
              <span className="flex flex-col items-center gap-1">
                <ShieldCheck className="size-4 text-accent" />
                Handwoven Guarantee
              </span>
              <span className="flex flex-col items-center gap-1">
                <RotateCcw className="size-4 text-accent" />
                7-Day Easy Returns
              </span>
            </div>

            {/* Accordion Specs, Styling & Care */}
            <div className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="styling" className="border-accent/20">
                  <AccordionTrigger className="text-xs uppercase tracking-wider font-semibold text-primary">
                    Styling Notes & Guidance
                  </AccordionTrigger>
                  <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                    <ul className="grid gap-1.5">
                      <li>• Keep makeup soft and luminous to highlight the gold weave.</li>
                      <li>• Pair with a sleek bun or gentle waves adorned with fresh flowers.</li>
                      <li>• Accentuate with antique temple jewellery or kundan statement pieces.</li>
                      <li>• Allow the intricate zari pallu to remain the key focal point.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fabric" className="border-accent/20">
                  <AccordionTrigger className="text-xs uppercase tracking-wider font-semibold text-primary">
                    Fabric & Handloom Craft
                  </AccordionTrigger>
                  <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                    Handcrafted by master weavers using traditional Indian loom techniques. Features 100% pure {product.fabric} embellished with authentic zari motifs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care" className="border-accent/20">
                  <AccordionTrigger className="text-xs uppercase tracking-wider font-semibold text-primary">
                    Care Instructions
                  </AccordionTrigger>
                  <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                    Dry clean only. Store in a cool, dry place wrapped in breathable cotton or muslin cloth. Avoid direct sunlight and air periodically.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping" className="border-accent/20">
                  <AccordionTrigger className="text-xs uppercase tracking-wider font-semibold text-primary">
                    Shipping & Returns
                  </AccordionTrigger>
                  <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                    Complimentary express shipping across India. Delivered in signature Vigneshwari heirloom packaging within 4–6 business days.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </div>

      {/* Recommended Sarees */}
      <section className="site-container section-space border-t border-accent/20">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-primary">Curated for you</p>
          <h2 className="mt-2 text-3xl uppercase tracking-[.08em] font-serif text-primary md:text-4xl">
            You May Also Love
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {recommendations.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </main>
  )
}
