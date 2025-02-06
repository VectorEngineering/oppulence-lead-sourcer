import { handleOverdueInvoiceNotifications, handlePaidInvoiceNotifications, type WorkspaceUser } from 'jobs/utils/invoice-notifications'

import { prisma } from '@dub/prisma-thinkthank'
import { schemaTask } from '@trigger.dev/sdk/v3'
import { z } from 'zod'

export const sendInvoiceNotifications = schemaTask({
    id: 'invoice-notifications',
    schema: z.object({
        invoiceId: z.string().uuid(),
        invoiceNumber: z.string(),
        status: z.enum(['paid', 'overdue']),
        workspaceId: z.string(),
        customerName: z.string()
    }),
    run: async ({ invoiceId, invoiceNumber, status, workspaceId, customerName }) => {
        const users = await prisma.projectUsers.findMany({
            where: {
                projectId: workspaceId,
                role: 'owner'
            },
            select: {
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

        // iterate over the users and construct a userInfo object
        const userInfo = users
            .map(({ user }) => {
                if (!user.email || !user.fullName) return null
                return {
                    user: {
                        id: user.id,
                        email: user.email,
                        full_name: user.fullName,
                        ...(user.image && { avatar_url: user.image }),
                        ...(user.locale && { locale: user.locale }),
                        workspace_id: workspaceId
                    },
                    workspace_id: workspaceId
                }
            })
            .filter((user): user is WorkspaceUser => user !== null)

        switch (status) {
            case 'paid':
                await handlePaidInvoiceNotifications({
                    user: userInfo,
                    invoiceId,
                    invoiceNumber,
                    customerName,
                    workspaceName: customerName,
                    workspaceId,
                    teamSlug: workspaceId
                })
                break
            case 'overdue':
                await handleOverdueInvoiceNotifications({
                    user: userInfo,
                    invoiceId,
                    invoiceNumber,
                    customerName,
                    teamSlug: workspaceId
                })
                break
        }
    }
})
