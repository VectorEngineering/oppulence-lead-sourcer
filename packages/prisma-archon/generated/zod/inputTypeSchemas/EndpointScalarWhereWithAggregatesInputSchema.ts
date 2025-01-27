import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const EndpointScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EndpointScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => EndpointScalarWhereWithAggregatesInputSchema),
                z.lazy(() => EndpointScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => EndpointScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => EndpointScalarWhereWithAggregatesInputSchema),
                z.lazy(() => EndpointScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        schema: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
        enabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        webhookEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        emailNotify: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        webhook: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        formEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        successUrl: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        failUrl: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        token: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default EndpointScalarWhereWithAggregatesInputSchema
