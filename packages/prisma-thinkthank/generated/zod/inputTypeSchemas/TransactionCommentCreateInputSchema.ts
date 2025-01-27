import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateNestedOneWithoutCommentsInputSchema } from './TransactionCreateNestedOneWithoutCommentsInputSchema'

export const TransactionCommentCreateInputSchema: z.ZodType<Prisma.TransactionCommentCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        content: z.string(),
        type: z.string().optional().nullable(),
        visibility: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable(),
        transaction: z.lazy(() => TransactionCreateNestedOneWithoutCommentsInputSchema)
    })
    .strict()

export default TransactionCommentCreateInputSchema
