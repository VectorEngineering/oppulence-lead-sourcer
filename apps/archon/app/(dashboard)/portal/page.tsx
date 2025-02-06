import DashboardLayout from '@/components/layouts/dashboard-layout'
import { Suspense } from 'react'
import { PageClient } from './page-client'
import { PageClientLoading } from './page-client-loading'

export const dynamic = 'force-dynamic'

const pageData = {
    name: 'Dashboard',
    title: 'Dashboard',
    description: 'Snapshot of your endpoints and leads'
}

export default async function Page() {
    return (
        <>
            <DashboardLayout pageData={pageData}>
                <Suspense fallback={<PageClientLoading />}>
                    <PageClient />
                </Suspense>
            </DashboardLayout>
        </>
    )
}
