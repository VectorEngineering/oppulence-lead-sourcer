import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceAttachmentCreateManyInputSchema } from '../inputTypeSchemas/InvoiceAttachmentCreateManyInputSchema'

export const InvoiceAttachmentCreateManyArgsSchema: z.ZodType<Prisma.InvoiceAttachmentCreateManyArgs> = z
    .object({
        data: z.union([InvoiceAttachmentCreateManyInputSchema, InvoiceAttachmentCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InvoiceAttachmentCreateManyArgsSchema
