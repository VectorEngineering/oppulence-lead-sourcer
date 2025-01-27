import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ExchangeRateMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ExchangeRateMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        baseCurrency: z.lazy(() => SortOrderSchema).optional(),
        targetCurrency: z.lazy(() => SortOrderSchema).optional(),
        rate: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ExchangeRateMaxOrderByAggregateInputSchema
