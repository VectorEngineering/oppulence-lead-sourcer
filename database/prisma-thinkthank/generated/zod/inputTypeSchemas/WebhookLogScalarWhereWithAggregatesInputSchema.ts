import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const WebhookLogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WebhookLogScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => WebhookLogScalarWhereWithAggregatesInputSchema),
                z.lazy(() => WebhookLogScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => WebhookLogScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => WebhookLogScalarWhereWithAggregatesInputSchema),
                z.lazy(() => WebhookLogScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        webhookId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        requestBody: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        responseBody: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        statusCode: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        duration: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        success: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        errorMessage: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        timestamp: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default WebhookLogScalarWhereWithAggregatesInputSchema
