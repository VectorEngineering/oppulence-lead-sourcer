import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DashboardWhereInputSchema } from '../inputTypeSchemas/DashboardWhereInputSchema'
import { DashboardOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DashboardOrderByWithAggregationInputSchema'
import { DashboardScalarFieldEnumSchema } from '../inputTypeSchemas/DashboardScalarFieldEnumSchema'
import { DashboardScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DashboardScalarWhereWithAggregatesInputSchema'

export const DashboardGroupByArgsSchema: z.ZodType<Prisma.DashboardGroupByArgs> = z
    .object({
        where: DashboardWhereInputSchema.optional(),
        orderBy: z.union([DashboardOrderByWithAggregationInputSchema.array(), DashboardOrderByWithAggregationInputSchema]).optional(),
        by: DashboardScalarFieldEnumSchema.array(),
        having: DashboardScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DashboardGroupByArgsSchema
