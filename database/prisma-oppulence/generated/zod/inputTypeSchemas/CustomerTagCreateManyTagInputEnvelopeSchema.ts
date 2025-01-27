import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagCreateManyTagInputSchema } from './CustomerTagCreateManyTagInputSchema'

export const CustomerTagCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.CustomerTagCreateManyTagInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => CustomerTagCreateManyTagInputSchema), z.lazy(() => CustomerTagCreateManyTagInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default CustomerTagCreateManyTagInputEnvelopeSchema
