import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadRiskUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadRiskUpdateManyMutationInputSchema'
import { LeadRiskUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadRiskUncheckedUpdateManyInputSchema'
import { LeadRiskWhereInputSchema } from '../inputTypeSchemas/LeadRiskWhereInputSchema'

export const LeadRiskUpdateManyArgsSchema: z.ZodType<Prisma.LeadRiskUpdateManyArgs> = z
    .object({
        data: z.union([LeadRiskUpdateManyMutationInputSchema, LeadRiskUncheckedUpdateManyInputSchema]),
        where: LeadRiskWhereInputSchema.optional()
    })
    .strict()

export default LeadRiskUpdateManyArgsSchema
