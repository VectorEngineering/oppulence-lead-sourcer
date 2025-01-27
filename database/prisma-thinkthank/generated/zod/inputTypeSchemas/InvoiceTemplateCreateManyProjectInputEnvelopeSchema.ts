import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateCreateManyProjectInputSchema } from './InvoiceTemplateCreateManyProjectInputSchema'

export const InvoiceTemplateCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.InvoiceTemplateCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => InvoiceTemplateCreateManyProjectInputSchema),
            z.lazy(() => InvoiceTemplateCreateManyProjectInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InvoiceTemplateCreateManyProjectInputEnvelopeSchema
