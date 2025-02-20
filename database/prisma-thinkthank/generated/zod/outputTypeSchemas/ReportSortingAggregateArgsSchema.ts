import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportSortingWhereInputSchema } from '../inputTypeSchemas/ReportSortingWhereInputSchema'
import { ReportSortingOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportSortingOrderByWithRelationInputSchema'
import { ReportSortingWhereUniqueInputSchema } from '../inputTypeSchemas/ReportSortingWhereUniqueInputSchema'

export const ReportSortingAggregateArgsSchema: z.ZodType<Prisma.ReportSortingAggregateArgs> = z
    .object({
        where: ReportSortingWhereInputSchema.optional(),
        orderBy: z.union([ReportSortingOrderByWithRelationInputSchema.array(), ReportSortingOrderByWithRelationInputSchema]).optional(),
        cursor: ReportSortingWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ReportSortingAggregateArgsSchema
