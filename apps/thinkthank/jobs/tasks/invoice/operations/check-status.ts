import { logger, schemaTask } from '@trigger.dev/sdk/v3'

import { TZDate } from '@date-fns/tz'
import { prisma } from '@dub/prisma-thinkthank'
import { subDays } from 'date-fns'
import { updateInvoiceStatus } from 'jobs/utils/update-invocie'
import { z } from 'zod'

export const checkInvoiceStatus = schemaTask({
    id: 'check-invoice-status',
    schema: z.object({
        invoiceId: z.string().uuid()
    }),
    queue: {
        concurrencyLimit: 10
    },
    run: async ({ invoiceId }) => {
        const invoice = await prisma.invoice.findUnique({
            where: {
                id: invoiceId
            },
            include: {
                template: true
            }
        })

        if (!invoice) {
            logger.error('Invoice data is missing')
            return
        }

        if (!invoice.amount || !invoice.currency || !invoice.dueDate) {
            logger.error('Invoice data is missing')
            return
        }

        const timezone = invoice.template?.timezone || 'UTC'

        // Find recent transactions matching invoice amount, currency, and team_id
        const transactions = await prisma.transaction.findMany({
            where: {
                projectId: invoice.workspaceId,
                amount: invoice.amount,
                currency: invoice.currency?.toUpperCase(),
                date: {
                    // get the transactions from the last 3 days
                    gte: subDays(new TZDate(new Date(), timezone), 3).toISOString()
                }
            }
        })

        // We have a match
        if (transactions && transactions.length === 1) {
            const transactionId = transactions.at(0)?.id
            const filename = `${invoice.invoiceNumber}.pdf`

            // Attach the invoice file to the transaction and mark as paid
            await prisma.transactionAttachment.create({
                data: {
                    type: 'application/pdf',
                    path: invoice.filePath || '',
                    transactionId: transactionId || '',
                    projectId: invoice.workspaceId,
                    name: filename,
                    size: invoice.fileSize
                }
            })

            await updateInvoiceStatus({
                invoiceId,
                status: 'paid'
            })
        } else {
            // Check if the invoice is overdue
            const isOverdue = new TZDate(invoice.dueDate, timezone) < new TZDate(new Date(), timezone)

            // Update invoice status to overdue if it's past due date and currently unpaid
            if (isOverdue && invoice.status === 'overdue') {
                await updateInvoiceStatus({
                    invoiceId,
                    status: 'overdue'
                })
            }
        }
    }
})
