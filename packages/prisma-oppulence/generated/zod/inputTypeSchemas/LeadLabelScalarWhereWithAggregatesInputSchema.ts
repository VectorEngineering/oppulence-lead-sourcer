import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LeadLabelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadLabelScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadLabelScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadLabelScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadLabelScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadLabelScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadLabelScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        color: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadLabelScalarWhereWithAggregatesInputSchema
