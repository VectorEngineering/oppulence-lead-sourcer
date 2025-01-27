import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DealActivityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DealActivityMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        dealId: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        title: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        outcome: z.lazy(() => SortOrderSchema).optional(),
        duration: z.lazy(() => SortOrderSchema).optional(),
        scheduledAt: z.lazy(() => SortOrderSchema).optional(),
        completedAt: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DealActivityMaxOrderByAggregateInputSchema
