import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentScalarWhereInputSchema } from './InvoiceCommentScalarWhereInputSchema'
import { InvoiceCommentUpdateManyMutationInputSchema } from './InvoiceCommentUpdateManyMutationInputSchema'
import { InvoiceCommentUncheckedUpdateManyWithoutInvoiceInputSchema } from './InvoiceCommentUncheckedUpdateManyWithoutInvoiceInputSchema'

export const InvoiceCommentUpdateManyWithWhereWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceCommentUpdateManyWithWhereWithoutInvoiceInput> =
    z
        .object({
            where: z.lazy(() => InvoiceCommentScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => InvoiceCommentUpdateManyMutationInputSchema),
                z.lazy(() => InvoiceCommentUncheckedUpdateManyWithoutInvoiceInputSchema)
            ])
        })
        .strict()

export default InvoiceCommentUpdateManyWithWhereWithoutInvoiceInputSchema
