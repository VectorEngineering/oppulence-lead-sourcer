import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainCreateManyProjectInputSchema } from './DomainCreateManyProjectInputSchema'

export const DomainCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.DomainCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => DomainCreateManyProjectInputSchema), z.lazy(() => DomainCreateManyProjectInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DomainCreateManyProjectInputEnvelopeSchema
