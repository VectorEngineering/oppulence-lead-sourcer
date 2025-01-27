import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadScoreHistoryWhereInputSchema } from '../inputTypeSchemas/LeadScoreHistoryWhereInputSchema'

export const LeadScoreHistoryDeleteManyArgsSchema: z.ZodType<Prisma.LeadScoreHistoryDeleteManyArgs> = z
    .object({
        where: LeadScoreHistoryWhereInputSchema.optional()
    })
    .strict()

export default LeadScoreHistoryDeleteManyArgsSchema
