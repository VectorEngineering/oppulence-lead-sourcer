import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxShareOrderByRelevanceFieldEnumSchema } from './InboxShareOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const InboxShareOrderByRelevanceInputSchema: z.ZodType<Prisma.InboxShareOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => InboxShareOrderByRelevanceFieldEnumSchema),
            z.lazy(() => InboxShareOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default InboxShareOrderByRelevanceInputSchema
