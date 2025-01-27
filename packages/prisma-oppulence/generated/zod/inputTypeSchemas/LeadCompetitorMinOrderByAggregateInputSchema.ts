import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadCompetitorMinOrderByAggregateInputSchema: z.ZodType<Prisma.LeadCompetitorMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        strengths: z.lazy(() => SortOrderSchema).optional(),
        weaknesses: z.lazy(() => SortOrderSchema).optional(),
        pricing: z.lazy(() => SortOrderSchema).optional(),
        differentiator: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadCompetitorMinOrderByAggregateInputSchema
