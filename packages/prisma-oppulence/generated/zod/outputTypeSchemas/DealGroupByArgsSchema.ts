import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealWhereInputSchema } from '../inputTypeSchemas/DealWhereInputSchema'
import { DealOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DealOrderByWithAggregationInputSchema'
import { DealScalarFieldEnumSchema } from '../inputTypeSchemas/DealScalarFieldEnumSchema'
import { DealScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DealScalarWhereWithAggregatesInputSchema'

export const DealGroupByArgsSchema: z.ZodType<Prisma.DealGroupByArgs> = z
    .object({
        where: DealWhereInputSchema.optional(),
        orderBy: z.union([DealOrderByWithAggregationInputSchema.array(), DealOrderByWithAggregationInputSchema]).optional(),
        by: DealScalarFieldEnumSchema.array(),
        having: DealScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealGroupByArgsSchema
