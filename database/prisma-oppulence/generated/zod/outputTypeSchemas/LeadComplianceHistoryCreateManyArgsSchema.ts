import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadComplianceHistoryCreateManyInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryCreateManyInputSchema'

export const LeadComplianceHistoryCreateManyArgsSchema: z.ZodType<Prisma.LeadComplianceHistoryCreateManyArgs> = z
    .object({
        data: z.union([LeadComplianceHistoryCreateManyInputSchema, LeadComplianceHistoryCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadComplianceHistoryCreateManyArgsSchema
