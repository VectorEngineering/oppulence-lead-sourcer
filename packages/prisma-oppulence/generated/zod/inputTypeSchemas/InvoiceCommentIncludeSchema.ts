import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceArgsSchema } from '../outputTypeSchemas/InvoiceArgsSchema'
import { InvoiceCommentArgsSchema } from '../outputTypeSchemas/InvoiceCommentArgsSchema'
import { InvoiceCommentFindManyArgsSchema } from '../outputTypeSchemas/InvoiceCommentFindManyArgsSchema'
import { InvoiceCommentCountOutputTypeArgsSchema } from '../outputTypeSchemas/InvoiceCommentCountOutputTypeArgsSchema'

export const InvoiceCommentIncludeSchema: z.ZodType<Prisma.InvoiceCommentInclude> = z
    .object({
        invoice: z.union([z.boolean(), z.lazy(() => InvoiceArgsSchema)]).optional(),
        parent: z.union([z.boolean(), z.lazy(() => InvoiceCommentArgsSchema)]).optional(),
        replies: z.union([z.boolean(), z.lazy(() => InvoiceCommentFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => InvoiceCommentCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default InvoiceCommentIncludeSchema
