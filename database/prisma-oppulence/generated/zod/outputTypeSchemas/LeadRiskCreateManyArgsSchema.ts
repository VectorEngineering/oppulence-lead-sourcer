import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadRiskCreateManyInputSchema } from '../inputTypeSchemas/LeadRiskCreateManyInputSchema'

export const LeadRiskCreateManyArgsSchema: z.ZodType<Prisma.LeadRiskCreateManyArgs> = z
    .object({
        data: z.union([LeadRiskCreateManyInputSchema, LeadRiskCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadRiskCreateManyArgsSchema
