import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const AppMinOrderByAggregateInputSchema: z.ZodType<Prisma.AppMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        appId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default AppMinOrderByAggregateInputSchema
