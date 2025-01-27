import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitiveHistoryWhereInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryWhereInputSchema'

export const LeadCompetitiveHistoryDeleteManyArgsSchema: z.ZodType<Prisma.LeadCompetitiveHistoryDeleteManyArgs> = z
    .object({
        where: LeadCompetitiveHistoryWhereInputSchema.optional()
    })
    .strict()

export default LeadCompetitiveHistoryDeleteManyArgsSchema
