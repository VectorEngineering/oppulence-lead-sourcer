import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SentEmailOrderByRelevanceFieldEnumSchema } from './SentEmailOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const SentEmailOrderByRelevanceInputSchema: z.ZodType<Prisma.SentEmailOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => SentEmailOrderByRelevanceFieldEnumSchema),
            z.lazy(() => SentEmailOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default SentEmailOrderByRelevanceInputSchema
