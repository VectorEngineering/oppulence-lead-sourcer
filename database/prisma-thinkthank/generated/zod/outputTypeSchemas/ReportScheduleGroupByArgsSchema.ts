import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportScheduleWhereInputSchema } from '../inputTypeSchemas/ReportScheduleWhereInputSchema'
import { ReportScheduleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReportScheduleOrderByWithAggregationInputSchema'
import { ReportScheduleScalarFieldEnumSchema } from '../inputTypeSchemas/ReportScheduleScalarFieldEnumSchema'
import { ReportScheduleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReportScheduleScalarWhereWithAggregatesInputSchema'

export const ReportScheduleGroupByArgsSchema: z.ZodType<Prisma.ReportScheduleGroupByArgs> = z
    .object({
        where: ReportScheduleWhereInputSchema.optional(),
        orderBy: z
            .union([ReportScheduleOrderByWithAggregationInputSchema.array(), ReportScheduleOrderByWithAggregationInputSchema])
            .optional(),
        by: ReportScheduleScalarFieldEnumSchema.array(),
        having: ReportScheduleScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ReportScheduleGroupByArgsSchema
