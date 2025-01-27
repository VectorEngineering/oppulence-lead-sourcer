import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceArgsSchema } from '../outputTypeSchemas/InvoiceArgsSchema'

export const InvoiceAttachmentIncludeSchema: z.ZodType<Prisma.InvoiceAttachmentInclude> = z
    .object({
        invoice: z.union([z.boolean(), z.lazy(() => InvoiceArgsSchema)]).optional()
    })
    .strict()

export default InvoiceAttachmentIncludeSchema
