import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardOrderByRelevanceFieldEnumSchema } from './DashboardOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const DashboardOrderByRelevanceInputSchema: z.ZodType<Prisma.DashboardOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => DashboardOrderByRelevanceFieldEnumSchema),
            z.lazy(() => DashboardOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default DashboardOrderByRelevanceInputSchema
