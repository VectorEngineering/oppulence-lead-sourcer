import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadComplianceHistoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryUpdateManyMutationInputSchema'
import { LeadComplianceHistoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryUncheckedUpdateManyInputSchema'
import { LeadComplianceHistoryWhereInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryWhereInputSchema'

export const LeadComplianceHistoryUpdateManyArgsSchema: z.ZodType<Prisma.LeadComplianceHistoryUpdateManyArgs> = z
    .object({
        data: z.union([LeadComplianceHistoryUpdateManyMutationInputSchema, LeadComplianceHistoryUncheckedUpdateManyInputSchema]),
        where: LeadComplianceHistoryWhereInputSchema.optional()
    })
    .strict()

export default LeadComplianceHistoryUpdateManyArgsSchema
