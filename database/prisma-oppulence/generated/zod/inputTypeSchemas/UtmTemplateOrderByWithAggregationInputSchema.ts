import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { UtmTemplateCountOrderByAggregateInputSchema } from './UtmTemplateCountOrderByAggregateInputSchema'
import { UtmTemplateMaxOrderByAggregateInputSchema } from './UtmTemplateMaxOrderByAggregateInputSchema'
import { UtmTemplateMinOrderByAggregateInputSchema } from './UtmTemplateMinOrderByAggregateInputSchema'

export const UtmTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.UtmTemplateOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        utm_source: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        utm_medium: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        utm_campaign: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        utm_term: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        utm_content: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        ref: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        userId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        projectId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => UtmTemplateCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => UtmTemplateMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => UtmTemplateMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default UtmTemplateOrderByWithAggregationInputSchema
