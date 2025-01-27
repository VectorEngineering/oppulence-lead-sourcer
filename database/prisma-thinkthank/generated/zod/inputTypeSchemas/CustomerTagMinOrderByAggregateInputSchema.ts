import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const CustomerTagMinOrderByAggregateInputSchema: z.ZodType<Prisma.CustomerTagMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        customerId: z.lazy(() => SortOrderSchema).optional(),
        tagId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default CustomerTagMinOrderByAggregateInputSchema
