import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitorUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadCompetitorUpdateManyMutationInputSchema'
import { LeadCompetitorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadCompetitorUncheckedUpdateManyInputSchema'
import { LeadCompetitorWhereInputSchema } from '../inputTypeSchemas/LeadCompetitorWhereInputSchema'

export const LeadCompetitorUpdateManyArgsSchema: z.ZodType<Prisma.LeadCompetitorUpdateManyArgs> = z
    .object({
        data: z.union([LeadCompetitorUpdateManyMutationInputSchema, LeadCompetitorUncheckedUpdateManyInputSchema]),
        where: LeadCompetitorWhereInputSchema.optional()
    })
    .strict()

export default LeadCompetitorUpdateManyArgsSchema
