import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealProductWhereInputSchema } from '../inputTypeSchemas/DealProductWhereInputSchema'
import { DealProductOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DealProductOrderByWithAggregationInputSchema'
import { DealProductScalarFieldEnumSchema } from '../inputTypeSchemas/DealProductScalarFieldEnumSchema'
import { DealProductScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DealProductScalarWhereWithAggregatesInputSchema'

export const DealProductGroupByArgsSchema: z.ZodType<Prisma.DealProductGroupByArgs> = z
    .object({
        where: DealProductWhereInputSchema.optional(),
        orderBy: z.union([DealProductOrderByWithAggregationInputSchema.array(), DealProductOrderByWithAggregationInputSchema]).optional(),
        by: DealProductScalarFieldEnumSchema.array(),
        having: DealProductScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealProductGroupByArgsSchema
