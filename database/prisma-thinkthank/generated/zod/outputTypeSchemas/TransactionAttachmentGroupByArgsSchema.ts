import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionAttachmentWhereInputSchema } from '../inputTypeSchemas/TransactionAttachmentWhereInputSchema'
import { TransactionAttachmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TransactionAttachmentOrderByWithAggregationInputSchema'
import { TransactionAttachmentScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionAttachmentScalarFieldEnumSchema'
import { TransactionAttachmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TransactionAttachmentScalarWhereWithAggregatesInputSchema'

export const TransactionAttachmentGroupByArgsSchema: z.ZodType<Prisma.TransactionAttachmentGroupByArgs> = z
    .object({
        where: TransactionAttachmentWhereInputSchema.optional(),
        orderBy: z
            .union([TransactionAttachmentOrderByWithAggregationInputSchema.array(), TransactionAttachmentOrderByWithAggregationInputSchema])
            .optional(),
        by: TransactionAttachmentScalarFieldEnumSchema.array(),
        having: TransactionAttachmentScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default TransactionAttachmentGroupByArgsSchema
