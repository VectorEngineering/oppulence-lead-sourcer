import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportScheduleOrderByRelevanceFieldEnumSchema } from './ReportScheduleOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportScheduleOrderByRelevanceInputSchema: z.ZodType<Prisma.ReportScheduleOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => ReportScheduleOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ReportScheduleOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default ReportScheduleOrderByRelevanceInputSchema
