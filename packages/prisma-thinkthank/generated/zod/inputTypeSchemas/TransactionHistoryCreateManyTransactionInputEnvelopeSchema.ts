import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionHistoryCreateManyTransactionInputSchema } from './TransactionHistoryCreateManyTransactionInputSchema'

export const TransactionHistoryCreateManyTransactionInputEnvelopeSchema: z.ZodType<Prisma.TransactionHistoryCreateManyTransactionInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => TransactionHistoryCreateManyTransactionInputSchema),
                z.lazy(() => TransactionHistoryCreateManyTransactionInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default TransactionHistoryCreateManyTransactionInputEnvelopeSchema
