import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetArgsSchema } from '../outputTypeSchemas/LeadBudgetArgsSchema'

export const LeadBudgetRevisionSelectSchema: z.ZodType<Prisma.LeadBudgetRevisionSelect> = z
    .object({
        id: z.boolean().optional(),
        budgetId: z.boolean().optional(),
        previousAmount: z.boolean().optional(),
        newAmount: z.boolean().optional(),
        reason: z.boolean().optional(),
        approvedBy: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        budget: z.union([z.boolean(), z.lazy(() => LeadBudgetArgsSchema)]).optional()
    })
    .strict()

export default LeadBudgetRevisionSelectSchema
