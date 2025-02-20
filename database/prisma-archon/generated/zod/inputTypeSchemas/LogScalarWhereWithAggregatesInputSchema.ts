import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { EnumLogTypeNullableWithAggregatesFilterSchema } from './EnumLogTypeNullableWithAggregatesFilterSchema'
import { LogTypeSchema } from './LogTypeSchema'
import { EnumLogPostTypeNullableWithAggregatesFilterSchema } from './EnumLogPostTypeNullableWithAggregatesFilterSchema'
import { LogPostTypeSchema } from './LogPostTypeSchema'
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LogScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LogScalarWhereWithAggregatesInputSchema), z.lazy(() => LogScalarWhereWithAggregatesInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LogScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LogScalarWhereWithAggregatesInputSchema), z.lazy(() => LogScalarWhereWithAggregatesInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        endpointId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        type: z
            .union([z.lazy(() => EnumLogTypeNullableWithAggregatesFilterSchema), z.lazy(() => LogTypeSchema)])
            .optional()
            .nullable(),
        postType: z
            .union([z.lazy(() => EnumLogPostTypeNullableWithAggregatesFilterSchema), z.lazy(() => LogPostTypeSchema)])
            .optional()
            .nullable(),
        message: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LogScalarWhereWithAggregatesInputSchema
