import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ReportOrderByWithRelationInputSchema } from './ReportOrderByWithRelationInputSchema'
import { ReportScheduleOrderByRelevanceInputSchema } from './ReportScheduleOrderByRelevanceInputSchema'

export const ReportScheduleOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportScheduleOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        reportId: z.lazy(() => SortOrderSchema).optional(),
        frequency: z.lazy(() => SortOrderSchema).optional(),
        dayOfWeek: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        dayOfMonth: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        hour: z.lazy(() => SortOrderSchema).optional(),
        minute: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        lastRun: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        nextRun: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        report: z.lazy(() => ReportOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => ReportScheduleOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default ReportScheduleOrderByWithRelationInputSchema
