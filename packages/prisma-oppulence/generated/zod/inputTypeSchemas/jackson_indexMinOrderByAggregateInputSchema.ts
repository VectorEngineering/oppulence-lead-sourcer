import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const jackson_indexMinOrderByAggregateInputSchema: z.ZodType<Prisma.jackson_indexMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        key: z.lazy(() => SortOrderSchema).optional(),
        storeKey: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default jackson_indexMinOrderByAggregateInputSchema
