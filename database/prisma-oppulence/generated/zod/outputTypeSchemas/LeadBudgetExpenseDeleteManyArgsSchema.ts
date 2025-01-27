import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetExpenseWhereInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseWhereInputSchema'

export const LeadBudgetExpenseDeleteManyArgsSchema: z.ZodType<Prisma.LeadBudgetExpenseDeleteManyArgs> = z
    .object({
        where: LeadBudgetExpenseWhereInputSchema.optional()
    })
    .strict()

export default LeadBudgetExpenseDeleteManyArgsSchema
