import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadHistoryCreateManyInputSchema } from '../inputTypeSchemas/LeadHistoryCreateManyInputSchema'

export const LeadHistoryCreateManyArgsSchema: z.ZodType<Prisma.LeadHistoryCreateManyArgs> = z
    .object({
        data: z.union([LeadHistoryCreateManyInputSchema, LeadHistoryCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadHistoryCreateManyArgsSchema
