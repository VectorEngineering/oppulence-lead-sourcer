import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportScheduleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReportScheduleOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportScheduleOrderByRelationAggregateInputSchema
