import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DealSumOrderByAggregateInputSchema: z.ZodType<Prisma.DealSumOrderByAggregateInput> = z
    .object({
        value: z.lazy(() => SortOrderSchema).optional(),
        probability: z.lazy(() => SortOrderSchema).optional(),
        expectedRevenue: z.lazy(() => SortOrderSchema).optional(),
        synergyPotential: z.lazy(() => SortOrderSchema).optional(),
        estimatedProfitMargin: z.lazy(() => SortOrderSchema).optional(),
        progress: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DealSumOrderByAggregateInputSchema
