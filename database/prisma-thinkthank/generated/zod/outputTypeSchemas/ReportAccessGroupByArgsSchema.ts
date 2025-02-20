import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportAccessWhereInputSchema } from '../inputTypeSchemas/ReportAccessWhereInputSchema'
import { ReportAccessOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReportAccessOrderByWithAggregationInputSchema'
import { ReportAccessScalarFieldEnumSchema } from '../inputTypeSchemas/ReportAccessScalarFieldEnumSchema'
import { ReportAccessScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReportAccessScalarWhereWithAggregatesInputSchema'

export const ReportAccessGroupByArgsSchema: z.ZodType<Prisma.ReportAccessGroupByArgs> = z
    .object({
        where: ReportAccessWhereInputSchema.optional(),
        orderBy: z.union([ReportAccessOrderByWithAggregationInputSchema.array(), ReportAccessOrderByWithAggregationInputSchema]).optional(),
        by: ReportAccessScalarFieldEnumSchema.array(),
        having: ReportAccessScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ReportAccessGroupByArgsSchema
