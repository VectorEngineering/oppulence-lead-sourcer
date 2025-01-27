import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { TransactionRelationFilterSchema } from './TransactionRelationFilterSchema'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'

export const TransactionCommentWhereInputSchema: z.ZodType<Prisma.TransactionCommentWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => TransactionCommentWhereInputSchema), z.lazy(() => TransactionCommentWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => TransactionCommentWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => TransactionCommentWhereInputSchema), z.lazy(() => TransactionCommentWhereInputSchema).array()])
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
            .nullable(),
        transaction: z.union([z.lazy(() => TransactionRelationFilterSchema), z.lazy(() => TransactionWhereInputSchema)]).optional()
    })
    .strict()

export default TransactionCommentWhereInputSchema
