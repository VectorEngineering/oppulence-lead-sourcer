import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'

export const InboxActivityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InboxActivityScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => InboxActivityScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InboxActivityScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => InboxActivityScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InboxActivityScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InboxActivityScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        inboxId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        action: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
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
            .nullable(),
        sessionId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        requestId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        success: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        errorDetails: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        severity: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        source: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        location: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        deviceInfo: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        riskScore: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable()
    })
    .strict()

export default InboxActivityScalarWhereWithAggregatesInputSchema
