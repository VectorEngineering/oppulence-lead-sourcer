import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportScheduleWhereInputSchema } from '../inputTypeSchemas/ReportScheduleWhereInputSchema'
import { ReportScheduleOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportScheduleOrderByWithRelationInputSchema'
import { ReportScheduleWhereUniqueInputSchema } from '../inputTypeSchemas/ReportScheduleWhereUniqueInputSchema'

export const ReportScheduleAggregateArgsSchema: z.ZodType<Prisma.ReportScheduleAggregateArgs> = z
    .object({
        where: ReportScheduleWhereInputSchema.optional(),
        orderBy: z.union([ReportScheduleOrderByWithRelationInputSchema.array(), ReportScheduleOrderByWithRelationInputSchema]).optional(),
        cursor: ReportScheduleWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ReportScheduleAggregateArgsSchema
