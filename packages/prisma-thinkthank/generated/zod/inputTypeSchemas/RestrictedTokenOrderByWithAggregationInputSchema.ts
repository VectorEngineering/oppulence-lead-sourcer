import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { RestrictedTokenCountOrderByAggregateInputSchema } from './RestrictedTokenCountOrderByAggregateInputSchema'
import { RestrictedTokenAvgOrderByAggregateInputSchema } from './RestrictedTokenAvgOrderByAggregateInputSchema'
import { RestrictedTokenMaxOrderByAggregateInputSchema } from './RestrictedTokenMaxOrderByAggregateInputSchema'
import { RestrictedTokenMinOrderByAggregateInputSchema } from './RestrictedTokenMinOrderByAggregateInputSchema'
import { RestrictedTokenSumOrderByAggregateInputSchema } from './RestrictedTokenSumOrderByAggregateInputSchema'

export const RestrictedTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.RestrictedTokenOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        hashedKey: z.lazy(() => SortOrderSchema).optional(),
        partialKey: z.lazy(() => SortOrderSchema).optional(),
        scopes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        expires: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lastUsed: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        rateLimit: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        installationId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => RestrictedTokenCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => RestrictedTokenAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => RestrictedTokenMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => RestrictedTokenMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => RestrictedTokenSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default RestrictedTokenOrderByWithAggregationInputSchema
