import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentUpdateWithoutRepliesInputSchema } from './InvoiceCommentUpdateWithoutRepliesInputSchema'
import { InvoiceCommentUncheckedUpdateWithoutRepliesInputSchema } from './InvoiceCommentUncheckedUpdateWithoutRepliesInputSchema'
import { InvoiceCommentCreateWithoutRepliesInputSchema } from './InvoiceCommentCreateWithoutRepliesInputSchema'
import { InvoiceCommentUncheckedCreateWithoutRepliesInputSchema } from './InvoiceCommentUncheckedCreateWithoutRepliesInputSchema'
import { InvoiceCommentWhereInputSchema } from './InvoiceCommentWhereInputSchema'

export const InvoiceCommentUpsertWithoutRepliesInputSchema: z.ZodType<Prisma.InvoiceCommentUpsertWithoutRepliesInput> = z
    .object({
        update: z.union([
            z.lazy(() => InvoiceCommentUpdateWithoutRepliesInputSchema),
            z.lazy(() => InvoiceCommentUncheckedUpdateWithoutRepliesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => InvoiceCommentCreateWithoutRepliesInputSchema),
            z.lazy(() => InvoiceCommentUncheckedCreateWithoutRepliesInputSchema)
        ]),
        where: z.lazy(() => InvoiceCommentWhereInputSchema).optional()
    })
    .strict()

export default InvoiceCommentUpsertWithoutRepliesInputSchema
