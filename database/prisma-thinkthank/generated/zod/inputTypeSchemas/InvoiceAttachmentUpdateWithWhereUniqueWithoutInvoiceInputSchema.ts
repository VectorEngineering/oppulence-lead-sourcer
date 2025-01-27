import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceAttachmentWhereUniqueInputSchema } from './InvoiceAttachmentWhereUniqueInputSchema'
import { InvoiceAttachmentUpdateWithoutInvoiceInputSchema } from './InvoiceAttachmentUpdateWithoutInvoiceInputSchema'
import { InvoiceAttachmentUncheckedUpdateWithoutInvoiceInputSchema } from './InvoiceAttachmentUncheckedUpdateWithoutInvoiceInputSchema'

export const InvoiceAttachmentUpdateWithWhereUniqueWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceAttachmentUpdateWithWhereUniqueWithoutInvoiceInput> =
    z
        .object({
            where: z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => InvoiceAttachmentUpdateWithoutInvoiceInputSchema),
                z.lazy(() => InvoiceAttachmentUncheckedUpdateWithoutInvoiceInputSchema)
            ])
        })
        .strict()

export default InvoiceAttachmentUpdateWithWhereUniqueWithoutInvoiceInputSchema
