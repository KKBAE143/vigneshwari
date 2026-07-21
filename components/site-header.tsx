'use client'

import Link from 'next/link'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { useStore } from '@/components/store-provider'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const women = ['Sarees','Wedding','Silk','Cotton','Linen','Banarasi','Kanjivaram','Pochampally','Organza','Festive']

export function SiteHeader() {
  const { cart, wishlist } = useStore()
  const [mega, setMega] = useState(false)
  return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md">
    <div className="bg-primary px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[.2em] text-primary-foreground">Complimentary shipping across India on orders above ₹5,000</div>
    <div className="site-container flex h-20 items-center justify-between border-b border-border lg:h-24">
      <Sheet><SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu" />}><Menu /></SheetTrigger><SheetContent side="left" className="bg-background"><SheetHeader><SheetTitle className="font-serif text-2xl">VIGNESHWARI</SheetTitle></SheetHeader><nav className="flex flex-col gap-5 p-6 text-lg">{['Women','Collections','Accessories','About','Contact'].map((item) => <Link key={item} href={item === 'About' ? '/about' : item === 'Contact' ? '/contact' : '/collections'}>{item}</Link>)}</nav></SheetContent></Sheet>
      <div className="hidden items-center gap-5 lg:flex"><Button variant="ghost" size="icon" nativeButton={false} render={<Link href="/search" aria-label="Search" />}><Search /></Button><span className="text-xs uppercase tracking-[.18em]">India / INR</span></div>
      <Link href="/" className="font-serif text-3xl tracking-[.08em] text-primary md:text-4xl">VIGNESHWARI</Link>
      <div className="flex items-center gap-1"><Button variant="ghost" size="icon" nativeButton={false} render={<Link href="/wishlist" aria-label={`Wishlist with ${wishlist.length} items`} />}><Heart /></Button><Button variant="ghost" size="icon" nativeButton={false} render={<Link href="/cart" aria-label={`Bag with ${cart.length} items`} />}><ShoppingBag /></Button></div>
    </div>
    <nav className="site-container relative hidden h-12 items-center justify-center gap-10 border-b border-border text-xs font-semibold uppercase tracking-[.18em] lg:flex">
      <button className="h-full" onMouseEnter={() => setMega(true)} onFocus={() => setMega(true)}>Women</button><Link href="/collections">Collections</Link><Link href="/products">New Arrivals</Link><Link href="/collections/bridal">Bridal</Link><Link href="/about">Our Story</Link>
      {mega && <div className="absolute inset-x-12 top-12 border border-border bg-card p-10 shadow-xl" onMouseLeave={() => setMega(false)}><div className="grid grid-cols-4 gap-10"><div><p className="mb-5 font-serif text-2xl normal-case tracking-normal">Women</p><div className="grid grid-cols-2 gap-3 text-[11px]">{women.map((item) => <Link href={`/products?category=${item}`} key={item}>{item}</Link>)}</div></div><div><p className="mb-5 font-serif text-2xl normal-case tracking-normal">Collections</p><div className="flex flex-col gap-3"><Link href="/collections/bridal">Bridal</Link><Link href="/collections/new-arrivals">New Arrivals</Link><Link href="/collections/heritage-silks">Heritage</Link></div></div><div><p className="mb-5 font-serif text-2xl normal-case tracking-normal">Accessories</p><div className="flex flex-col gap-3"><Link href="/products">Blouses</Link><Link href="/products">Jewellery</Link></div></div><div className="bg-primary p-6 text-primary-foreground"><p className="font-serif text-3xl normal-case tracking-normal">The Bridal Edit</p><p className="mt-3 text-xs font-normal leading-relaxed tracking-normal">Ceremonial silks for stories that begin forever.</p></div></div></div>}
    </nav>
  </header>
}
