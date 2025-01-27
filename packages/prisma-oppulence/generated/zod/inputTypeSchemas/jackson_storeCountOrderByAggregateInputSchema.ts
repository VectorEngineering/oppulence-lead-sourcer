import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const jackson_storeCountOrderByAggregateInputSchema: z.ZodType<Prisma.jackson_storeCountOrderByAggregateInput> = z
    .object({
        key: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        iv: z.lazy(() => SortOrderSchema).optional(),
        tag: z.lazy(() => SortOrderSchema).optional(),
        namespace: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        modifiedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default jackson_storeCountOrderByAggregateInputSchema
