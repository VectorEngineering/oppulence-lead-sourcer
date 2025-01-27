import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortDirectionSchema } from './SortDirectionSchema'

export const ReportSortingUncheckedCreateWithoutReportInputSchema: z.ZodType<Prisma.ReportSortingUncheckedCreateWithoutReportInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        direction: z.lazy(() => SortDirectionSchema),
        position: z.number().int()
    })
    .strict()

export default ReportSortingUncheckedCreateWithoutReportInputSchema
