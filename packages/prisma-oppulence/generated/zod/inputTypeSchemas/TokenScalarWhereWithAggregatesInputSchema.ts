import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const TokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TokenScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => TokenScalarWhereWithAggregatesInputSchema),
                z.lazy(() => TokenScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => TokenScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => TokenScalarWhereWithAggregatesInputSchema),
                z.lazy(() => TokenScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        hashedKey: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        partialKey: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        expires: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastUsed: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict()

export default TokenScalarWhereWithAggregatesInputSchema
