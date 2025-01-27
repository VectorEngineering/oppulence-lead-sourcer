import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadComplianceHistoryWhereInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryWhereInputSchema'

export const LeadComplianceHistoryDeleteManyArgsSchema: z.ZodType<Prisma.LeadComplianceHistoryDeleteManyArgs> = z
    .object({
        where: LeadComplianceHistoryWhereInputSchema.optional()
    })
    .strict()

export default LeadComplianceHistoryDeleteManyArgsSchema
