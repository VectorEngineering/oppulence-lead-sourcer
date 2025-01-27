import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetArgsSchema } from '../outputTypeSchemas/LeadBudgetArgsSchema'

export const LeadBudgetExpenseIncludeSchema: z.ZodType<Prisma.LeadBudgetExpenseInclude> = z
    .object({
        budget: z.union([z.boolean(), z.lazy(() => LeadBudgetArgsSchema)]).optional()
    })
    .strict()

export default LeadBudgetExpenseIncludeSchema
