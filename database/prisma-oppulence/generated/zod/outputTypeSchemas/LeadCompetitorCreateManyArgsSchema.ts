import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitorCreateManyInputSchema } from '../inputTypeSchemas/LeadCompetitorCreateManyInputSchema'

export const LeadCompetitorCreateManyArgsSchema: z.ZodType<Prisma.LeadCompetitorCreateManyArgs> = z
    .object({
        data: z.union([LeadCompetitorCreateManyInputSchema, LeadCompetitorCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadCompetitorCreateManyArgsSchema
