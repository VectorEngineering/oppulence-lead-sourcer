import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadDecisionMakerWhereInputSchema } from '../inputTypeSchemas/LeadDecisionMakerWhereInputSchema'

export const LeadDecisionMakerDeleteManyArgsSchema: z.ZodType<Prisma.LeadDecisionMakerDeleteManyArgs> = z
    .object({
        where: LeadDecisionMakerWhereInputSchema.optional()
    })
    .strict()

export default LeadDecisionMakerDeleteManyArgsSchema
