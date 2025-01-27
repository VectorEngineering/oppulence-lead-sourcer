import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportRecipientWhereInputSchema } from '../inputTypeSchemas/ReportRecipientWhereInputSchema'
import { ReportRecipientOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReportRecipientOrderByWithAggregationInputSchema'
import { ReportRecipientScalarFieldEnumSchema } from '../inputTypeSchemas/ReportRecipientScalarFieldEnumSchema'
import { ReportRecipientScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReportRecipientScalarWhereWithAggregatesInputSchema'

export const ReportRecipientGroupByArgsSchema: z.ZodType<Prisma.ReportRecipientGroupByArgs> = z
    .object({
        where: ReportRecipientWhereInputSchema.optional(),
        orderBy: z
            .union([ReportRecipientOrderByWithAggregationInputSchema.array(), ReportRecipientOrderByWithAggregationInputSchema])
            .optional(),
        by: ReportRecipientScalarFieldEnumSchema.array(),
        having: ReportRecipientScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ReportRecipientGroupByArgsSchema
