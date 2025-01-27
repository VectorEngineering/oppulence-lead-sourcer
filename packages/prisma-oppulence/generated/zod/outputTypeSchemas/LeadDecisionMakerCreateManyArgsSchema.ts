import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadDecisionMakerCreateManyInputSchema } from '../inputTypeSchemas/LeadDecisionMakerCreateManyInputSchema'

export const LeadDecisionMakerCreateManyArgsSchema: z.ZodType<Prisma.LeadDecisionMakerCreateManyArgs> = z
    .object({
        data: z.union([LeadDecisionMakerCreateManyInputSchema, LeadDecisionMakerCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadDecisionMakerCreateManyArgsSchema
