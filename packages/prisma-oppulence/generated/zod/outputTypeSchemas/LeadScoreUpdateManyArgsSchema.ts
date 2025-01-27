import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadScoreUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadScoreUpdateManyMutationInputSchema'
import { LeadScoreUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadScoreUncheckedUpdateManyInputSchema'
import { LeadScoreWhereInputSchema } from '../inputTypeSchemas/LeadScoreWhereInputSchema'

export const LeadScoreUpdateManyArgsSchema: z.ZodType<Prisma.LeadScoreUpdateManyArgs> = z
    .object({
        data: z.union([LeadScoreUpdateManyMutationInputSchema, LeadScoreUncheckedUpdateManyInputSchema]),
        where: LeadScoreWhereInputSchema.optional()
    })
    .strict()

export default LeadScoreUpdateManyArgsSchema
