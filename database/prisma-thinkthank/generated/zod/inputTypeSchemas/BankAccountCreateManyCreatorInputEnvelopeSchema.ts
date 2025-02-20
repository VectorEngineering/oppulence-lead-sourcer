import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountCreateManyCreatorInputSchema } from './BankAccountCreateManyCreatorInputSchema'

export const BankAccountCreateManyCreatorInputEnvelopeSchema: z.ZodType<Prisma.BankAccountCreateManyCreatorInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => BankAccountCreateManyCreatorInputSchema),
            z.lazy(() => BankAccountCreateManyCreatorInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default BankAccountCreateManyCreatorInputEnvelopeSchema
