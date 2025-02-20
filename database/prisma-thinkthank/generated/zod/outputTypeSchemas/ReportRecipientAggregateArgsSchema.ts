import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportRecipientWhereInputSchema } from '../inputTypeSchemas/ReportRecipientWhereInputSchema'
import { ReportRecipientOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportRecipientOrderByWithRelationInputSchema'
import { ReportRecipientWhereUniqueInputSchema } from '../inputTypeSchemas/ReportRecipientWhereUniqueInputSchema'

export const ReportRecipientAggregateArgsSchema: z.ZodType<Prisma.ReportRecipientAggregateArgs> = z
    .object({
        where: ReportRecipientWhereInputSchema.optional(),
        orderBy: z.union([ReportRecipientOrderByWithRelationInputSchema.array(), ReportRecipientOrderByWithRelationInputSchema]).optional(),
        cursor: ReportRecipientWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ReportRecipientAggregateArgsSchema
