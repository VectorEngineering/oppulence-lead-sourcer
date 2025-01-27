import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const TokenScalarWhereInputSchema: z.ZodType<Prisma.TokenScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => TokenScalarWhereInputSchema), z.lazy(() => TokenScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => TokenScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => TokenScalarWhereInputSchema), z.lazy(() => TokenScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        hashedKey: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        partialKey: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        expires: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastUsed: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
    })
    .strict()

export default TokenScalarWhereInputSchema
