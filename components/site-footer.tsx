import Link from 'next/link'
import { Camera, MessageCircle } from 'lucide-react'

export function SiteFooter() {
  return <footer className="mt-20 bg-primary text-primary-foreground">
    <div className="site-container grid gap-12 py-16 md:grid-cols-4">
      <div className="flex flex-col gap-4"><p className="font-serif text-3xl tracking-wider">VIGNESHWARI</p><p className="max-w-xs text-sm leading-relaxed opacity-80">Celebrating India&apos;s living textile traditions through timeless sarees, made to be remembered.</p></div>
      <div className="flex flex-col gap-3 text-sm"><p className="font-semibold uppercase tracking-widest text-accent">Discover</p><Link href="/collections">Collections</Link><Link href="/products">New Arrivals</Link><Link href="/about">Our Story</Link></div>
      <div className="flex flex-col gap-3 text-sm"><p className="font-semibold uppercase tracking-widest text-accent">Care</p><Link href="/contact">Contact</Link><Link href="/faq">FAQ</Link><Link href="/return-policy">Returns</Link></div>
      <div className="flex flex-col gap-3 text-sm"><p className="font-semibold uppercase tracking-widest text-accent">Legal</p><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><div className="mt-3 flex gap-4"><Camera /><MessageCircle /></div></div>
    </div><div className="border-t border-primary-foreground/20 py-6 text-center text-xs opacity-70">© 2026 VIGNESHWARI. An original heritage fashion concept.</div>
  </footer>
}
