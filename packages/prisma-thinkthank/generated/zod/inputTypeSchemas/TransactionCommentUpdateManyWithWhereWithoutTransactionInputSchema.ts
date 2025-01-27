import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCommentScalarWhereInputSchema } from './TransactionCommentScalarWhereInputSchema'
import { TransactionCommentUpdateManyMutationInputSchema } from './TransactionCommentUpdateManyMutationInputSchema'
import { TransactionCommentUncheckedUpdateManyWithoutTransactionInputSchema } from './TransactionCommentUncheckedUpdateManyWithoutTransactionInputSchema'

export const TransactionCommentUpdateManyWithWhereWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionCommentUpdateManyWithWhereWithoutTransactionInput> =
    z
        .object({
            where: z.lazy(() => TransactionCommentScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => TransactionCommentUpdateManyMutationInputSchema),
                z.lazy(() => TransactionCommentUncheckedUpdateManyWithoutTransactionInputSchema)
            ])
        })
        .strict()

export default TransactionCommentUpdateManyWithWhereWithoutTransactionInputSchema
