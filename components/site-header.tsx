'use client'

import Link from 'next/link'
import { ChevronDown, CircleUserRound, Heart, Menu, Search, ShoppingBag, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useStore } from '@/components/store-provider'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const women = ['Sarees', 'Wedding', 'Silk', 'Cotton', 'Linen', 'Banarasi', 'Kanjivaram', 'Pochampally', 'Organza', 'Festive']

function Wordmark({ compact = false }: { compact?: boolean }) {
  return <Link href="/" aria-label="Vigneshwari home" className="group flex flex-col items-center text-primary">
    <span className="flex items-center font-serif leading-none tracking-[.03em]">
      <span className={compact ? 'text-2xl' : 'text-3xl md:text-5xl'}>VIGNESH</span>
      <span className={`relative mx-1 grid place-items-center rounded-full border border-accent/60 ${compact ? 'size-8' : 'size-11 md:size-14'}`}>
        <Sparkles className="text-accent" aria-hidden="true" />
        <span className={`absolute font-serif ${compact ? 'text-xl' : 'text-2xl md:text-4xl'}`}>W</span>
      </span>
      <span className={compact ? 'text-2xl' : 'text-3xl md:text-5xl'}>ARI</span>
    </span>
    {!compact && <span className="mt-2 text-[9px] font-semibold uppercase tracking-[.42em] text-accent">Sarees &amp; Heirlooms</span>}
  </Link>
}

export function SiteHeader() {
  const { cart, wishlist } = useStore()
  const [mega, setMega] = useState(false)

  return <header className="sticky top-0 z-50 bg-background shadow-[0_4px_20px_rgba(42,24,21,.08)]">
    <div className="border-b border-accent/20 bg-primary text-primary-foreground">
      <div className="site-container flex h-9 items-center justify-between text-[10px] font-semibold uppercase tracking-[.2em]">
        <span className="hidden md:block">Crafted slowly. Cherished forever.</span>
        <span>Complimentary shipping above ₹5,000</span>
        <div className="hidden items-center gap-4 md:flex"><Link href="/contact">Client care</Link><span>India / INR</span></div>
      </div>
    </div>

    <div className="site-container grid h-24 grid-cols-[1fr_auto_1fr] items-center md:h-32">
      <div className="flex items-center gap-1">
        <Sheet>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu" />}><Menu /></SheetTrigger>
          <SheetContent side="left" className="bg-background">
            <SheetHeader><SheetTitle><Wordmark compact /></SheetTitle></SheetHeader>
            <nav className="flex flex-col gap-5 p-6 text-lg">{['Women', 'Collections', 'New Arrivals', 'Bridal', 'Our Story', 'Contact'].map((item) => <Link key={item} href={item === 'Our Story' ? '/about' : item === 'Contact' ? '/contact' : item === 'New Arrivals' ? '/products' : item === 'Bridal' ? '/collections/bridal' : '/collections'}>{item}</Link>)}</nav>
          </SheetContent>
        </Sheet>
        <Button variant="ghost" size="icon" nativeButton={false} render={<Link href="/search" aria-label="Search" />}><Search /></Button>
      </div>
      <Wordmark />
      <div className="flex items-center justify-end gap-0 md:gap-1">
        <Button variant="ghost" size="icon" className="hidden md:inline-flex" nativeButton={false} render={<Link href="/contact" aria-label="Account and client care" />}><CircleUserRound /></Button>
        <Button variant="ghost" size="icon" nativeButton={false} render={<Link href="/wishlist" aria-label={`Wishlist with ${wishlist.length} items`} />}><Heart /></Button>
        <Button variant="ghost" size="icon" className="relative" nativeButton={false} render={<Link href="/cart" aria-label={`Bag with ${cart.length} items`} />}><ShoppingBag />{cart.length > 0 && <span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-accent text-[9px] text-accent-foreground">{cart.length}</span>}</Button>
      </div>
    </div>

    <div className="bg-primary px-4 pb-3 lg:px-12">
      <nav className="relative mx-auto hidden h-14 max-w-[1320px] items-stretch justify-center border border-accent/70 text-[11px] font-semibold uppercase tracking-[.2em] text-primary-foreground lg:flex" onMouseLeave={() => setMega(false)}>
        <Link className="flex min-w-32 items-center justify-center border-r border-accent/30 px-6 transition-colors hover:bg-secondary" href="/">Home</Link>
        <button className="flex min-w-36 items-center justify-center gap-2 border-r border-accent/30 px-6 transition-colors hover:bg-secondary" onMouseEnter={() => setMega(true)} onFocus={() => setMega(true)} aria-expanded={mega}>Sarees <ChevronDown /></button>
        <Link className="flex min-w-36 items-center justify-center border-r border-accent/30 px-6 transition-colors hover:bg-secondary" href="/collections">Collections</Link>
        <Link className="flex min-w-40 items-center justify-center border-r border-accent/30 px-6 transition-colors hover:bg-secondary" href="/products">New Arrivals</Link>
        <Link className="flex min-w-32 items-center justify-center border-r border-accent/30 px-6 transition-colors hover:bg-secondary" href="/collections/bridal">Bridal</Link>
        <Link className="flex min-w-36 items-center justify-center border-r border-accent/30 px-6 transition-colors hover:bg-secondary" href="/about">Our Story</Link>
        <Link className="flex min-w-32 items-center justify-center px-6 transition-colors hover:bg-secondary" href="/contact">Contact</Link>

        {mega && <div className="absolute inset-x-0 top-full border border-accent/40 bg-card p-10 text-foreground shadow-[0_18px_40px_rgba(42,24,21,.16)]" onMouseEnter={() => setMega(true)}>
          <div className="grid grid-cols-4 gap-10">
            <div><p className="mb-5 font-serif text-2xl normal-case tracking-normal text-primary">Shop Sarees</p><div className="grid grid-cols-2 gap-3 text-[11px]">{women.map((item) => <Link className="hover:text-accent" href={`/products?category=${item}`} key={item}>{item}</Link>)}</div></div>
            <div><p className="mb-5 font-serif text-2xl normal-case tracking-normal text-primary">Collections</p><div className="flex flex-col gap-3"><Link href="/collections/bridal">Bridal</Link><Link href="/collections/new-arrivals">New Arrivals</Link><Link href="/collections/heritage-silks">Heritage Silks</Link></div></div>
            <div><p className="mb-5 font-serif text-2xl normal-case tracking-normal text-primary">Accessories</p><div className="flex flex-col gap-3"><Link href="/products">Blouses</Link><Link href="/products">Jewellery</Link><Link href="/products">Gift Cards</Link></div></div>
            <div className="border border-accent/30 bg-primary p-6 text-primary-foreground"><p className="font-serif text-3xl normal-case tracking-normal">The Bridal Edit</p><p className="mt-3 text-xs font-normal leading-relaxed tracking-normal">Ceremonial silks, woven for stories that begin forever.</p><Link href="/collections/bridal" className="mt-6 inline-block border-b border-accent pb-1 text-[10px]">Explore the edit</Link></div>
          </div>
        </div>}
      </nav>
    </div>
  </header>
}
