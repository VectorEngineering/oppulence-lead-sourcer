import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionReconciliationMatchCreateManyTransactionInputSchema } from './TransactionReconciliationMatchCreateManyTransactionInputSchema'

export const TransactionReconciliationMatchCreateManyTransactionInputEnvelopeSchema: z.ZodType<Prisma.TransactionReconciliationMatchCreateManyTransactionInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => TransactionReconciliationMatchCreateManyTransactionInputSchema),
                z.lazy(() => TransactionReconciliationMatchCreateManyTransactionInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default TransactionReconciliationMatchCreateManyTransactionInputEnvelopeSchema
