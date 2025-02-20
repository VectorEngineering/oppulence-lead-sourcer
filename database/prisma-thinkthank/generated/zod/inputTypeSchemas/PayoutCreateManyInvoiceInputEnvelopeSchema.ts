import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutCreateManyInvoiceInputSchema } from './PayoutCreateManyInvoiceInputSchema'

export const PayoutCreateManyInvoiceInputEnvelopeSchema: z.ZodType<Prisma.PayoutCreateManyInvoiceInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => PayoutCreateManyInvoiceInputSchema), z.lazy(() => PayoutCreateManyInvoiceInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PayoutCreateManyInvoiceInputEnvelopeSchema
