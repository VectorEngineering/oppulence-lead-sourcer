import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const RestrictedTokenSumOrderByAggregateInputSchema: z.ZodType<Prisma.RestrictedTokenSumOrderByAggregateInput> = z
    .object({
        rateLimit: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default RestrictedTokenSumOrderByAggregateInputSchema
