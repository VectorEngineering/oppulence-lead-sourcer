import { logger, schemaTask } from '@trigger.dev/sdk/v3'

import { prisma } from '@dub/prisma-thinkthank'
import { handleTransactionEmails, handleTransactionNotifications } from 'jobs/utils/transaction-notifications'
import { z } from 'zod'

/**
 * @notifications Transaction Notification Task
 *
 * This task manages notifications for new or updated transactions in bank accounts.
 * It ensures users stay informed about their financial activity and any important
 * changes to their transactions.
 *
 * Workflow:
 * 1. Transaction Monitoring:
 *    - Detects new transactions
 *    - Identifies significant changes to existing transactions
 *    - Filters transactions based on user preferences
 *
 * 2. Notification Rules:
 *    - Applies user-defined notification rules
 *    - Handles transaction categorization
 *    - Processes amount thresholds and filters
 *
 * 3. Delivery Management:
 *    - Batches notifications when appropriate
 *    - Prioritizes notifications based on importance
 *    - Respects user notification preferences
 *
 * @schema
 * {
 *   workspaceId: string - UUID of the workspace
 *   transactions: Array<{
 *     id: string - Transaction ID
 *     amount: number - Transaction amount
 *     description: string - Transaction description
 *     category: string - Transaction category
 *     date: Date - Transaction date
 *     type: "credit" | "debit" - Transaction type
 *   }>
 * }
 *
 * @implementation
 * - Groups transactions by account and type
 * - Applies notification rules and filters
 * - Generates notification content
 * - Sends notifications through configured channels
 * - Updates notification history
 *
 * @param workspaceId - The workspace ID associated with the transactions
 * @param transactions - Array of transactions to process
 * @throws {Error} If notification processing fails
 * @returns {Promise<void>} Resolves when all notifications are processed
 */
export const transactionNotifications = schemaTask({
    id: 'transaction-notifications',
    maxDuration: 300,
    schema: z.object({
        workspaceId: z.string()
    }),
    run: async ({ workspaceId }) => {
        try {
            // get the workspace
            const workspace = await prisma.project.findUnique({
                where: {
                    id: workspaceId
                },
                select: {
                    id: true,
                    name: true,
                    slug: true
                }
            })

            // Get transactions that need notifications
            const transactions = await prisma.transaction.findMany({
                where: {
                    projectId: workspaceId,
                    notified: false
                },
                select: {
                    id: true,
                    date: true,
                    amount: true,
                    name: true,
                    currency: true,
                    category: true,
                    status: true
                },
                orderBy: {
                    date: 'desc'
                }
            })

            // Mark transactions as notified
            await prisma.transaction.updateMany({
                where: {
                    id: { in: transactions.map((t) => t.id) }
                },
                data: { notified: true }
            })

            // get the users of the workspace
            const workspaceUsers = await prisma.projectUsers.findMany({
                where: {
                    projectId: workspaceId,
                    role: 'owner'
                },
                select: {
                    userId: true,
                    user: {
                        select: {
                            id: true,
                            fullName: true,
                            email: true,
                            image: true,
                            locale: true
                        }
                    }
                }
            })

            // transform the users into the format we need
            const usersData = workspaceUsers.map(({ user, userId }) => ({
                user: {
                    id: user.id ?? '',
                    full_name: user.fullName ?? '',
                    email: user.email ?? '',
                    avatar_url: user.image ?? '',
                    locale: user.locale ?? ''
                },
                workspaceId: workspace?.id ?? '',
                workspace: {
                    workspaceId: workspace?.id ?? '',
                    name: workspace?.name ?? '',
                    slug: workspace?.slug ?? ''
                }
            }))

            const formattedTransactions = transactions.map((t) => ({
                id: t.id,
                date: t.date.toISOString(),
                amount: t.amount,
                name: t.name,
                currency: t.currency,
                category: t.category?.name || 'uncategorized',
                status: t.status
            }))

            const sortedTransactions = formattedTransactions.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            })

            if (sortedTransactions && sortedTransactions.length > 0) {
                await handleTransactionNotifications(usersData, sortedTransactions)
                await handleTransactionEmails(usersData, sortedTransactions)
            }
        } catch (error) {
            await logger.error('Transactions notification', { error })

            throw error
        }
    }
})
