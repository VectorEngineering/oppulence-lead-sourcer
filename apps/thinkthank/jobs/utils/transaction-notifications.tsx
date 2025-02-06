import { NotificationTypes, TriggerEvents, triggerBulk } from '@dub/notifications'

import { render } from '@react-email/render'
import { logger } from '@trigger.dev/sdk/v3'
import TransactionsEmail from '../../emails/transactions'

interface User {
    id: string
    full_name: string
    avatar_url: string
    email: string
    locale: string
}

interface Workspace {
    workspaceId: string
    name: string
    slug: string
}

interface UserData {
    user: User
    workspaceId: string
    workspace: Workspace
}

interface Transaction {
    id: string
    date: string
    amount: number
    name: string
    currency: string
    category: string
    status: string
}

export async function handleTransactionNotifications(usersData: UserData[], transactions: Transaction[]) {
    const notificationEvents = usersData.map(({ user, workspaceId }) => {
        return {
            name: TriggerEvents.TransactionsNewInApp,
            payload: {
                type: NotificationTypes.Transactions,
                from: transactions[transactions.length - 1]?.date,
                to: transactions[0]?.date,
                description: `New transactions: ${transactions.length}`
            },
            user: {
                subscriberId: user.id,
                workspaceId,
                email: user.email,
                fullName: user.full_name,
                avatarUrl: user.avatar_url
            }
        }
    })

    const validNotificationEvents = notificationEvents.filter(Boolean)

    try {
        await triggerBulk(validNotificationEvents)
    } catch (error) {
        await logger.error('Transaction notifications', { error })
    }

    return validNotificationEvents
}

export async function handleTransactionEmails(usersData: UserData[], transactions: Transaction[]) {
    const emailPromises = usersData.map(async ({ user, workspaceId, workspace }) => {
        const html = await render(
            <TransactionsEmail
                fullName={user.full_name}
                transactions={transactions}
                locale={user.locale ?? 'en'}
                teamSlug={workspace.slug}
                workspaceName={workspace.name}
            />
        )

        return {
            name: TriggerEvents.TransactionNewEmail,
            payload: {
                subject: `New transactions: ${transactions.length}`,
                html
            },
            replyTo: user.email,
            user: {
                subscriberId: user.id,
                workspaceId,
                email: user.email,
                fullName: user.full_name,
                avatarUrl: user.avatar_url
            }
        }
    })

    const validEmailPromises = await Promise.all(emailPromises)

    try {
        await triggerBulk(validEmailPromises)
        logger.info('Transaction emails sent', {
            count: validEmailPromises.length
        })
    } catch (error) {
        logger.error('Transaction emails', { error })
    }

    return validEmailPromises
}
