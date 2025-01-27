import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetRevisionCreateManyInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionCreateManyInputSchema'

export const LeadBudgetRevisionCreateManyArgsSchema: z.ZodType<Prisma.LeadBudgetRevisionCreateManyArgs> = z
    .object({
        data: z.union([LeadBudgetRevisionCreateManyInputSchema, LeadBudgetRevisionCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadBudgetRevisionCreateManyArgsSchema
