import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentCreateManyParentInputSchema } from './InvoiceCommentCreateManyParentInputSchema'

export const InvoiceCommentCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.InvoiceCommentCreateManyParentInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => InvoiceCommentCreateManyParentInputSchema),
            z.lazy(() => InvoiceCommentCreateManyParentInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InvoiceCommentCreateManyParentInputEnvelopeSchema
