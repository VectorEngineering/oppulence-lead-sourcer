import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetWhereInputSchema } from './LeadBudgetWhereInputSchema'

export const LeadBudgetListRelationFilterSchema: z.ZodType<Prisma.LeadBudgetListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadBudgetWhereInputSchema).optional(),
        some: z.lazy(() => LeadBudgetWhereInputSchema).optional(),
        none: z.lazy(() => LeadBudgetWhereInputSchema).optional()
    })
    .strict()

export default LeadBudgetListRelationFilterSchema
