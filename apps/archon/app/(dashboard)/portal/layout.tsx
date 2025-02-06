import '../../globals.css'

import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import { getUsageForUser } from '@/app/actions/users/get-usage-for-user-action'
import { getUserWorkspaces } from '@/app/actions/workspaces/get-user-workspaces-action'
import { AppSidebar } from '@/components/app-sidebar'
import { AppleStyleDock } from '@/components/dock/platform-dock'
import { Breadcrumbs } from '@/components/parts/breadcrumbs'
import { Separator } from '@/components/ui/separator'
import { BusinessConfig } from '@dub/platform-config'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: BusinessConfig.name,
    description: BusinessConfig.description
}

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const [usage, workspaces] = await Promise.all([getUsageForUser(), getUserWorkspaces()])

    const plan = usage?.data?.usage?.plan

    const { workspaces: workspacesData } = workspaces?.data ?? {}

    const pageName = 'Dashboard'

    return (
        <SidebarProvider>
            <AppSidebar
                className='h-full border-none'
                plan={plan as 'free' | 'lite' | 'pro' | 'business' | 'enterprise'}
                workspaces={workspacesData ?? []}
            />

            <SidebarInset className='m-[2%] flex flex-1 flex-col rounded-2xl'>
                <header className='bg-background flex h-16 shrink-0 items-center gap-2 px-6'>
                    <SidebarTrigger className='-ml-2' />
                    <Separator orientation='vertical' className='mx-2 h-6' />
                    <Breadcrumbs pageName={pageName} />
                </header>
                <main className='no-scrollbar flex-1 overflow-auto p-2'>{children}</main>
                <AppleStyleDock />
            </SidebarInset>
        </SidebarProvider>
    )
}
