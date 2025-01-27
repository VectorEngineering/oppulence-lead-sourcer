import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateManyAssignedToInputSchema } from './TransactionCreateManyAssignedToInputSchema'

export const TransactionCreateManyAssignedToInputEnvelopeSchema: z.ZodType<Prisma.TransactionCreateManyAssignedToInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => TransactionCreateManyAssignedToInputSchema),
            z.lazy(() => TransactionCreateManyAssignedToInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default TransactionCreateManyAssignedToInputEnvelopeSchema
