import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetExpenseIncludeSchema } from '../inputTypeSchemas/LeadBudgetExpenseIncludeSchema'
import { LeadBudgetExpenseWhereUniqueInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseWhereUniqueInputSchema'
import { LeadBudgetExpenseCreateInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseCreateInputSchema'
import { LeadBudgetExpenseUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseUncheckedCreateInputSchema'
import { LeadBudgetExpenseUpdateInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseUpdateInputSchema'
import { LeadBudgetExpenseUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadBudgetExpenseUncheckedUpdateInputSchema'
import { LeadBudgetArgsSchema } from './LeadBudgetArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadBudgetExpenseSelectSchema: z.ZodType<Prisma.LeadBudgetExpenseSelect> = z
    .object({
        id: z.boolean().optional(),
        budgetId: z.boolean().optional(),
        amount: z.boolean().optional(),
        category: z.boolean().optional(),
        description: z.boolean().optional(),
        receipt: z.boolean().optional(),
        expenseDate: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        budget: z.union([z.boolean(), z.lazy(() => LeadBudgetArgsSchema)]).optional()
    })
    .strict()

export const LeadBudgetExpenseUpsertArgsSchema: z.ZodType<Prisma.LeadBudgetExpenseUpsertArgs> = z
    .object({
        select: LeadBudgetExpenseSelectSchema.optional(),
        include: LeadBudgetExpenseIncludeSchema.optional(),
        where: LeadBudgetExpenseWhereUniqueInputSchema,
        create: z.union([LeadBudgetExpenseCreateInputSchema, LeadBudgetExpenseUncheckedCreateInputSchema]),
        update: z.union([LeadBudgetExpenseUpdateInputSchema, LeadBudgetExpenseUncheckedUpdateInputSchema])
    })
    .strict()

export default LeadBudgetExpenseUpsertArgsSchema
