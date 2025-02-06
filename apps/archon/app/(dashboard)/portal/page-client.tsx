import { Activity, Network, Users } from 'lucide-react'

import { getEndpoints } from '@/app/actions/endpoints/get-endpoints-action'
import { getLeads } from '@/app/actions/leads/get-leads-action'
import { getLeadAndErrorCounts } from '@/app/actions/leads/get-leads-and-error-counts'
import { getUsageForUser } from '@/app/actions/users/get-usage-for-user-action'
import { Chart } from '@/components/dashboard/chart'
import { columns } from '@/components/groups/leads/columns'
import { DataTable } from '@/components/groups/leads/data-table'
import { Usage } from '@/components/parts/usage'
import { BusinessConfig } from '@dub/platform-config'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const navLinks = [
    {
        name: 'Endpoints',
        description: `Create and Manage ${BusinessConfig.name} Endpoints`,
        href: '/portal/endpoints',
        icon: Network
    },
    {
        name: 'Leads',
        description: 'View Lead data and Form Submissions',
        href: '/portal/leads',
        icon: Users
    },
    {
        name: 'Logs',
        description: 'Monitor your API usage and errors',
        href: '/portal/logs',
        icon: Activity
    }
]

const Links = () => {
    return (
        <>
            {navLinks.map((link) => (
                <Link
                    className='bg-background hover:bg-accent/75 group rounded-lg border p-6 transition-all'
                    key={link.href}
                    href={link.href}
                >
                    <div className='flex flex-col gap-4'>
                        <link.icon className='text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors' />
                        <div>
                            <div className='font-semibold'>{link.name}</div>
                            <p className='text-muted-foreground text-sm'>{link.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export const PageClient = async () => {
    const charts = await getLeadAndErrorCounts()
    const leads = await getLeads()
    const endpoints = await getEndpoints()
    const usage = await getUsageForUser()

    // Your error checking logic here

    // Your error checking logic here
    if (!leads || !endpoints || !charts || usage === null) {
        notFound()
    }

    // get the lead limit for the user's plan
    let leadLimit: number
    switch (usage?.data?.usage?.plan) {
        case 'free':
            leadLimit = 100
            break
        case 'lite':
            leadLimit = 1000
            break
        case 'pro':
            leadLimit = 10000
            break
        case 'business':
            leadLimit = 50000
            break
        case 'enterprise':
            leadLimit = 999999
            break
        default:
            leadLimit = 100 // Fallback to free tier limit
    }

    // get the 5 most recent leads
    const recentLeads = leads?.data?.slice(0, 5)

    return (
        <>
            <div className='grid grid-cols-3 gap-4'>
                <Chart
                    chartData={charts?.data || []}
                    className={`${usage?.data?.usage.plan === 'enterprise' ? 'col-span-3' : 'col-span-2'}`}
                />
                {usage?.data?.usage.plan !== 'enterprise' && (
                    <Usage totalUsage={leadLimit} used={usage?.data?.usage.leadCount || 0} plan={usage?.data?.usage.plan || ''} />
                )}
                <Links />
            </div>
            <div className='mt-8'>
                <h2 className='mb-4 text-lg'>Recent Leads</h2>
                <DataTable columns={columns} data={recentLeads || []} endpoints={endpoints?.data || []} />
            </div>
        </>
    )
}
