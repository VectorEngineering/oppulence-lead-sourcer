import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadLabelCreateManyInputSchema } from '../inputTypeSchemas/LeadLabelCreateManyInputSchema'

export const LeadLabelCreateManyArgsSchema: z.ZodType<Prisma.LeadLabelCreateManyArgs> = z
    .object({
        data: z.union([LeadLabelCreateManyInputSchema, LeadLabelCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadLabelCreateManyArgsSchema
