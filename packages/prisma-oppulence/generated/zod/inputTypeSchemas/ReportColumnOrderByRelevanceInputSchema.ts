import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportColumnOrderByRelevanceFieldEnumSchema } from './ReportColumnOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportColumnOrderByRelevanceInputSchema: z.ZodType<Prisma.ReportColumnOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => ReportColumnOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ReportColumnOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default ReportColumnOrderByRelevanceInputSchema
