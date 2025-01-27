import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LeadHistoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadHistoryScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadHistoryScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadHistoryScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadHistoryScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadHistoryScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadHistoryScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        action: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        changes: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        metadata: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        changeType: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        source: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        ipAddress: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        userAgent: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default LeadHistoryScalarWhereWithAggregatesInputSchema
