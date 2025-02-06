import { prisma } from '@dub/prisma-thinkthank'
import { logger } from '@trigger.dev/sdk/v3'
// import { sendInvoiceNotifications } from "jobs/tasks/invoice/notifications/send-notifications";

export async function updateInvoiceStatus({ invoiceId, status }: { invoiceId: string; status: 'overdue' | 'paid' }): Promise<void> {
    // update the invoice in the database using prisma
    const updatedInvoice = await prisma.invoice.update({
        where: { id: invoiceId },
        data: {
            status,
            updatedAt: new Date()
        }
    })

    if (!updatedInvoice?.invoiceNumber || !updatedInvoice?.workspaceId || !updatedInvoice?.customerName) {
        logger.error('Invoice data is missing')
        return
    }

    logger.info(`Invoice status changed to ${status}`)

    // TODO: Uncomment this when we have a way to send emails
    // await sendInvoiceNotifications.trigger({
    //   invoiceId,
    //   invoiceNumber: updatedInvoice.invoiceNumber,
    //   status: updatedInvoice.status as "paid" | "overdue",
    //   teamId: updatedInvoice.workspaceId,
    //   customerName: updatedInvoice.customerName,
    // });
}
