import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceCommentSelectSchema } from '../inputTypeSchemas/InvoiceCommentSelectSchema'
import { InvoiceCommentIncludeSchema } from '../inputTypeSchemas/InvoiceCommentIncludeSchema'

export const InvoiceCommentArgsSchema: z.ZodType<Prisma.InvoiceCommentDefaultArgs> = z
    .object({
        select: z.lazy(() => InvoiceCommentSelectSchema).optional(),
        include: z.lazy(() => InvoiceCommentIncludeSchema).optional()
    })
    .strict()

export default InvoiceCommentArgsSchema
