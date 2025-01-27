import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCreateManyWorkspaceInputSchema } from './InvoiceCreateManyWorkspaceInputSchema'

export const InvoiceCreateManyWorkspaceInputEnvelopeSchema: z.ZodType<Prisma.InvoiceCreateManyWorkspaceInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => InvoiceCreateManyWorkspaceInputSchema), z.lazy(() => InvoiceCreateManyWorkspaceInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InvoiceCreateManyWorkspaceInputEnvelopeSchema
