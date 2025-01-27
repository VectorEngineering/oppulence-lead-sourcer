import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionCategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionCategoryMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        slug: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        color: z.lazy(() => SortOrderSchema).optional(),
        icon: z.lazy(() => SortOrderSchema).optional(),
        parentId: z.lazy(() => SortOrderSchema).optional(),
        path: z.lazy(() => SortOrderSchema).optional(),
        level: z.lazy(() => SortOrderSchema).optional(),
        isSystem: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        budgetLimit: z.lazy(() => SortOrderSchema).optional(),
        warningThreshold: z.lazy(() => SortOrderSchema).optional(),
        trackingEnabled: z.lazy(() => SortOrderSchema).optional(),
        vatRate: z.lazy(() => SortOrderSchema).optional(),
        taxCode: z.lazy(() => SortOrderSchema).optional(),
        taxDeductible: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default TransactionCategoryMinOrderByAggregateInputSchema
