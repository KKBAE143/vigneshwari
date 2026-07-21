import type { Metadata } from 'next'
import { CatalogBrowser } from '@/components/catalog-browser'
export const metadata: Metadata = { title: 'Sarees' }
export default function ProductsPage(){ return <CatalogBrowser /> }
