import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadBudgetRevisionUncheckedCreateInputSchema: z.ZodType<Prisma.LeadBudgetRevisionUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        budgetId: z.string(),
        previousAmount: z.number(),
        newAmount: z.number(),
        reason: z.string(),
        approvedBy: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional()
    })
    .strict()

export default LeadBudgetRevisionUncheckedCreateInputSchema
