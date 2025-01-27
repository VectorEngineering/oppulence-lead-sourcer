import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadRequirementCountOrderByAggregateInputSchema: z.ZodType<Prisma.LeadRequirementCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        category: z.lazy(() => SortOrderSchema).optional(),
        priority: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        notes: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadRequirementCountOrderByAggregateInputSchema
