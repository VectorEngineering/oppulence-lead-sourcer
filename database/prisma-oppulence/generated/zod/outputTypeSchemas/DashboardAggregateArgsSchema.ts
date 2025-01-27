import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DashboardWhereInputSchema } from '../inputTypeSchemas/DashboardWhereInputSchema'
import { DashboardOrderByWithRelationInputSchema } from '../inputTypeSchemas/DashboardOrderByWithRelationInputSchema'
import { DashboardWhereUniqueInputSchema } from '../inputTypeSchemas/DashboardWhereUniqueInputSchema'

export const DashboardAggregateArgsSchema: z.ZodType<Prisma.DashboardAggregateArgs> = z
    .object({
        where: DashboardWhereInputSchema.optional(),
        orderBy: z.union([DashboardOrderByWithRelationInputSchema.array(), DashboardOrderByWithRelationInputSchema]).optional(),
        cursor: DashboardWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DashboardAggregateArgsSchema
