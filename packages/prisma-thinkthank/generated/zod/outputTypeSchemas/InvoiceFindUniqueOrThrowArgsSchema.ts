import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceIncludeSchema } from '../inputTypeSchemas/InvoiceIncludeSchema'
import { InvoiceWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceWhereUniqueInputSchema'
import { PayoutFindManyArgsSchema } from './PayoutFindManyArgsSchema'
import { ProgramArgsSchema } from './ProgramArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { CustomerArgsSchema } from './CustomerArgsSchema'
import { InvoiceCommentFindManyArgsSchema } from './InvoiceCommentFindManyArgsSchema'
import { InvoiceAttachmentFindManyArgsSchema } from './InvoiceAttachmentFindManyArgsSchema'
import { InvoiceHistoryFindManyArgsSchema } from './InvoiceHistoryFindManyArgsSchema'
import { InvoiceTemplateArgsSchema } from './InvoiceTemplateArgsSchema'
import { InvoiceCountOutputTypeArgsSchema } from './InvoiceCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceSelectSchema: z.ZodType<Prisma.InvoiceSelect> = z
    .object({
        id: z.boolean().optional(),
        programId: z.boolean().optional(),
        workspaceId: z.boolean().optional(),
        number: z.boolean().optional(),
        status: z.boolean().optional(),
        amount: z.boolean().optional(),
        fee: z.boolean().optional(),
        total: z.boolean().optional(),
        receiptUrl: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        bottomBlock: z.boolean().optional(),
        companyDetails: z.boolean().optional(),
        currency: z.boolean().optional(),
        customerDetails: z.boolean().optional(),
        customerId: z.boolean().optional(),
        customerName: z.boolean().optional(),
        discount: z.boolean().optional(),
        dueDate: z.boolean().optional(),
        filePath: z.boolean().optional(),
        fileSize: z.boolean().optional(),
        fromDetails: z.boolean().optional(),
        internalNote: z.boolean().optional(),
        invoiceNumber: z.boolean().optional(),
        issueDate: z.boolean().optional(),
        lineItems: z.boolean().optional(),
        note: z.boolean().optional(),
        noteDetails: z.boolean().optional(),
        paidAt: z.boolean().optional(),
        paymentDetails: z.boolean().optional(),
        reminderSentAt: z.boolean().optional(),
        sentTo: z.boolean().optional(),
        subtotal: z.boolean().optional(),
        tax: z.boolean().optional(),
        teamId: z.boolean().optional(),
        token: z.boolean().optional(),
        topBlock: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        url: z.boolean().optional(),
        userId: z.boolean().optional(),
        vat: z.boolean().optional(),
        viewedAt: z.boolean().optional(),
        version: z.boolean().optional(),
        language: z.boolean().optional(),
        timezone: z.boolean().optional(),
        tags: z.boolean().optional(),
        metadata: z.boolean().optional(),
        customFields: z.boolean().optional(),
        paymentMethod: z.boolean().optional(),
        paymentStatus: z.boolean().optional(),
        paymentDue: z.boolean().optional(),
        partialPayments: z.boolean().optional(),
        refundAmount: z.boolean().optional(),
        conversionRate: z.boolean().optional(),
        processingFees: z.boolean().optional(),
        profitMargin: z.boolean().optional(),
        costBreakdown: z.boolean().optional(),
        autoRemind: z.boolean().optional(),
        reminderSchedule: z.boolean().optional(),
        approvalStatus: z.boolean().optional(),
        approvedBy: z.boolean().optional(),
        approvedAt: z.boolean().optional(),
        taxExempt: z.boolean().optional(),
        taxExemptReason: z.boolean().optional(),
        complianceNotes: z.boolean().optional(),
        auditTrail: z.boolean().optional(),
        templateId: z.boolean().optional(),
        payouts: z.union([z.boolean(), z.lazy(() => PayoutFindManyArgsSchema)]).optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        workspace: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        customer: z.union([z.boolean(), z.lazy(() => CustomerArgsSchema)]).optional(),
        comments: z.union([z.boolean(), z.lazy(() => InvoiceCommentFindManyArgsSchema)]).optional(),
        attachments: z.union([z.boolean(), z.lazy(() => InvoiceAttachmentFindManyArgsSchema)]).optional(),
        history: z.union([z.boolean(), z.lazy(() => InvoiceHistoryFindManyArgsSchema)]).optional(),
        template: z.union([z.boolean(), z.lazy(() => InvoiceTemplateArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => InvoiceCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const InvoiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InvoiceFindUniqueOrThrowArgs> = z
    .object({
        select: InvoiceSelectSchema.optional(),
        include: InvoiceIncludeSchema.optional(),
        where: InvoiceWhereUniqueInputSchema
    })
    .strict()

export default InvoiceFindUniqueOrThrowArgsSchema
