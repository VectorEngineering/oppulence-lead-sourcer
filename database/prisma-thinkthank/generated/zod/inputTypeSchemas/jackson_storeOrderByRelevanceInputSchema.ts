import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { jackson_storeOrderByRelevanceFieldEnumSchema } from './jackson_storeOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const jackson_storeOrderByRelevanceInputSchema: z.ZodType<Prisma.jackson_storeOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => jackson_storeOrderByRelevanceFieldEnumSchema),
            z.lazy(() => jackson_storeOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default jackson_storeOrderByRelevanceInputSchema
