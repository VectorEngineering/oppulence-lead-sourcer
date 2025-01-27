import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitorWhereInputSchema } from '../inputTypeSchemas/LeadCompetitorWhereInputSchema'

export const LeadCompetitorDeleteManyArgsSchema: z.ZodType<Prisma.LeadCompetitorDeleteManyArgs> = z
    .object({
        where: LeadCompetitorWhereInputSchema.optional()
    })
    .strict()

export default LeadCompetitorDeleteManyArgsSchema
