import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceCommentWhereInputSchema } from '../inputTypeSchemas/InvoiceCommentWhereInputSchema'

export const InvoiceCommentDeleteManyArgsSchema: z.ZodType<Prisma.InvoiceCommentDeleteManyArgs> = z
    .object({
        where: InvoiceCommentWhereInputSchema.optional()
    })
    .strict()

export default InvoiceCommentDeleteManyArgsSchema
