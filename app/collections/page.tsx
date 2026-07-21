import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { collections } from '@/lib/catalog'
export const metadata: Metadata = { title: 'Collections' }
export default function CollectionsPage(){ return <div className="site-container section-space"><div className="mb-14 text-center"><p className="text-xs font-semibold uppercase tracking-[.28em] text-primary">Curated worlds</p><h1 className="mt-4 text-6xl">Collections</h1></div><div className="grid gap-6 md:grid-cols-3">{collections.map((collection)=><Link href={`/collections/${collection.slug}`} key={collection.slug} className="group"><div className="relative aspect-[4/5] overflow-hidden"><Image src={collection.image} alt={collection.title} fill className="object-cover transition duration-700 group-hover:scale-105" /></div><h2 className="mt-5 text-3xl">{collection.title}</h2><p className="mt-1 text-sm text-muted-foreground">{collection.subtitle}</p></Link>)}</div></div> }
