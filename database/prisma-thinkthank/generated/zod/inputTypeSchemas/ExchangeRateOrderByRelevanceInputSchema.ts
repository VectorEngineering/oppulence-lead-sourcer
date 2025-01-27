import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ExchangeRateOrderByRelevanceFieldEnumSchema } from './ExchangeRateOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ExchangeRateOrderByRelevanceInputSchema: z.ZodType<Prisma.ExchangeRateOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => ExchangeRateOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ExchangeRateOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default ExchangeRateOrderByRelevanceInputSchema
