import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateManyTransactionInputSchema } from './InboxCreateManyTransactionInputSchema'

export const InboxCreateManyTransactionInputEnvelopeSchema: z.ZodType<Prisma.InboxCreateManyTransactionInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => InboxCreateManyTransactionInputSchema), z.lazy(() => InboxCreateManyTransactionInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InboxCreateManyTransactionInputEnvelopeSchema
