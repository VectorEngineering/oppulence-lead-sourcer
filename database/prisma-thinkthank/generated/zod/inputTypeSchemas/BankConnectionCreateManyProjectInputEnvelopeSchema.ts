import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionCreateManyProjectInputSchema } from './BankConnectionCreateManyProjectInputSchema'

export const BankConnectionCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.BankConnectionCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => BankConnectionCreateManyProjectInputSchema),
            z.lazy(() => BankConnectionCreateManyProjectInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default BankConnectionCreateManyProjectInputEnvelopeSchema
