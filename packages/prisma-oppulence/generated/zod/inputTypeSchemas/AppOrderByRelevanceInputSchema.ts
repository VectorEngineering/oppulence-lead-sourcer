import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppOrderByRelevanceFieldEnumSchema } from './AppOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const AppOrderByRelevanceInputSchema: z.ZodType<Prisma.AppOrderByRelevanceInput> = z
    .object({
        fields: z.union([z.lazy(() => AppOrderByRelevanceFieldEnumSchema), z.lazy(() => AppOrderByRelevanceFieldEnumSchema).array()]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default AppOrderByRelevanceInputSchema
