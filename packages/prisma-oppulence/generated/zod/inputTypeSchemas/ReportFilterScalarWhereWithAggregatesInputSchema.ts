import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { EnumFilterOperatorWithAggregatesFilterSchema } from './EnumFilterOperatorWithAggregatesFilterSchema'
import { FilterOperatorSchema } from './FilterOperatorSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'

export const ReportFilterScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReportFilterScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ReportFilterScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ReportFilterScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ReportFilterScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ReportFilterScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ReportFilterScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        field: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        operator: z.union([z.lazy(() => EnumFilterOperatorWithAggregatesFilterSchema), z.lazy(() => FilterOperatorSchema)]).optional(),
        value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        valueType: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        group: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        position: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional()
    })
    .strict()

export default ReportFilterScalarWhereWithAggregatesInputSchema
