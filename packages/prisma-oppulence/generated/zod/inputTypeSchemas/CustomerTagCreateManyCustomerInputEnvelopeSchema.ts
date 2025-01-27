import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagCreateManyCustomerInputSchema } from './CustomerTagCreateManyCustomerInputSchema'

export const CustomerTagCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.CustomerTagCreateManyCustomerInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => CustomerTagCreateManyCustomerInputSchema),
            z.lazy(() => CustomerTagCreateManyCustomerInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default CustomerTagCreateManyCustomerInputEnvelopeSchema
