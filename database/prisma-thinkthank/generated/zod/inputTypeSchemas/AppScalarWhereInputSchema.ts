import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const AppScalarWhereInputSchema: z.ZodType<Prisma.AppScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => AppScalarWhereInputSchema), z.lazy(() => AppScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => AppScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => AppScalarWhereInputSchema), z.lazy(() => AppScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        appId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        config: z.lazy(() => JsonNullableFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        settings: z.lazy(() => JsonNullableFilterSchema).optional(),
        userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
    })
    .strict()

export default AppScalarWhereInputSchema
