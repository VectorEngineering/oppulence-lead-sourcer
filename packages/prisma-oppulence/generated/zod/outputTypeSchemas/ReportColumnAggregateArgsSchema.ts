import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportColumnWhereInputSchema } from '../inputTypeSchemas/ReportColumnWhereInputSchema'
import { ReportColumnOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportColumnOrderByWithRelationInputSchema'
import { ReportColumnWhereUniqueInputSchema } from '../inputTypeSchemas/ReportColumnWhereUniqueInputSchema'

export const ReportColumnAggregateArgsSchema: z.ZodType<Prisma.ReportColumnAggregateArgs> = z
    .object({
        where: ReportColumnWhereInputSchema.optional(),
        orderBy: z.union([ReportColumnOrderByWithRelationInputSchema.array(), ReportColumnOrderByWithRelationInputSchema]).optional(),
        cursor: ReportColumnWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ReportColumnAggregateArgsSchema
