import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceAttachmentWhereUniqueInputSchema } from './InvoiceAttachmentWhereUniqueInputSchema'
import { InvoiceAttachmentUpdateWithoutInvoiceInputSchema } from './InvoiceAttachmentUpdateWithoutInvoiceInputSchema'
import { InvoiceAttachmentUncheckedUpdateWithoutInvoiceInputSchema } from './InvoiceAttachmentUncheckedUpdateWithoutInvoiceInputSchema'
import { InvoiceAttachmentCreateWithoutInvoiceInputSchema } from './InvoiceAttachmentCreateWithoutInvoiceInputSchema'
import { InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema'

export const InvoiceAttachmentUpsertWithWhereUniqueWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceAttachmentUpsertWithWhereUniqueWithoutInvoiceInput> =
    z
        .object({
            where: z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => InvoiceAttachmentUpdateWithoutInvoiceInputSchema),
                z.lazy(() => InvoiceAttachmentUncheckedUpdateWithoutInvoiceInputSchema)
            ]),
            create: z.union([
                z.lazy(() => InvoiceAttachmentCreateWithoutInvoiceInputSchema),
                z.lazy(() => InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema)
            ])
        })
        .strict()

export default InvoiceAttachmentUpsertWithWhereUniqueWithoutInvoiceInputSchema
