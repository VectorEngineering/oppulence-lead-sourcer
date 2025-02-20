import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema'
import { InvoiceCommentUpdateWithoutParentInputSchema } from './InvoiceCommentUpdateWithoutParentInputSchema'
import { InvoiceCommentUncheckedUpdateWithoutParentInputSchema } from './InvoiceCommentUncheckedUpdateWithoutParentInputSchema'
import { InvoiceCommentCreateWithoutParentInputSchema } from './InvoiceCommentCreateWithoutParentInputSchema'
import { InvoiceCommentUncheckedCreateWithoutParentInputSchema } from './InvoiceCommentUncheckedCreateWithoutParentInputSchema'

export const InvoiceCommentUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.InvoiceCommentUpsertWithWhereUniqueWithoutParentInput> =
    z
        .object({
            where: z.lazy(() => InvoiceCommentWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => InvoiceCommentUpdateWithoutParentInputSchema),
                z.lazy(() => InvoiceCommentUncheckedUpdateWithoutParentInputSchema)
            ]),
            create: z.union([
                z.lazy(() => InvoiceCommentCreateWithoutParentInputSchema),
                z.lazy(() => InvoiceCommentUncheckedCreateWithoutParentInputSchema)
            ])
        })
        .strict()

export default InvoiceCommentUpsertWithWhereUniqueWithoutParentInputSchema
