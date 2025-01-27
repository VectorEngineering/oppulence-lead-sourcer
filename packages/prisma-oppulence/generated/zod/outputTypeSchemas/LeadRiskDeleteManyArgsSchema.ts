import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadRiskWhereInputSchema } from '../inputTypeSchemas/LeadRiskWhereInputSchema'

export const LeadRiskDeleteManyArgsSchema: z.ZodType<Prisma.LeadRiskDeleteManyArgs> = z
    .object({
        where: LeadRiskWhereInputSchema.optional()
    })
    .strict()

export default LeadRiskDeleteManyArgsSchema
