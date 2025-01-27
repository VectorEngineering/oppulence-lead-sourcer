import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { LeadCompetitiveHistoryCountOrderByAggregateInputSchema } from './LeadCompetitiveHistoryCountOrderByAggregateInputSchema'
import { LeadCompetitiveHistoryMaxOrderByAggregateInputSchema } from './LeadCompetitiveHistoryMaxOrderByAggregateInputSchema'
import { LeadCompetitiveHistoryMinOrderByAggregateInputSchema } from './LeadCompetitiveHistoryMinOrderByAggregateInputSchema'

export const LeadCompetitiveHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryOrderByWithAggregationInput> =
    z
        .object({
            id: z.lazy(() => SortOrderSchema).optional(),
            analysisId: z.lazy(() => SortOrderSchema).optional(),
            changes: z.lazy(() => SortOrderSchema).optional(),
            reason: z.lazy(() => SortOrderSchema).optional(),
            createdBy: z.lazy(() => SortOrderSchema).optional(),
            createdAt: z.lazy(() => SortOrderSchema).optional(),
            _count: z.lazy(() => LeadCompetitiveHistoryCountOrderByAggregateInputSchema).optional(),
            _max: z.lazy(() => LeadCompetitiveHistoryMaxOrderByAggregateInputSchema).optional(),
            _min: z.lazy(() => LeadCompetitiveHistoryMinOrderByAggregateInputSchema).optional()
        })
        .strict()

export default LeadCompetitiveHistoryOrderByWithAggregationInputSchema
