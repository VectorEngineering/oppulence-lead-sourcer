import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppOrderByRelevanceFieldEnumSchema } from './OAuthAppOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const OAuthAppOrderByRelevanceInputSchema: z.ZodType<Prisma.OAuthAppOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => OAuthAppOrderByRelevanceFieldEnumSchema),
            z.lazy(() => OAuthAppOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default OAuthAppOrderByRelevanceInputSchema
