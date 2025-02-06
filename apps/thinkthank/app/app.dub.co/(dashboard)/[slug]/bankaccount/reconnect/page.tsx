import LayoutLoader from '@/ui/layout/layout-loader'
import { PageContent } from '@/ui/layout/page-content'
import { Suspense } from 'react'

export default function BankAccountReconnectPage() {
    return (
        <Suspense fallback={<LayoutLoader />}>
            <PageContent title='Bank Account Reconnect'>
                <p>Bank Account Reconnect</p>
            </PageContent>
        </Suspense>
    )
}
