import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceHistoryIncludeSchema } from '../inputTypeSchemas/InvoiceHistoryIncludeSchema'
import { InvoiceHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceHistoryWhereUniqueInputSchema'
import { InvoiceHistoryCreateInputSchema } from '../inputTypeSchemas/InvoiceHistoryCreateInputSchema'
import { InvoiceHistoryUncheckedCreateInputSchema } from '../inputTypeSchemas/InvoiceHistoryUncheckedCreateInputSchema'
import { InvoiceHistoryUpdateInputSchema } from '../inputTypeSchemas/InvoiceHistoryUpdateInputSchema'
import { InvoiceHistoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/InvoiceHistoryUncheckedUpdateInputSchema'
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

export const InvoiceHistoryUpsertArgsSchema: z.ZodType<Prisma.InvoiceHistoryUpsertArgs> = z
    .object({
        select: InvoiceHistorySelectSchema.optional(),
        include: InvoiceHistoryIncludeSchema.optional(),
        where: InvoiceHistoryWhereUniqueInputSchema,
        create: z.union([InvoiceHistoryCreateInputSchema, InvoiceHistoryUncheckedCreateInputSchema]),
        update: z.union([InvoiceHistoryUpdateInputSchema, InvoiceHistoryUncheckedUpdateInputSchema])
    })
    .strict()

export default InvoiceHistoryUpsertArgsSchema
