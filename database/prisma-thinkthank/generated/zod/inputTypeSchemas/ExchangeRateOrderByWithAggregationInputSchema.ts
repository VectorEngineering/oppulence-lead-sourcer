import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ExchangeRateCountOrderByAggregateInputSchema } from './ExchangeRateCountOrderByAggregateInputSchema'
import { ExchangeRateAvgOrderByAggregateInputSchema } from './ExchangeRateAvgOrderByAggregateInputSchema'
import { ExchangeRateMaxOrderByAggregateInputSchema } from './ExchangeRateMaxOrderByAggregateInputSchema'
import { ExchangeRateMinOrderByAggregateInputSchema } from './ExchangeRateMinOrderByAggregateInputSchema'
import { ExchangeRateSumOrderByAggregateInputSchema } from './ExchangeRateSumOrderByAggregateInputSchema'

export const ExchangeRateOrderByWithAggregationInputSchema: z.ZodType<Prisma.ExchangeRateOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        baseCurrency: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        targetCurrency: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        rate: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => ExchangeRateCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => ExchangeRateAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ExchangeRateMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ExchangeRateMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => ExchangeRateSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default ExchangeRateOrderByWithAggregationInputSchema
