import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadFeedbackCreateManyInputSchema } from '../inputTypeSchemas/LeadFeedbackCreateManyInputSchema'

export const LeadFeedbackCreateManyArgsSchema: z.ZodType<Prisma.LeadFeedbackCreateManyArgs> = z
    .object({
        data: z.union([LeadFeedbackCreateManyInputSchema, LeadFeedbackCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadFeedbackCreateManyArgsSchema
