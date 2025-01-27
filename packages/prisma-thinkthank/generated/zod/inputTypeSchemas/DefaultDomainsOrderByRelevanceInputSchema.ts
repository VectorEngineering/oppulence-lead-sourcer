import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DefaultDomainsOrderByRelevanceFieldEnumSchema } from './DefaultDomainsOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const DefaultDomainsOrderByRelevanceInputSchema: z.ZodType<Prisma.DefaultDomainsOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => DefaultDomainsOrderByRelevanceFieldEnumSchema),
            z.lazy(() => DefaultDomainsOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default DefaultDomainsOrderByRelevanceInputSchema
