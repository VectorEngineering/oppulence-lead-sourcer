import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagCreateManyProjectInputSchema } from './CustomerTagCreateManyProjectInputSchema'

export const CustomerTagCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.CustomerTagCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => CustomerTagCreateManyProjectInputSchema),
            z.lazy(() => CustomerTagCreateManyProjectInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default CustomerTagCreateManyProjectInputEnvelopeSchema
