import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportRecipientOrderByRelevanceFieldEnumSchema } from './ReportRecipientOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportRecipientOrderByRelevanceInputSchema: z.ZodType<Prisma.ReportRecipientOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => ReportRecipientOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ReportRecipientOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default ReportRecipientOrderByRelevanceInputSchema
