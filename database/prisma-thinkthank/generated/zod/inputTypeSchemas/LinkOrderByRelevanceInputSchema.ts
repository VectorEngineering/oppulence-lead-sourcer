import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkOrderByRelevanceFieldEnumSchema } from './LinkOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LinkOrderByRelevanceInputSchema: z.ZodType<Prisma.LinkOrderByRelevanceInput> = z
    .object({
        fields: z.union([z.lazy(() => LinkOrderByRelevanceFieldEnumSchema), z.lazy(() => LinkOrderByRelevanceFieldEnumSchema).array()]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LinkOrderByRelevanceInputSchema
