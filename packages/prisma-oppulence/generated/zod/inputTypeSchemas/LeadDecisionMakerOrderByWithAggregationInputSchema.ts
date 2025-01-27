import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadDecisionMakerCountOrderByAggregateInputSchema } from './LeadDecisionMakerCountOrderByAggregateInputSchema'
import { LeadDecisionMakerMaxOrderByAggregateInputSchema } from './LeadDecisionMakerMaxOrderByAggregateInputSchema'
import { LeadDecisionMakerMinOrderByAggregateInputSchema } from './LeadDecisionMakerMinOrderByAggregateInputSchema'

export const LeadDecisionMakerOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadDecisionMakerOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        title: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        phone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        influence: z.lazy(() => SortOrderSchema).optional(),
        notes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => LeadDecisionMakerCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LeadDecisionMakerMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LeadDecisionMakerMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LeadDecisionMakerOrderByWithAggregationInputSchema
