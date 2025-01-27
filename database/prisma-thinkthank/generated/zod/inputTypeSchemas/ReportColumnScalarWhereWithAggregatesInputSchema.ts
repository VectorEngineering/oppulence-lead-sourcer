import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'

export const ReportColumnScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReportColumnScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ReportColumnScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ReportColumnScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ReportColumnScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ReportColumnScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ReportColumnScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        field: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        label: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        width: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        position: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        isVisible: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        format: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default ReportColumnScalarWhereWithAggregatesInputSchema
