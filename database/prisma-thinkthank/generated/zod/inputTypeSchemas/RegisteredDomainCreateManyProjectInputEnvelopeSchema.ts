import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainCreateManyProjectInputSchema } from './RegisteredDomainCreateManyProjectInputSchema'

export const RegisteredDomainCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.RegisteredDomainCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => RegisteredDomainCreateManyProjectInputSchema),
            z.lazy(() => RegisteredDomainCreateManyProjectInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default RegisteredDomainCreateManyProjectInputEnvelopeSchema
