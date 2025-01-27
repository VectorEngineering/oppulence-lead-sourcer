import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceHistoryIncludeSchema } from '../inputTypeSchemas/InvoiceHistoryIncludeSchema'
import { InvoiceHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceHistoryWhereUniqueInputSchema'
import { InvoiceArgsSchema } from './InvoiceArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceHistorySelectSchema: z.ZodType<Prisma.InvoiceHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        invoiceId: z.boolean().optional(),
        action: z.boolean().optional(),
        description: z.boolean().optional(),
        changes: z.boolean().optional(),
        metadata: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        invoice: z.union([z.boolean(), z.lazy(() => InvoiceArgsSchema)]).optional()
    })
    .strict()

export const InvoiceHistoryFindUniqueArgsSchema: z.ZodType<Prisma.InvoiceHistoryFindUniqueArgs> = z
    .object({
        select: InvoiceHistorySelectSchema.optional(),
        include: InvoiceHistoryIncludeSchema.optional(),
        where: InvoiceHistoryWhereUniqueInputSchema
    })
    .strict()

export default InvoiceHistoryFindUniqueArgsSchema
