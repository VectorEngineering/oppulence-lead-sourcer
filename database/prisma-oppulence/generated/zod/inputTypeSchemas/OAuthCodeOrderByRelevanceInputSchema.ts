import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeOrderByRelevanceFieldEnumSchema } from './OAuthCodeOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const OAuthCodeOrderByRelevanceInputSchema: z.ZodType<Prisma.OAuthCodeOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => OAuthCodeOrderByRelevanceFieldEnumSchema),
            z.lazy(() => OAuthCodeOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default OAuthCodeOrderByRelevanceInputSchema
