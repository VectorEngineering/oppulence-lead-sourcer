import { getEndpoints } from '@/app/actions/endpoints/get-endpoints-action'
import { getLeads } from '@/app/actions/leads/get-leads-action'
import { getLeadAndErrorCounts } from '@/app/actions/leads/get-leads-and-error-counts'
import { getUsageForUser } from '@/app/actions/users/get-usage-for-user-action'
import { Chart } from '@/components/dashboard/chart'
import { columns } from '@/components/groups/leads/columns'
import { DataTable } from '@/components/groups/leads/data-table'
import { BusinessConfig } from '@dub/platform-config'
import { Link } from '@radix-ui/react-navigation-menu'
import { unstable_noStore as noStore } from 'next/cache'
import { notFound } from 'next/navigation'
import { Usage } from '../parts/usage'

const navLinks = [
    {
        name: 'Endpoints',
        description: `Create and Manage ${BusinessConfig.name} Endpoints`,
        href: '/portal/endpoints'
    },
    {
        name: 'Leads',
        description: 'View Lead data and Form Submissions',
        href: '/portal/leads'
    },
    {
        name: 'Logs',
        description: 'Monitor your API usage and errors',
        href: '/portal/logs'
    }
]

const Links = () => {
    return (
        <>
            {navLinks.map((link) => (
                <Link className='bg-background hover:bg-accent/75 rounded-lg border p-4 transition-all' key={link.href} href={link.href}>
                    {link.name}
                    <p className='text-sm text-gray-500'>{link.description}</p>
                </Link>
            ))}
        </>
    )
}

const DashboardView = async () => {
    // Opt out of caching for this component
    noStore()

    const [charts, leads, endpoints, usage] = await Promise.all([getLeadAndErrorCounts(), getLeads(), getEndpoints(), getUsageForUser()])

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
        <div className='grid grid-cols-3 gap-4'>
            <Chart chartData={charts?.data || []} className={`${usage?.data?.usage.plan === 'enterprise' ? 'col-span-3' : 'col-span-2'}`} />
            {usage?.data?.usage.plan !== 'enterprise' && (
                <Usage totalUsage={leadLimit} used={usage?.data?.usage.leadCount || 0} plan={usage?.data?.usage.plan || ''} />
            )}
            <Links />
            <div className='mt-8'>
                <h2 className='mb-4 text-lg'>Recent Leads</h2>
                <DataTable columns={columns} data={recentLeads || []} endpoints={endpoints?.data || []} />
            </div>
        </div>
    )
}

export default DashboardView
