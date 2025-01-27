import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortDirectionSchema } from './SortDirectionSchema'

export const ReportSortingUncheckedCreateInputSchema: z.ZodType<Prisma.ReportSortingUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        reportId: z.string(),
        field: z.string(),
        direction: z.lazy(() => SortDirectionSchema),
        position: z.number().int()
    })
    .strict()

export default ReportSortingUncheckedCreateInputSchema
