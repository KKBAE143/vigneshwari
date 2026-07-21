export type Product = {
  slug: string
  name: string
  fabric: string
  price: number
  comparePrice?: number
  image: string
  altImage: string
  color: string
  occasion: string
  rating: number
  isNew?: boolean
  story: string
}

export const products: Product[] = [
  { slug: 'rajkumari-crimson-banarasi', name: 'Rajkumari Crimson Banarasi', fabric: 'Pure Banarasi Silk', price: 18900, comparePrice: 22500, image: '/images/product-crimson.png', altImage: '/images/bridal-editorial.png', color: 'Crimson', occasion: 'Wedding', rating: 4.9, isNew: true, story: 'A ceremonial Banarasi woven with old-world floral butis and a stately zari border.' },
  { slug: 'kanaka-ivory-kanjivaram', name: 'Kanaka Ivory Kanjivaram', fabric: 'Mulberry Silk', price: 24900, comparePrice: 27900, image: '/images/product-ivory.png', altImage: '/images/silk-editorial.png', color: 'Ivory', occasion: 'Festive', rating: 4.8, story: 'Temple-inspired borders meet a serene ivory field in this heirloom Kanjivaram.' },
  { slug: 'padma-rose-organza', name: 'Padma Rose Organza', fabric: 'Silk Organza', price: 12900, comparePrice: 15500, image: '/images/product-rose.png', altImage: '/images/bridal-editorial.png', color: 'Rose', occasion: 'Celebration', rating: 4.7, isNew: true, story: 'Weightless organza embroidered by hand with quiet, luminous botanical details.' },
  { slug: 'mohana-sage-linen', name: 'Mohana Sage Linen', fabric: 'Linen Silk', price: 9800, image: '/images/product-green.png', altImage: '/images/silk-editorial.png', color: 'Sage', occasion: 'Everyday', rating: 4.8, story: 'Breathable linen silk shaped for graceful days and intimate gatherings.' },
  { slug: 'suvarna-tissue-silk', name: 'Suvarna Tissue Silk', fabric: 'Tissue Silk', price: 16500, comparePrice: 18900, image: '/images/product-gold.png', altImage: '/images/product-ivory.png', color: 'Gold', occasion: 'Festive', rating: 4.9, story: 'A luminous drape that catches light like antique gold leaf.' },
  { slug: 'neelambari-pochampally', name: 'Neelambari Pochampally', fabric: 'Ikat Silk', price: 14200, image: '/images/product-blue.png', altImage: '/images/product-green.png', color: 'Midnight', occasion: 'Celebration', rating: 4.6, story: 'A modern study in rhythm, woven with the geometry of Pochampally ikat.' },
]

export const collections = [
  { slug: 'bridal', title: 'The Bridal Edit', subtitle: 'Ceremonial silks for the first chapter', image: '/images/bridal-editorial.png' },
  { slug: 'heritage-silks', title: 'Heritage Silks', subtitle: 'Woven traditions, held for generations', image: '/images/silk-editorial.png' },
  { slug: 'new-arrivals', title: 'New Arrivals', subtitle: 'A new expression of enduring craft', image: '/images/product-rose.png' },
]

export const formatPrice = (value: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)
