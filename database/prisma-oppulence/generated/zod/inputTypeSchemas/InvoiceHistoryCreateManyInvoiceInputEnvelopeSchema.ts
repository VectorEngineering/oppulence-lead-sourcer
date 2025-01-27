import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceHistoryCreateManyInvoiceInputSchema } from './InvoiceHistoryCreateManyInvoiceInputSchema'

export const InvoiceHistoryCreateManyInvoiceInputEnvelopeSchema: z.ZodType<Prisma.InvoiceHistoryCreateManyInvoiceInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => InvoiceHistoryCreateManyInvoiceInputSchema),
            z.lazy(() => InvoiceHistoryCreateManyInvoiceInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InvoiceHistoryCreateManyInvoiceInputEnvelopeSchema
