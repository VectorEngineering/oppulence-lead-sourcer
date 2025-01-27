import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceCommentWhereInputSchema } from '../inputTypeSchemas/InvoiceCommentWhereInputSchema'
import { InvoiceCommentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InvoiceCommentOrderByWithAggregationInputSchema'
import { InvoiceCommentScalarFieldEnumSchema } from '../inputTypeSchemas/InvoiceCommentScalarFieldEnumSchema'
import { InvoiceCommentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InvoiceCommentScalarWhereWithAggregatesInputSchema'

export const InvoiceCommentGroupByArgsSchema: z.ZodType<Prisma.InvoiceCommentGroupByArgs> = z
    .object({
        where: InvoiceCommentWhereInputSchema.optional(),
        orderBy: z
            .union([InvoiceCommentOrderByWithAggregationInputSchema.array(), InvoiceCommentOrderByWithAggregationInputSchema])
            .optional(),
        by: InvoiceCommentScalarFieldEnumSchema.array(),
        having: InvoiceCommentScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default InvoiceCommentGroupByArgsSchema
