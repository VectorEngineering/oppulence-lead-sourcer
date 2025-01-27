import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessOrderByRelevanceFieldEnumSchema } from './ReportAccessOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportAccessOrderByRelevanceInputSchema: z.ZodType<Prisma.ReportAccessOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => ReportAccessOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ReportAccessOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default ReportAccessOrderByRelevanceInputSchema
