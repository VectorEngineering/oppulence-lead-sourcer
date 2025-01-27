import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadRiskMinOrderByAggregateInputSchema: z.ZodType<Prisma.LeadRiskMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        category: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        impact: z.lazy(() => SortOrderSchema).optional(),
        probability: z.lazy(() => SortOrderSchema).optional(),
        mitigation: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadRiskMinOrderByAggregateInputSchema
