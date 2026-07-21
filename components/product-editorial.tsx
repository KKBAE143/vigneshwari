import Image from 'next/image'
import { Flower2, Gem, Heart, LampDesk, PartyPopper, Sparkles } from 'lucide-react'
import type { Product } from '@/lib/catalog'

const detailIcons = [
  { icon: Heart, label: 'Weddings' },
  { icon: LampDesk, label: 'Festivals' },
  { icon: PartyPopper, label: 'Celebrations' },
  { icon: Flower2, label: 'Tradition' },
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
            <div className="grid grid-cols-4 gap-2">{detailIcons.map(({ icon: Icon, label }) => <div key={label} className="flex flex-col items-center gap-2 text-center"><Icon className="size-7 text-primary" strokeWidth={1.25} /><span className="text-[9px] font-semibold uppercase">{label}</span></div>)}</div>

            <EditorialTitle>Style it with</EditorialTitle>
            <div className="grid grid-cols-3 gap-3">{['Statement earrings', 'Golden bangles', 'Embellished clutch'].map((label, index) => <div key={label} className="flex flex-col items-center gap-2 text-center"><div className="grid aspect-square w-full place-items-center rounded-full border border-accent/40 bg-muted">{index === 0 ? <Gem className="size-9 text-primary" /> : <Sparkles className="size-9 text-primary" />}</div><span className="text-[9px] font-semibold uppercase leading-4">{label}</span></div>)}</div>

            <blockquote className="mt-8 border border-accent/40 bg-background p-8 text-center font-serif text-3xl italic leading-tight text-primary">Be your own kind of beautiful</blockquote>
          </aside>
        </div>
      </div>
    </section>
  )
}

function EditorialTitle({ children }: { children: React.ReactNode }) {
  return <div className="my-6 flex items-center gap-3"><span className="h-px flex-1 bg-accent/50" /><h3 className="text-center text-base uppercase tracking-[.12em]">{children}</h3><span className="h-px flex-1 bg-accent/50" /></div>
}
