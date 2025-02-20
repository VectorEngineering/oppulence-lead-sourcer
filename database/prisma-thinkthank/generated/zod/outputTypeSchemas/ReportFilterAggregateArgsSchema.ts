import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportFilterWhereInputSchema } from '../inputTypeSchemas/ReportFilterWhereInputSchema'
import { ReportFilterOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportFilterOrderByWithRelationInputSchema'
import { ReportFilterWhereUniqueInputSchema } from '../inputTypeSchemas/ReportFilterWhereUniqueInputSchema'

export const ReportFilterAggregateArgsSchema: z.ZodType<Prisma.ReportFilterAggregateArgs> = z
    .object({
        where: ReportFilterWhereInputSchema.optional(),
        orderBy: z.union([ReportFilterOrderByWithRelationInputSchema.array(), ReportFilterOrderByWithRelationInputSchema]).optional(),
        cursor: ReportFilterWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ReportFilterAggregateArgsSchema
