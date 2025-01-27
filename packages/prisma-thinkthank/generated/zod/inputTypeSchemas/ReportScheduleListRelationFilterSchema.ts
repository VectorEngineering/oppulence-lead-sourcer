import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportScheduleWhereInputSchema } from './ReportScheduleWhereInputSchema'

export const ReportScheduleListRelationFilterSchema: z.ZodType<Prisma.ReportScheduleListRelationFilter> = z
    .object({
        every: z.lazy(() => ReportScheduleWhereInputSchema).optional(),
        some: z.lazy(() => ReportScheduleWhereInputSchema).optional(),
        none: z.lazy(() => ReportScheduleWhereInputSchema).optional()
    })
    .strict()

export default ReportScheduleListRelationFilterSchema
