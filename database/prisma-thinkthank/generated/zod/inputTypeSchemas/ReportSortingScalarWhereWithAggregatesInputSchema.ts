import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { EnumSortDirectionWithAggregatesFilterSchema } from './EnumSortDirectionWithAggregatesFilterSchema'
import { SortDirectionSchema } from './SortDirectionSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'

export const ReportSortingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReportSortingScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ReportSortingScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ReportSortingScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ReportSortingScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ReportSortingScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ReportSortingScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        field: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        direction: z.union([z.lazy(() => EnumSortDirectionWithAggregatesFilterSchema), z.lazy(() => SortDirectionSchema)]).optional(),
        position: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional()
    })
    .strict()

export default ReportSortingScalarWhereWithAggregatesInputSchema
