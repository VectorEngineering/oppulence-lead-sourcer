import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCreateManyTemplateInputSchema } from './InvoiceCreateManyTemplateInputSchema'

export const InvoiceCreateManyTemplateInputEnvelopeSchema: z.ZodType<Prisma.InvoiceCreateManyTemplateInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => InvoiceCreateManyTemplateInputSchema), z.lazy(() => InvoiceCreateManyTemplateInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InvoiceCreateManyTemplateInputEnvelopeSchema
