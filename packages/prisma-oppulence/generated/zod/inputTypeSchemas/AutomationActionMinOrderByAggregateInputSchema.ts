import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const AutomationActionMinOrderByAggregateInputSchema: z.ZodType<Prisma.AutomationActionMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        automationId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        template: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default AutomationActionMinOrderByAggregateInputSchema
