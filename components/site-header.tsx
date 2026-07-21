'use client'

import Link from 'next/link'
import { ChevronDown, CircleUserRound, Heart, Menu, Search, ShoppingBag, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useStore } from '@/components/store-provider'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const women = ['Sarees', 'Wedding', 'Silk', 'Cotton', 'Linen', 'Banarasi', 'Kanjivaram', 'Pochampally', 'Organza', 'Festive']

function Wordmark({ compact = false, scrolled = false }: { compact?: boolean; scrolled?: boolean }) {
  const isSmall = compact || scrolled
  return (
    <Link href="/" aria-label="Vigneshwari home" className="group flex flex-col items-center text-primary transition-all duration-300">
      <span className="flex items-center font-serif leading-none tracking-[.03em]">
        <span className={isSmall ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'}>VIGNESH</span>
        <span className={`relative mx-1 grid place-items-center rounded-full border border-accent/60 transition-all duration-300 ${isSmall ? 'size-7 md:size-8' : 'size-8 md:size-10'}`}>
          <Sparkles className={`text-accent transition-all duration-300 ${isSmall ? 'size-3' : 'size-3.5 md:size-4'}`} aria-hidden="true" />
          <span className={`absolute font-serif ${isSmall ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}>W</span>
        </span>
        <span className={isSmall ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'}>ARI</span>
      </span>
      {!isSmall && (
        <span className="mt-1 text-[8px] font-semibold uppercase tracking-[.4em] text-accent transition-opacity duration-300">
          Sarees &amp; Heirlooms
        </span>
      )}
    </Link>
  )
}

export function SiteHeader() {
  const { cart, wishlist } = useStore()
  const [mega, setMega] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background shadow-[0_4px_20px_rgba(42,24,21,.08)] transition-all duration-300">
      {/* Top Announcement Bar */}
      <div
        className={`border-b border-accent/20 bg-primary text-primary-foreground transition-all duration-300 ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0 py-0 border-none' : 'max-h-10 py-1 opacity-100'
        }`}
      >
        <div className="site-container flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.2em]">
          <span className="hidden md:block">Crafted slowly. Cherished forever.</span>
          <span>Complimentary shipping above ₹5,000</span>
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/contact">Client care</Link>
            <span>India / INR</span>
          </div>
        </div>
      </div>

      {/* Main Logo Row */}
      <div
        className={`site-container grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 ${
          scrolled ? 'h-11 md:h-13' : 'h-14 md:h-18'
        }`}
      >
        <div className="flex items-center gap-1">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu" />}>
              <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="bg-background">
              <SheetHeader>
                <SheetTitle>
                  <Wordmark compact />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-5 p-6 text-lg">
                {['Women', 'Collections', 'New Arrivals', 'Bridal', 'Our Story', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={
                      item === 'Our Story'
                        ? '/about'
                        : item === 'Contact'
                        ? '/contact'
                        : item === 'New Arrivals'
                        ? '/products'
                        : item === 'Bridal'
                        ? '/collections/bridal'
                        : '/collections'
                    }
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Button variant="ghost" size="icon" nativeButton={false} render={<Link href="/search" aria-label="Search" />}>
            <Search />
          </Button>
        </div>

        <Wordmark scrolled={scrolled} />

        <div className="flex items-center justify-end gap-0 md:gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex"
            nativeButton={false}
            render={<Link href="/contact" aria-label="Account and client care" />}
          >
            <CircleUserRound />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            nativeButton={false}
            render={<Link href="/wishlist" aria-label={`Wishlist with ${wishlist.length} items`} />}
          >
            <Heart />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            nativeButton={false}
            render={<Link href="/cart" aria-label={`Bag with ${cart.length} items`} />}
          >
            <ShoppingBag />
            {cart.length > 0 && (
              <span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-accent text-[9px] text-accent-foreground">
                {cart.length}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-primary px-4 lg:px-12">
        <nav
          className={`relative mx-auto hidden max-w-[1320px] items-stretch justify-center border-x border-accent/40 text-[10px] font-semibold uppercase tracking-[.18em] text-primary-foreground transition-all duration-300 lg:flex ${
            scrolled ? 'h-9' : 'h-10'
          }`}
          onMouseLeave={() => setMega(false)}
        >
          <Link
            className="flex min-w-28 items-center justify-center border-r border-accent/30 px-5 transition-colors hover:bg-secondary"
            href="/"
          >
            Home
          </Link>
          <button
            className="flex min-w-32 items-center justify-center gap-1.5 border-r border-accent/30 px-5 transition-colors hover:bg-secondary"
            onMouseEnter={() => setMega(true)}
            onFocus={() => setMega(true)}
            aria-expanded={mega}
          >
            Sarees <ChevronDown className="size-3.5" />
          </button>
          <Link
            className="flex min-w-32 items-center justify-center border-r border-accent/30 px-5 transition-colors hover:bg-secondary"
            href="/collections"
          >
            Collections
          </Link>
          <Link
            className="flex min-w-36 items-center justify-center border-r border-accent/30 px-5 transition-colors hover:bg-secondary"
            href="/products"
          >
            New Arrivals
          </Link>
          <Link
            className="flex min-w-28 items-center justify-center border-r border-accent/30 px-5 transition-colors hover:bg-secondary"
            href="/collections/bridal"
          >
            Bridal
          </Link>
          <Link
            className="flex min-w-32 items-center justify-center border-r border-accent/30 px-5 transition-colors hover:bg-secondary"
            href="/about"
          >
            Our Story
          </Link>
          <Link
            className="flex min-w-28 items-center justify-center px-5 transition-colors hover:bg-secondary"
            href="/contact"
          >
            Contact
          </Link>

          {mega && (
            <div
              className="absolute inset-x-0 top-full border border-accent/40 bg-card p-8 text-foreground shadow-[0_18px_40px_rgba(42,24,21,.16)]"
              onMouseEnter={() => setMega(true)}
            >
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <p className="mb-4 font-serif text-xl normal-case tracking-normal text-primary">Shop Sarees</p>
                  <div className="grid grid-cols-2 gap-2.5 text-[11px]">
                    {women.map((item) => (
                      <Link className="hover:text-accent" href={`/products?category=${item}`} key={item}>
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-4 font-serif text-xl normal-case tracking-normal text-primary">Collections</p>
                  <div className="flex flex-col gap-2.5 text-xs">
                    <Link href="/collections/bridal" className="hover:text-accent">Bridal</Link>
                    <Link href="/collections/new-arrivals" className="hover:text-accent">New Arrivals</Link>
                    <Link href="/collections/heritage-silks" className="hover:text-accent">Heritage Silks</Link>
                  </div>
                </div>
                <div>
                  <p className="mb-4 font-serif text-xl normal-case tracking-normal text-primary">Accessories</p>
                  <div className="flex flex-col gap-2.5 text-xs">
                    <Link href="/products" className="hover:text-accent">Blouses</Link>
                    <Link href="/products" className="hover:text-accent">Jewellery</Link>
                    <Link href="/products" className="hover:text-accent">Gift Cards</Link>
                  </div>
                </div>
                <div className="border border-accent/30 bg-primary p-5 text-primary-foreground">
                  <p className="font-serif text-2xl normal-case tracking-normal">The Bridal Edit</p>
                  <p className="mt-2 text-xs font-normal leading-relaxed tracking-normal">
                    Ceremonial silks, woven for stories that begin forever.
                  </p>
                  <Link href="/collections/bridal" className="mt-4 inline-block border-b border-accent pb-0.5 text-[10px]">
                    Explore the edit
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
