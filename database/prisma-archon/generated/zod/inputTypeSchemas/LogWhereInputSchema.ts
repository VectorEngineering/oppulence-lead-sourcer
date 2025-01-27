import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumLogTypeNullableFilterSchema } from './EnumLogTypeNullableFilterSchema'
import { LogTypeSchema } from './LogTypeSchema'
import { EnumLogPostTypeNullableFilterSchema } from './EnumLogPostTypeNullableFilterSchema'
import { LogPostTypeSchema } from './LogPostTypeSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EndpointRelationFilterSchema } from './EndpointRelationFilterSchema'
import { EndpointWhereInputSchema } from './EndpointWhereInputSchema'

export const LogWhereInputSchema: z.ZodType<Prisma.LogWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LogWhereInputSchema), z.lazy(() => LogWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LogWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LogWhereInputSchema), z.lazy(() => LogWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        endpointId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z
            .union([z.lazy(() => EnumLogTypeNullableFilterSchema), z.lazy(() => LogTypeSchema)])
            .optional()
            .nullable(),
        postType: z
            .union([z.lazy(() => EnumLogPostTypeNullableFilterSchema), z.lazy(() => LogPostTypeSchema)])
            .optional()
            .nullable(),
        message: z.lazy(() => JsonFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        endpoint: z.union([z.lazy(() => EndpointRelationFilterSchema), z.lazy(() => EndpointWhereInputSchema)]).optional()
    })
    .strict()

export default LogWhereInputSchema
