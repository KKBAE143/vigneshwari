import Image from 'next/image'
import { Heart } from 'lucide-react'
import type { Product } from '@/lib/catalog'

const WeddingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="size-8 text-primary">
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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="size-8 text-primary">
    <path d="M12 3c0 0-2.5 3-2.5 5.5s1.125 4 2.5 4 2.5-1.5 2.5-4S12 3 12 3Z" fill="currentColor" fillOpacity={0.2} />
    <path d="M5 14.5c0 4 3 5 8 5s8-1 8-5H5Z" />
    <path d="M12 19.5v2" />
    <path d="M9 21.5h6" />
  </svg>
)

const PartyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="size-8 text-primary">
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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="size-8 text-primary">
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

export function ProductEditorial({ product }: { product: Product }) {
  const views = [
    { label: 'Front view', image: product.image, position: 'center' },
    { label: 'Side view', image: product.altImage, position: 'center' },
    { label: 'Drape detail', image: product.image, position: '70% center' },
  ]

  return (
    <section className="site-container pb-12 md:pb-20" aria-labelledby="editorial-title">
      <div className="border border-accent/60 bg-card p-3 shadow-[0_12px_40px_rgba(0,0,0,.08)] md:p-6 lg:p-8">
        <header className="grid items-end gap-6 border-b border-accent/40 pb-7 lg:grid-cols-[1.25fr_.75fr]">
          <div className="text-center lg:text-left">
            <p className="font-serif text-3xl italic text-primary md:text-5xl">Timeless</p>
            <h2 id="editorial-title" className="text-balance text-5xl uppercase leading-[.8] tracking-[-.03em] text-primary md:text-7xl lg:text-8xl">Elegance</h2>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[.3em] text-accent">Grace in every drape</p>
          </div>
          <p className="mx-auto max-w-md text-pretty text-center text-sm leading-6 text-muted-foreground lg:text-left">{product.story} An heirloom composition designed to move effortlessly between intimate rituals and grand celebrations.</p>
        </header>

        <div className="grid gap-4 pt-5 lg:grid-cols-[1.18fr_.82fr]">
          <div className="flex flex-col gap-5">
            <figure className="relative min-h-[580px] overflow-hidden border border-accent/30 md:min-h-[820px]">
              <Image src={product.image} alt={`${product.name} full drape editorial`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 58vw" />
              <figcaption className="absolute left-5 top-1/2 max-w-36 -translate-y-1/2 bg-primary/90 p-5 font-serif text-lg leading-7 text-primary-foreground md:left-8 md:max-w-44 md:text-2xl">Simplicity is the keynote of true elegance.</figcaption>
            </figure>
            <div className="border-y border-accent/40 py-5 text-center">
              <h3 className="text-lg uppercase tracking-[.12em]">Colour palette</h3>
              <div className="mt-4 flex justify-center gap-4">
                {['bg-primary', 'bg-secondary', 'bg-[#C58B82]', 'bg-[#C9A079]', 'bg-accent'].map((color) => <span key={color} className={`size-11 rounded-full border border-accent/30 ${color}`} />)}
              </div>
            </div>
            <div className="px-3 pb-3">
              <h3 className="text-center text-lg uppercase tracking-[.12em]">Styling notes</h3>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground md:grid-cols-2">
                <li>• Keep makeup soft and luminous.</li><li>• Choose a sleek bun or gentle curls.</li><li>• Add traditional jewellery for ceremony.</li><li>• Let the weave remain the focal point.</li>
              </ul>
            </div>
          </div>

          <aside className="border-l-0 border-accent/30 lg:border-l lg:pl-5">
            <EditorialTitle>The look</EditorialTitle>
            <div className="grid grid-cols-3 gap-2">{views.map((view) => <figure key={view.label}><div className="relative aspect-[3/5] overflow-hidden"><Image src={view.image} alt={`${product.name} ${view.label}`} fill className="object-cover" style={{ objectPosition: view.position }} sizes="20vw" /></div><figcaption className="mt-2 text-center text-[10px] font-semibold uppercase tracking-wider">{view.label}</figcaption></figure>)}</div>

            <EditorialTitle>Fabric & details</EditorialTitle>
            <div className="grid grid-cols-3 gap-3">{[
              { label: 'Premium soft silk', image: product.image, pos: '20% 70%' },
              { label: 'Rich zari weaving', image: product.image, pos: '75% 75%' },
              { label: 'Delicate motifs', image: product.altImage, pos: 'center' },
            ].map((detail) => <figure key={detail.label} className="text-center"><div className="relative mx-auto aspect-square overflow-hidden rounded-full border border-accent/40"><Image src={detail.image} alt={detail.label} fill className="scale-[2.2] object-cover" style={{ objectPosition: detail.pos }} sizes="12vw" /></div><figcaption className="mt-2 text-[10px] font-semibold uppercase leading-4">{detail.label}</figcaption></figure>)}</div>

            <EditorialTitle>Saree details</EditorialTitle>
            <dl className="grid grid-cols-[90px_1fr] gap-x-3 gap-y-2 text-xs leading-5"><dt className="font-semibold uppercase">Fabric</dt><dd>{product.fabric}</dd><dt className="font-semibold uppercase">Work</dt><dd>Handwoven zari</dd><dt className="font-semibold uppercase">Pattern</dt><dd>Heritage motifs</dd><dt className="font-semibold uppercase">Occasion</dt><dd>{product.occasion}, festive, traditional</dd><dt className="font-semibold uppercase">Care</dt><dd>Dry clean only</dd></dl>

            <EditorialTitle>Perfect for</EditorialTitle>
            <div className="grid grid-cols-4 gap-2">
              {detailIcons.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3 text-center">
                  <Icon />
                  <span className="text-[10px] font-semibold uppercase tracking-wider leading-relaxed text-primary">
                    {label.split(' ').map((word, idx) => (
                      <span key={idx} className="block">{word}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <EditorialTitle>Style it with</EditorialTitle>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Statement Earrings', image: '/images/style-necklace.png' },
                { label: 'Golden Bangles', image: '/images/style-bangles.png' },
                { label: 'Embellished Clutch', image: '/images/style-clutch.png' },
              ].map(({ label, image }) => (
                <div key={label} className="flex flex-col items-center gap-3 text-center">
                  <div className="relative aspect-square w-full overflow-hidden rounded-full border border-accent/40 bg-muted">
                    <Image
                      src={image}
                      alt={label}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="100px"
                    />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider leading-relaxed text-primary">
                    {label.split(' ').map((word, idx) => (
                      <span key={idx} className="block">{word}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative mt-8 overflow-hidden rounded-sm border border-accent/30 bg-background/50 px-6 py-10 text-center shadow-sm">
              <div className="absolute right-0 bottom-0 top-0 w-[45%] pointer-events-none opacity-40 mix-blend-multiply">
                <Image
                  src="/images/detail-floral-motif.png"
                  alt=""
                  fill
                  className="object-contain object-right-bottom scale-110 origin-bottom-right"
                  sizes="200px"
                />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span className="font-serif text-3xl italic text-primary leading-tight tracking-wide block">be your own</span>
                <span className="font-serif text-3xl italic text-primary leading-tight tracking-wide block mt-1">kind of</span>
                <span className="font-serif text-4xl italic text-primary leading-tight tracking-wide block mt-2">beautiful</span>
                <div className="mt-4 flex justify-center text-primary">
                  <Heart className="size-3 fill-primary text-primary" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function EditorialTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 flex items-center justify-center gap-4">
      <div className="flex flex-1 items-center gap-2">
        <span className="h-[0.5px] flex-1 bg-accent/40" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-2 text-accent">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
        </svg>
      </div>
      <h3 className="text-center font-serif text-sm uppercase tracking-[0.25em] text-primary">{children}</h3>
      <div className="flex flex-1 items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-2 text-accent">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
        </svg>
        <span className="h-[0.5px] flex-1 bg-accent/40" />
      </div>
    </div>
  )
}
