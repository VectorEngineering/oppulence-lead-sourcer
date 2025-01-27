import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { jackson_indexOrderByRelevanceFieldEnumSchema } from './jackson_indexOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const jackson_indexOrderByRelevanceInputSchema: z.ZodType<Prisma.jackson_indexOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => jackson_indexOrderByRelevanceFieldEnumSchema),
            z.lazy(() => jackson_indexOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default jackson_indexOrderByRelevanceInputSchema
