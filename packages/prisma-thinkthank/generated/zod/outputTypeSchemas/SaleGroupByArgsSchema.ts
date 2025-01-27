import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { SaleWhereInputSchema } from '../inputTypeSchemas/SaleWhereInputSchema'
import { SaleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SaleOrderByWithAggregationInputSchema'
import { SaleScalarFieldEnumSchema } from '../inputTypeSchemas/SaleScalarFieldEnumSchema'
import { SaleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SaleScalarWhereWithAggregatesInputSchema'

export const SaleGroupByArgsSchema: z.ZodType<Prisma.SaleGroupByArgs> = z
    .object({
        where: SaleWhereInputSchema.optional(),
        orderBy: z.union([SaleOrderByWithAggregationInputSchema.array(), SaleOrderByWithAggregationInputSchema]).optional(),
        by: SaleScalarFieldEnumSchema.array(),
        having: SaleScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default SaleGroupByArgsSchema
