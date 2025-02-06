import LayoutLoader from '@/ui/layout/layout-loader'
import { PageContent } from '@/ui/layout/page-content'
import { Suspense } from 'react'
import { searchParamsCache } from './search-params'

export default function WorkspaceInvoices({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
    const { q: query, invoiceId, type } = searchParamsCache.parse(searchParams)

    console.log(invoiceId, type)

    return (
        <Suspense fallback={<LayoutLoader />}>
            <PageContent title='Invoices'>
                <p>Invoices</p>
            </PageContent>
        </Suspense>
    )
}
