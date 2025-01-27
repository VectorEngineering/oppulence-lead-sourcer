import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportRecipientOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReportRecipientOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportRecipientOrderByRelationAggregateInputSchema
