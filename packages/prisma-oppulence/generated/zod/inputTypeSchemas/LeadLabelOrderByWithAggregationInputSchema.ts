import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadLabelCountOrderByAggregateInputSchema } from './LeadLabelCountOrderByAggregateInputSchema'
import { LeadLabelMaxOrderByAggregateInputSchema } from './LeadLabelMaxOrderByAggregateInputSchema'
import { LeadLabelMinOrderByAggregateInputSchema } from './LeadLabelMinOrderByAggregateInputSchema'

export const LeadLabelOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadLabelOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        color: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LeadLabelCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LeadLabelMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LeadLabelMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LeadLabelOrderByWithAggregationInputSchema
