import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealActivityWhereInputSchema } from '../inputTypeSchemas/DealActivityWhereInputSchema'
import { DealActivityOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DealActivityOrderByWithAggregationInputSchema'
import { DealActivityScalarFieldEnumSchema } from '../inputTypeSchemas/DealActivityScalarFieldEnumSchema'
import { DealActivityScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DealActivityScalarWhereWithAggregatesInputSchema'

export const DealActivityGroupByArgsSchema: z.ZodType<Prisma.DealActivityGroupByArgs> = z
    .object({
        where: DealActivityWhereInputSchema.optional(),
        orderBy: z.union([DealActivityOrderByWithAggregationInputSchema.array(), DealActivityOrderByWithAggregationInputSchema]).optional(),
        by: DealActivityScalarFieldEnumSchema.array(),
        having: DealActivityScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealActivityGroupByArgsSchema
