import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const TransactionCommentScalarWhereInputSchema: z.ZodType<Prisma.TransactionCommentScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => TransactionCommentScalarWhereInputSchema), z.lazy(() => TransactionCommentScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => TransactionCommentScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => TransactionCommentScalarWhereInputSchema), z.lazy(() => TransactionCommentScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        transactionId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        visibility: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default TransactionCommentScalarWhereInputSchema
