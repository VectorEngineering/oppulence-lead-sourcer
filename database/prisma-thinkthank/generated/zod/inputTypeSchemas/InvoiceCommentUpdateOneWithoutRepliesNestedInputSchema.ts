import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentCreateWithoutRepliesInputSchema } from './InvoiceCommentCreateWithoutRepliesInputSchema'
import { InvoiceCommentUncheckedCreateWithoutRepliesInputSchema } from './InvoiceCommentUncheckedCreateWithoutRepliesInputSchema'
import { InvoiceCommentCreateOrConnectWithoutRepliesInputSchema } from './InvoiceCommentCreateOrConnectWithoutRepliesInputSchema'
import { InvoiceCommentUpsertWithoutRepliesInputSchema } from './InvoiceCommentUpsertWithoutRepliesInputSchema'
import { InvoiceCommentWhereInputSchema } from './InvoiceCommentWhereInputSchema'
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema'
import { InvoiceCommentUpdateToOneWithWhereWithoutRepliesInputSchema } from './InvoiceCommentUpdateToOneWithWhereWithoutRepliesInputSchema'
import { InvoiceCommentUpdateWithoutRepliesInputSchema } from './InvoiceCommentUpdateWithoutRepliesInputSchema'
import { InvoiceCommentUncheckedUpdateWithoutRepliesInputSchema } from './InvoiceCommentUncheckedUpdateWithoutRepliesInputSchema'

export const InvoiceCommentUpdateOneWithoutRepliesNestedInputSchema: z.ZodType<Prisma.InvoiceCommentUpdateOneWithoutRepliesNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InvoiceCommentCreateWithoutRepliesInputSchema),
                z.lazy(() => InvoiceCommentUncheckedCreateWithoutRepliesInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => InvoiceCommentCreateOrConnectWithoutRepliesInputSchema).optional(),
        upsert: z.lazy(() => InvoiceCommentUpsertWithoutRepliesInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => InvoiceCommentWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => InvoiceCommentWhereInputSchema)]).optional(),
        connect: z.lazy(() => InvoiceCommentWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => InvoiceCommentUpdateToOneWithWhereWithoutRepliesInputSchema),
                z.lazy(() => InvoiceCommentUpdateWithoutRepliesInputSchema),
                z.lazy(() => InvoiceCommentUncheckedUpdateWithoutRepliesInputSchema)
            ])
            .optional()
    })
    .strict()

export default InvoiceCommentUpdateOneWithoutRepliesNestedInputSchema
