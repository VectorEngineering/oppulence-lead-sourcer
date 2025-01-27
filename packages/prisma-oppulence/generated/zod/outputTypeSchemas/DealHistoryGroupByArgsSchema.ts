import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealHistoryWhereInputSchema } from '../inputTypeSchemas/DealHistoryWhereInputSchema'
import { DealHistoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DealHistoryOrderByWithAggregationInputSchema'
import { DealHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/DealHistoryScalarFieldEnumSchema'
import { DealHistoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DealHistoryScalarWhereWithAggregatesInputSchema'

export const DealHistoryGroupByArgsSchema: z.ZodType<Prisma.DealHistoryGroupByArgs> = z
    .object({
        where: DealHistoryWhereInputSchema.optional(),
        orderBy: z.union([DealHistoryOrderByWithAggregationInputSchema.array(), DealHistoryOrderByWithAggregationInputSchema]).optional(),
        by: DealHistoryScalarFieldEnumSchema.array(),
        having: DealHistoryScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealHistoryGroupByArgsSchema
