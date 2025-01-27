import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTaskCreateManyInputSchema } from '../inputTypeSchemas/LeadTaskCreateManyInputSchema'

export const LeadTaskCreateManyArgsSchema: z.ZodType<Prisma.LeadTaskCreateManyArgs> = z
    .object({
        data: z.union([LeadTaskCreateManyInputSchema, LeadTaskCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadTaskCreateManyArgsSchema
