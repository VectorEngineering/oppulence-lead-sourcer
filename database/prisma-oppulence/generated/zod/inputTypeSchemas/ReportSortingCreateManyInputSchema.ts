import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortDirectionSchema } from './SortDirectionSchema'

export const ReportSortingCreateManyInputSchema: z.ZodType<Prisma.ReportSortingCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        reportId: z.string(),
        field: z.string(),
        direction: z.lazy(() => SortDirectionSchema),
        position: z.number().int()
    })
    .strict()

export default ReportSortingCreateManyInputSchema
