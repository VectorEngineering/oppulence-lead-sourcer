import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'

export const ReportRecipientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReportRecipientScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ReportRecipientScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ReportRecipientScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ReportRecipientScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ReportRecipientScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ReportRecipientScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        isActive: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional()
    })
    .strict()

export default ReportRecipientScalarWhereWithAggregatesInputSchema
