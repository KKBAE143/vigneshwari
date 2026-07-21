import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
export const metadata: Metadata = { title: 'Contact' }
export default function ContactPage(){ return <div className="site-container section-space grid gap-16 lg:grid-cols-2"><div className="flex flex-col gap-6"><p className="text-xs font-semibold uppercase tracking-[.28em] text-primary">We are here</p><h1 className="text-6xl">Contact</h1><p className="leading-relaxed text-muted-foreground">For styling guidance, bridal appointments, or questions about a piece, reach out and our atelier team will respond warmly.</p><div className="flex flex-col gap-2 text-sm"><span>care@vigneshwari.example</span><span>+91 90000 00000</span><span>Mon–Sat, 10am–7pm IST</span></div></div><ContactForm /></div> }
