import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentWhereInputSchema } from './InvoiceCommentWhereInputSchema'
import { InvoiceCommentUpdateWithoutRepliesInputSchema } from './InvoiceCommentUpdateWithoutRepliesInputSchema'
import { InvoiceCommentUncheckedUpdateWithoutRepliesInputSchema } from './InvoiceCommentUncheckedUpdateWithoutRepliesInputSchema'

export const InvoiceCommentUpdateToOneWithWhereWithoutRepliesInputSchema: z.ZodType<Prisma.InvoiceCommentUpdateToOneWithWhereWithoutRepliesInput> =
    z
        .object({
            where: z.lazy(() => InvoiceCommentWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => InvoiceCommentUpdateWithoutRepliesInputSchema),
                z.lazy(() => InvoiceCommentUncheckedUpdateWithoutRepliesInputSchema)
            ])
        })
        .strict()

export default InvoiceCommentUpdateToOneWithWhereWithoutRepliesInputSchema
