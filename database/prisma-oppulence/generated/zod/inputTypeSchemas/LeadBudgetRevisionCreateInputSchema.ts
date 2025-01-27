import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetCreateNestedOneWithoutRevisionsInputSchema } from './LeadBudgetCreateNestedOneWithoutRevisionsInputSchema'

export const LeadBudgetRevisionCreateInputSchema: z.ZodType<Prisma.LeadBudgetRevisionCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        previousAmount: z.number(),
        newAmount: z.number(),
        reason: z.string(),
        approvedBy: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        budget: z.lazy(() => LeadBudgetCreateNestedOneWithoutRevisionsInputSchema)
    })
    .strict()

export default LeadBudgetRevisionCreateInputSchema
