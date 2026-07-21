import { Search } from 'lucide-react'
import { CatalogBrowser } from '@/components/catalog-browser'
import { Input } from '@/components/ui/input'
export default async function SearchPage({searchParams}:{searchParams:Promise<{q?:string}>}){ const {q}=await searchParams; return <><div className="site-container pt-16"><label className="mx-auto flex max-w-2xl items-center gap-3 border-b border-primary pb-3"><Search /><span className="sr-only">Search the collection</span><Input defaultValue={q} placeholder="Search by weave, color, or occasion" className="border-0 bg-transparent text-lg shadow-none" /></label></div><CatalogBrowser title={q ? `Results for “${q}”` : 'Search VIGNESHWARI'} /></> }
