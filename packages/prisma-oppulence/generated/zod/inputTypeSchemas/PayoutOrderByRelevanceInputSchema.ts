import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutOrderByRelevanceFieldEnumSchema } from './PayoutOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PayoutOrderByRelevanceInputSchema: z.ZodType<Prisma.PayoutOrderByRelevanceInput> = z
    .object({
        fields: z.union([z.lazy(() => PayoutOrderByRelevanceFieldEnumSchema), z.lazy(() => PayoutOrderByRelevanceFieldEnumSchema).array()]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default PayoutOrderByRelevanceInputSchema
