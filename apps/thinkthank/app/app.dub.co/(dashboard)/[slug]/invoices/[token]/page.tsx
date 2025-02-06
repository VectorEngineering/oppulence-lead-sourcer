import LayoutLoader from '@/ui/layout/layout-loader'
import { PageContent } from '@/ui/layout/page-content'
import { Suspense } from 'react'

export default function WorkspaceInvoiceTokenPage({
    searchParams,
    params
}: {
    searchParams: Record<string, string | string[] | undefined>
    params: {
        slug: string
        token: string
    }
}) {
    return (
        <Suspense fallback={<LayoutLoader />}>
            <PageContent title='Invoice Token'>
                <p>Invoice Token</p>
            </PageContent>
        </Suspense>
    )
}
