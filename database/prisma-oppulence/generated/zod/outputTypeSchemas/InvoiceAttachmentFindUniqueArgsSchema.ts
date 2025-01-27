import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceAttachmentIncludeSchema } from '../inputTypeSchemas/InvoiceAttachmentIncludeSchema'
import { InvoiceAttachmentWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceAttachmentWhereUniqueInputSchema'
import { InvoiceArgsSchema } from './InvoiceArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceAttachmentSelectSchema: z.ZodType<Prisma.InvoiceAttachmentSelect> = z
    .object({
        id: z.boolean().optional(),
        invoiceId: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        type: z.boolean().optional(),
        path: z.boolean().optional(),
        size: z.boolean().optional(),
        mimeType: z.boolean().optional(),
        metadata: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        invoice: z.union([z.boolean(), z.lazy(() => InvoiceArgsSchema)]).optional()
    })
    .strict()

export const InvoiceAttachmentFindUniqueArgsSchema: z.ZodType<Prisma.InvoiceAttachmentFindUniqueArgs> = z
    .object({
        select: InvoiceAttachmentSelectSchema.optional(),
        include: InvoiceAttachmentIncludeSchema.optional(),
        where: InvoiceAttachmentWhereUniqueInputSchema
    })
    .strict()

export default InvoiceAttachmentFindUniqueArgsSchema
