import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountCreateManyBankConnectionInputSchema } from './BankAccountCreateManyBankConnectionInputSchema'

export const BankAccountCreateManyBankConnectionInputEnvelopeSchema: z.ZodType<Prisma.BankAccountCreateManyBankConnectionInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => BankAccountCreateManyBankConnectionInputSchema),
            z.lazy(() => BankAccountCreateManyBankConnectionInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default BankAccountCreateManyBankConnectionInputEnvelopeSchema
