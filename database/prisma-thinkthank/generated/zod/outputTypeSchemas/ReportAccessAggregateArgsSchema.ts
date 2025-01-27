import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportAccessWhereInputSchema } from '../inputTypeSchemas/ReportAccessWhereInputSchema'
import { ReportAccessOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportAccessOrderByWithRelationInputSchema'
import { ReportAccessWhereUniqueInputSchema } from '../inputTypeSchemas/ReportAccessWhereUniqueInputSchema'

export const ReportAccessAggregateArgsSchema: z.ZodType<Prisma.ReportAccessAggregateArgs> = z
    .object({
        where: ReportAccessWhereInputSchema.optional(),
        orderBy: z.union([ReportAccessOrderByWithRelationInputSchema.array(), ReportAccessOrderByWithRelationInputSchema]).optional(),
        cursor: ReportAccessWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ReportAccessAggregateArgsSchema
