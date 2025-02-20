import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagOrderByRelevanceFieldEnumSchema } from './CustomerTagOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const CustomerTagOrderByRelevanceInputSchema: z.ZodType<Prisma.CustomerTagOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => CustomerTagOrderByRelevanceFieldEnumSchema),
            z.lazy(() => CustomerTagOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default CustomerTagOrderByRelevanceInputSchema
