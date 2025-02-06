import { logger, schemaTask } from '@trigger.dev/sdk/v3'

import InvoiceEmail from 'emails/invoice'
import { nanoid } from 'nanoid'
import { BusinessConfig as platform } from '@dub/platform-config'
import { prisma } from '@dub/prisma-thinkthank'
import { render } from '@react-email/render'
import { resend } from '@/lib/resend'
import { z } from 'zod'

export const sendInvoiceEmail = schemaTask({
    id: 'send-invoice-email',
    schema: z.object({
        invoiceId: z.string().uuid(),
        workspaceSlug: z.string()
    }),
    maxDuration: 300,
    queue: {
        concurrencyLimit: 10
    },
    run: async ({ invoiceId, workspaceSlug }) => {
        const invoice = await prisma.invoice.findUnique({
            where: {
                id: invoiceId
            },
            include: {
                customer: true,
                workspace: {
                    select: {
                        name: true,
                        id: true
                    }
                }
            }
        })

        if (!invoice) {
            logger.error('Invoice not found')
            return
        }

        const customerEmail = invoice?.customer?.email

        if (!customerEmail) {
            logger.error('Invoice customer email not found')
            return
        }

        const workspaceUsers = await prisma.projectUsers.findMany({
            where: {
                projectId: invoice?.workspace.id,
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
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        const response = await resend?.emails.send({
            from: platform.email.from.system,
            to: customerEmail,
            replyTo: workspaceUsers[0]?.user.email ?? platform.email.from.system,
            subject: `${invoice?.workspace.name} sent you an invoice`,
            headers: {
                'X-Entity-Ref-ID': nanoid()
            },
            html: await render(
                <InvoiceEmail
                    customerName={invoice?.customer?.name ?? ''}
                    teamName={invoice?.workspace.name}
                    link={`${platform.platformUrl}/${workspaceSlug}/invoices/${invoice?.token}`}
                    teamSlug={workspaceSlug}
                />
            )
        })

        if (response?.error) {
            logger.error('Invoice email failed to send', {
                invoiceId,
                error: response.error
            })

            throw new Error('Invoice email failed to send')
        }

        logger.info('Invoice email sent')

        await prisma.invoice.update({
            where: {
                id: invoiceId
            },
            data: {
                status: 'overdue',
                sentTo: customerEmail
            }
        })
    }
})
