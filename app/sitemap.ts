import type { MetadataRoute } from 'next'
import { collections,products } from '@/lib/catalog'
export default function sitemap():MetadataRoute.Sitemap { const base='https://vigneshwari.example'; const routes=['','/collections','/products','/search','/about','/contact','/faq','/privacy','/terms','/return-policy']; return [...routes.map((route)=>({url:`${base}${route}`,lastModified:new Date()})),...products.map((p)=>({url:`${base}/products/${p.slug}`,lastModified:new Date()})),...collections.map((c)=>({url:`${base}/collections/${c.slug}`,lastModified:new Date()}))] }
