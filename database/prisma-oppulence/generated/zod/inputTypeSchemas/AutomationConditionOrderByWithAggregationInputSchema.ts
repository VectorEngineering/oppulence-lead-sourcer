import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { AutomationConditionCountOrderByAggregateInputSchema } from './AutomationConditionCountOrderByAggregateInputSchema'
import { AutomationConditionMaxOrderByAggregateInputSchema } from './AutomationConditionMaxOrderByAggregateInputSchema'
import { AutomationConditionMinOrderByAggregateInputSchema } from './AutomationConditionMinOrderByAggregateInputSchema'

export const AutomationConditionOrderByWithAggregationInputSchema: z.ZodType<Prisma.AutomationConditionOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        automationId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        operator: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => AutomationConditionCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => AutomationConditionMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => AutomationConditionMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default AutomationConditionOrderByWithAggregationInputSchema
