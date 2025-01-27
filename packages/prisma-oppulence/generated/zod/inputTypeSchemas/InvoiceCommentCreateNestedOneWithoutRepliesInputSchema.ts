import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentCreateWithoutRepliesInputSchema } from './InvoiceCommentCreateWithoutRepliesInputSchema'
import { InvoiceCommentUncheckedCreateWithoutRepliesInputSchema } from './InvoiceCommentUncheckedCreateWithoutRepliesInputSchema'
import { InvoiceCommentCreateOrConnectWithoutRepliesInputSchema } from './InvoiceCommentCreateOrConnectWithoutRepliesInputSchema'
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema'

export const InvoiceCommentCreateNestedOneWithoutRepliesInputSchema: z.ZodType<Prisma.InvoiceCommentCreateNestedOneWithoutRepliesInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InvoiceCommentCreateWithoutRepliesInputSchema),
                z.lazy(() => InvoiceCommentUncheckedCreateWithoutRepliesInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => InvoiceCommentCreateOrConnectWithoutRepliesInputSchema).optional(),
        connect: z.lazy(() => InvoiceCommentWhereUniqueInputSchema).optional()
    })
    .strict()

export default InvoiceCommentCreateNestedOneWithoutRepliesInputSchema
