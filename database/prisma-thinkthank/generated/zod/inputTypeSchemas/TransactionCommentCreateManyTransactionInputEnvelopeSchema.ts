import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCommentCreateManyTransactionInputSchema } from './TransactionCommentCreateManyTransactionInputSchema'

export const TransactionCommentCreateManyTransactionInputEnvelopeSchema: z.ZodType<Prisma.TransactionCommentCreateManyTransactionInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => TransactionCommentCreateManyTransactionInputSchema),
                z.lazy(() => TransactionCommentCreateManyTransactionInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default TransactionCommentCreateManyTransactionInputEnvelopeSchema
