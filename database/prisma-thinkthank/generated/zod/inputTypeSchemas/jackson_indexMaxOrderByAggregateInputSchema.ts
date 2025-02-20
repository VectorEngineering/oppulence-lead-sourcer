import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const jackson_indexMaxOrderByAggregateInputSchema: z.ZodType<Prisma.jackson_indexMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        key: z.lazy(() => SortOrderSchema).optional(),
        storeKey: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default jackson_indexMaxOrderByAggregateInputSchema
