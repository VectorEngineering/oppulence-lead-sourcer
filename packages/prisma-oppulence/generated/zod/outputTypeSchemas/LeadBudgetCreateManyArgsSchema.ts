import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetCreateManyInputSchema } from '../inputTypeSchemas/LeadBudgetCreateManyInputSchema'

export const LeadBudgetCreateManyArgsSchema: z.ZodType<Prisma.LeadBudgetCreateManyArgs> = z
    .object({
        data: z.union([LeadBudgetCreateManyInputSchema, LeadBudgetCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadBudgetCreateManyArgsSchema
