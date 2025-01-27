import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema'
import { InvoiceCommentCreateWithoutParentInputSchema } from './InvoiceCommentCreateWithoutParentInputSchema'
import { InvoiceCommentUncheckedCreateWithoutParentInputSchema } from './InvoiceCommentUncheckedCreateWithoutParentInputSchema'

export const InvoiceCommentCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.InvoiceCommentCreateOrConnectWithoutParentInput> = z
    .object({
        where: z.lazy(() => InvoiceCommentWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => InvoiceCommentCreateWithoutParentInputSchema),
            z.lazy(() => InvoiceCommentUncheckedCreateWithoutParentInputSchema)
        ])
    })
    .strict()

export default InvoiceCommentCreateOrConnectWithoutParentInputSchema
