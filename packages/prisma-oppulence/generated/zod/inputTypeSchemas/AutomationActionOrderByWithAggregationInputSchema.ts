import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { AutomationActionCountOrderByAggregateInputSchema } from './AutomationActionCountOrderByAggregateInputSchema'
import { AutomationActionMaxOrderByAggregateInputSchema } from './AutomationActionMaxOrderByAggregateInputSchema'
import { AutomationActionMinOrderByAggregateInputSchema } from './AutomationActionMinOrderByAggregateInputSchema'

export const AutomationActionOrderByWithAggregationInputSchema: z.ZodType<Prisma.AutomationActionOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        automationId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        template: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => AutomationActionCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => AutomationActionMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => AutomationActionMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default AutomationActionOrderByWithAggregationInputSchema
