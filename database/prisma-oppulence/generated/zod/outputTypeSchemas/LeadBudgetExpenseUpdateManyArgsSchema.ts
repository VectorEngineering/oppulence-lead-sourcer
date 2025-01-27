import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetExpenseUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseUpdateManyMutationInputSchema'
import { LeadBudgetExpenseUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseUncheckedUpdateManyInputSchema'
import { LeadBudgetExpenseWhereInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseWhereInputSchema'

export const LeadBudgetExpenseUpdateManyArgsSchema: z.ZodType<Prisma.LeadBudgetExpenseUpdateManyArgs> = z
    .object({
        data: z.union([LeadBudgetExpenseUpdateManyMutationInputSchema, LeadBudgetExpenseUncheckedUpdateManyInputSchema]),
        where: LeadBudgetExpenseWhereInputSchema.optional()
    })
    .strict()

export default LeadBudgetExpenseUpdateManyArgsSchema
