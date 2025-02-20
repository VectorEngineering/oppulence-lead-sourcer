import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortDirectionSchema } from './SortDirectionSchema'

export const ReportSortingCreateManyReportInputSchema: z.ZodType<Prisma.ReportSortingCreateManyReportInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        direction: z.lazy(() => SortDirectionSchema),
        position: z.number().int()
    })
    .strict()

export default ReportSortingCreateManyReportInputSchema
