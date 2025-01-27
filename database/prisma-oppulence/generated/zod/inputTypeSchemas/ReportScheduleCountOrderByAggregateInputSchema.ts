import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportScheduleCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReportScheduleCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        reportId: z.lazy(() => SortOrderSchema).optional(),
        frequency: z.lazy(() => SortOrderSchema).optional(),
        dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
        dayOfMonth: z.lazy(() => SortOrderSchema).optional(),
        hour: z.lazy(() => SortOrderSchema).optional(),
        minute: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        lastRun: z.lazy(() => SortOrderSchema).optional(),
        nextRun: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportScheduleCountOrderByAggregateInputSchema
