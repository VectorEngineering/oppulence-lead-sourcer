import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const SentEmailScalarWhereInputSchema: z.ZodType<Prisma.SentEmailScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => SentEmailScalarWhereInputSchema), z.lazy(() => SentEmailScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => SentEmailScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => SentEmailScalarWhereInputSchema), z.lazy(() => SentEmailScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        projectId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default SentEmailScalarWhereInputSchema
