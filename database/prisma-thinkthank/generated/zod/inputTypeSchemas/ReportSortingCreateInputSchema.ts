import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortDirectionSchema } from './SortDirectionSchema'
import { ReportCreateNestedOneWithoutSortingsInputSchema } from './ReportCreateNestedOneWithoutSortingsInputSchema'

export const ReportSortingCreateInputSchema: z.ZodType<Prisma.ReportSortingCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        direction: z.lazy(() => SortDirectionSchema),
        position: z.number().int(),
        report: z.lazy(() => ReportCreateNestedOneWithoutSortingsInputSchema)
    })
    .strict()

export default ReportSortingCreateInputSchema
