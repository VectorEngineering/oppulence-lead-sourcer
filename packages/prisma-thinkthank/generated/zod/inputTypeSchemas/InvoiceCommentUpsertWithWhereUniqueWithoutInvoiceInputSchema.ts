import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema'
import { InvoiceCommentUpdateWithoutInvoiceInputSchema } from './InvoiceCommentUpdateWithoutInvoiceInputSchema'
import { InvoiceCommentUncheckedUpdateWithoutInvoiceInputSchema } from './InvoiceCommentUncheckedUpdateWithoutInvoiceInputSchema'
import { InvoiceCommentCreateWithoutInvoiceInputSchema } from './InvoiceCommentCreateWithoutInvoiceInputSchema'
import { InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema'

export const InvoiceCommentUpsertWithWhereUniqueWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceCommentUpsertWithWhereUniqueWithoutInvoiceInput> =
    z
        .object({
            where: z.lazy(() => InvoiceCommentWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => InvoiceCommentUpdateWithoutInvoiceInputSchema),
                z.lazy(() => InvoiceCommentUncheckedUpdateWithoutInvoiceInputSchema)
            ]),
            create: z.union([
                z.lazy(() => InvoiceCommentCreateWithoutInvoiceInputSchema),
                z.lazy(() => InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema)
            ])
        })
        .strict()

export default InvoiceCommentUpsertWithWhereUniqueWithoutInvoiceInputSchema
