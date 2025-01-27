import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentCreateWithoutParentInputSchema } from './InvoiceCommentCreateWithoutParentInputSchema'
import { InvoiceCommentUncheckedCreateWithoutParentInputSchema } from './InvoiceCommentUncheckedCreateWithoutParentInputSchema'
import { InvoiceCommentCreateOrConnectWithoutParentInputSchema } from './InvoiceCommentCreateOrConnectWithoutParentInputSchema'
import { InvoiceCommentCreateManyParentInputEnvelopeSchema } from './InvoiceCommentCreateManyParentInputEnvelopeSchema'
import { InvoiceCommentWhereUniqueInputSchema } from './InvoiceCommentWhereUniqueInputSchema'

export const InvoiceCommentUncheckedCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.InvoiceCommentUncheckedCreateNestedManyWithoutParentInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InvoiceCommentCreateWithoutParentInputSchema),
                    z.lazy(() => InvoiceCommentCreateWithoutParentInputSchema).array(),
                    z.lazy(() => InvoiceCommentUncheckedCreateWithoutParentInputSchema),
                    z.lazy(() => InvoiceCommentUncheckedCreateWithoutParentInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => InvoiceCommentCreateOrConnectWithoutParentInputSchema),
                    z.lazy(() => InvoiceCommentCreateOrConnectWithoutParentInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InvoiceCommentCreateManyParentInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => InvoiceCommentWhereUniqueInputSchema), z.lazy(() => InvoiceCommentWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default InvoiceCommentUncheckedCreateNestedManyWithoutParentInputSchema
