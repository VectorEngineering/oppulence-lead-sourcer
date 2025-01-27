import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema'
import { InvoiceCommentCreateWithoutInvoiceInputSchema } from './InvoiceCommentCreateWithoutInvoiceInputSchema'
import { InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema'

export const InvoiceCommentCreateOrConnectWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceCommentCreateOrConnectWithoutInvoiceInput> = z
    .object({
        where: z.lazy(() => InvoiceCommentWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => InvoiceCommentCreateWithoutInvoiceInputSchema),
            z.lazy(() => InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema)
        ])
    })
    .strict()

export default InvoiceCommentCreateOrConnectWithoutInvoiceInputSchema
