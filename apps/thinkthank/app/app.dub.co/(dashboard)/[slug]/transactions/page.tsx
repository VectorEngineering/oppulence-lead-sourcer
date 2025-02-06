import { PageContent } from '@/ui/layout/page-content'
import { searchParamsCache } from './search-params'

// TODO: ensure this takes in search params that are auth passed to the transaction
// table present in the page client that will  be used to filter the transactions
export default function WorkspaceTransactions({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
    const {
        q: query,
        page,
        attachments,
        start,
        end,
        categories,
        assignees,
        statuses,
        recurring,
        accounts,
        tags,
        amount_range,
        amount
    } = searchParamsCache.parse(searchParams)

    const filter = {
        attachments,
        start,
        end,
        categories,
        assignees,
        statuses,
        recurring,
        accounts,
        tags,
        amount_range,
        amount
    }

    const sort = typeof searchParams.sort === 'string' ? searchParams.sort.split(':') : undefined

    const isOpen = Boolean(searchParams.step)

    return <PageContent title='Transactions' />
}
