import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TokenOrderByRelevanceFieldEnumSchema } from './TokenOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const TokenOrderByRelevanceInputSchema: z.ZodType<Prisma.TokenOrderByRelevanceInput> = z
    .object({
        fields: z.union([z.lazy(() => TokenOrderByRelevanceFieldEnumSchema), z.lazy(() => TokenOrderByRelevanceFieldEnumSchema).array()]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default TokenOrderByRelevanceInputSchema
