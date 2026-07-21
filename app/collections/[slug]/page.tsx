import { notFound } from 'next/navigation'
import { collections } from '@/lib/catalog'
import { CatalogBrowser } from '@/components/catalog-browser'
export function generateStaticParams(){ return collections.map(({slug})=>({slug})) }
export default async function CollectionPage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const collection=collections.find((item)=>item.slug===slug); if(!collection) notFound(); return <CatalogBrowser title={collection.title} /> }
