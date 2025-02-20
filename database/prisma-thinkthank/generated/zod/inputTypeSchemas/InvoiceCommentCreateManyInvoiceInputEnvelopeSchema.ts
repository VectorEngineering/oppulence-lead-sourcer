import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentCreateManyInvoiceInputSchema } from './InvoiceCommentCreateManyInvoiceInputSchema'

export const InvoiceCommentCreateManyInvoiceInputEnvelopeSchema: z.ZodType<Prisma.InvoiceCommentCreateManyInvoiceInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => InvoiceCommentCreateManyInvoiceInputSchema),
            z.lazy(() => InvoiceCommentCreateManyInvoiceInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InvoiceCommentCreateManyInvoiceInputEnvelopeSchema
