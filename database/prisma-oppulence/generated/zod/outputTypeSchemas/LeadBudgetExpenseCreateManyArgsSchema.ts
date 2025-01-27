import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetExpenseCreateManyInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseCreateManyInputSchema'

export const LeadBudgetExpenseCreateManyArgsSchema: z.ZodType<Prisma.LeadBudgetExpenseCreateManyArgs> = z
    .object({
        data: z.union([LeadBudgetExpenseCreateManyInputSchema, LeadBudgetExpenseCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadBudgetExpenseCreateManyArgsSchema
