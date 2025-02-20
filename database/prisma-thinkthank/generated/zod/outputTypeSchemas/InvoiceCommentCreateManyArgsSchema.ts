import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceCommentCreateManyInputSchema } from '../inputTypeSchemas/InvoiceCommentCreateManyInputSchema'

export const InvoiceCommentCreateManyArgsSchema: z.ZodType<Prisma.InvoiceCommentCreateManyArgs> = z
    .object({
        data: z.union([InvoiceCommentCreateManyInputSchema, InvoiceCommentCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InvoiceCommentCreateManyArgsSchema
