import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const LeadBudgetCountOutputTypeSelectSchema: z.ZodType<Prisma.LeadBudgetCountOutputTypeSelect> = z
    .object({
        revisions: z.boolean().optional(),
        expenses: z.boolean().optional()
    })
    .strict()

export default LeadBudgetCountOutputTypeSelectSchema
