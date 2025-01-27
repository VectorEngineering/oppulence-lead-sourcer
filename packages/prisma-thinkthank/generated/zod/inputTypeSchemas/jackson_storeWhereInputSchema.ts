import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'

export const jackson_storeWhereInputSchema: z.ZodType<Prisma.jackson_storeWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => jackson_storeWhereInputSchema), z.lazy(() => jackson_storeWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => jackson_storeWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => jackson_storeWhereInputSchema), z.lazy(() => jackson_storeWhereInputSchema).array()]).optional(),
        key: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        iv: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        tag: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        namespace: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        modifiedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable()
    })
    .strict()

export default jackson_storeWhereInputSchema
