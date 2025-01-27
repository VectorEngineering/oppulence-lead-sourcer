import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryCreateManyProjectInputSchema } from './TransactionCategoryCreateManyProjectInputSchema'

export const TransactionCategoryCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.TransactionCategoryCreateManyProjectInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => TransactionCategoryCreateManyProjectInputSchema),
                z.lazy(() => TransactionCategoryCreateManyProjectInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default TransactionCategoryCreateManyProjectInputEnvelopeSchema
