import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkTagOrderByRelevanceFieldEnumSchema } from './LinkTagOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LinkTagOrderByRelevanceInputSchema: z.ZodType<Prisma.LinkTagOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LinkTagOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LinkTagOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LinkTagOrderByRelevanceInputSchema
