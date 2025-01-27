import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportScheduleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReportScheduleAvgOrderByAggregateInput> = z
    .object({
        dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
        dayOfMonth: z.lazy(() => SortOrderSchema).optional(),
        hour: z.lazy(() => SortOrderSchema).optional(),
        minute: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportScheduleAvgOrderByAggregateInputSchema
