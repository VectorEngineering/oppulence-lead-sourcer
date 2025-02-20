import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionCategoryWhereInputSchema } from '../inputTypeSchemas/TransactionCategoryWhereInputSchema'
import { TransactionCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TransactionCategoryOrderByWithAggregationInputSchema'
import { TransactionCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionCategoryScalarFieldEnumSchema'
import { TransactionCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TransactionCategoryScalarWhereWithAggregatesInputSchema'

export const TransactionCategoryGroupByArgsSchema: z.ZodType<Prisma.TransactionCategoryGroupByArgs> = z
    .object({
        where: TransactionCategoryWhereInputSchema.optional(),
        orderBy: z
            .union([TransactionCategoryOrderByWithAggregationInputSchema.array(), TransactionCategoryOrderByWithAggregationInputSchema])
            .optional(),
        by: TransactionCategoryScalarFieldEnumSchema.array(),
        having: TransactionCategoryScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default TransactionCategoryGroupByArgsSchema
