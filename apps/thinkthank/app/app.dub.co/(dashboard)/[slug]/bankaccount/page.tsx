import LayoutLoader from '@/ui/layout/layout-loader'
import { PageContent } from '@/ui/layout/page-content'
import { Suspense } from 'react'

export default function BankAccountPage() {
    return (
        <Suspense fallback={<LayoutLoader />}>
            <PageContent title='Bank Account'>
                <p>Bank Account</p>
            </PageContent>
        </Suspense>
    )
}
