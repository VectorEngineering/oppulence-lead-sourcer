import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetRevisionWhereInputSchema } from './LeadBudgetRevisionWhereInputSchema'

export const LeadBudgetRevisionListRelationFilterSchema: z.ZodType<Prisma.LeadBudgetRevisionListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadBudgetRevisionWhereInputSchema).optional(),
        some: z.lazy(() => LeadBudgetRevisionWhereInputSchema).optional(),
        none: z.lazy(() => LeadBudgetRevisionWhereInputSchema).optional()
    })
    .strict()

export default LeadBudgetRevisionListRelationFilterSchema
