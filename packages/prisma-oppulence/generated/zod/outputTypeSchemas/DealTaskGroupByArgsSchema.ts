import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealTaskWhereInputSchema } from '../inputTypeSchemas/DealTaskWhereInputSchema'
import { DealTaskOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DealTaskOrderByWithAggregationInputSchema'
import { DealTaskScalarFieldEnumSchema } from '../inputTypeSchemas/DealTaskScalarFieldEnumSchema'
import { DealTaskScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DealTaskScalarWhereWithAggregatesInputSchema'

export const DealTaskGroupByArgsSchema: z.ZodType<Prisma.DealTaskGroupByArgs> = z
    .object({
        where: DealTaskWhereInputSchema.optional(),
        orderBy: z.union([DealTaskOrderByWithAggregationInputSchema.array(), DealTaskOrderByWithAggregationInputSchema]).optional(),
        by: DealTaskScalarFieldEnumSchema.array(),
        having: DealTaskScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealTaskGroupByArgsSchema
