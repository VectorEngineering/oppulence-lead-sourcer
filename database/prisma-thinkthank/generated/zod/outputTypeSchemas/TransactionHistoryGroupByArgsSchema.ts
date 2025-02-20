import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionHistoryWhereInputSchema } from '../inputTypeSchemas/TransactionHistoryWhereInputSchema'
import { TransactionHistoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TransactionHistoryOrderByWithAggregationInputSchema'
import { TransactionHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionHistoryScalarFieldEnumSchema'
import { TransactionHistoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TransactionHistoryScalarWhereWithAggregatesInputSchema'

export const TransactionHistoryGroupByArgsSchema: z.ZodType<Prisma.TransactionHistoryGroupByArgs> = z
    .object({
        where: TransactionHistoryWhereInputSchema.optional(),
        orderBy: z
            .union([TransactionHistoryOrderByWithAggregationInputSchema.array(), TransactionHistoryOrderByWithAggregationInputSchema])
            .optional(),
        by: TransactionHistoryScalarFieldEnumSchema.array(),
        having: TransactionHistoryScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default TransactionHistoryGroupByArgsSchema
