import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StoreProvider } from '@/components/store-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400','500','600','700'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = { title: { default: 'VIGNESHWARI — Timeless Indian Sarees', template: '%s | VIGNESHWARI' }, description: 'An original luxury Indian heritage fashion experience celebrating exquisite handwoven sarees.', openGraph: { title: 'VIGNESHWARI', description: 'Timeless Indian sarees, woven for generations.', type: 'website' } }
export const viewport: Viewport = { themeColor: '#F5ECE5', colorScheme: 'light' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${inter.variable} ${cormorant.variable} ${playfair.variable} font-sans antialiased`}><StoreProvider><SiteHeader /><main>{children}</main><SiteFooter /><Toaster /></StoreProvider>{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
