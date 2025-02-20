import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceAttachmentScalarWhereInputSchema } from './InvoiceAttachmentScalarWhereInputSchema'
import { InvoiceAttachmentUpdateManyMutationInputSchema } from './InvoiceAttachmentUpdateManyMutationInputSchema'
import { InvoiceAttachmentUncheckedUpdateManyWithoutInvoiceInputSchema } from './InvoiceAttachmentUncheckedUpdateManyWithoutInvoiceInputSchema'

export const InvoiceAttachmentUpdateManyWithWhereWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceAttachmentUpdateManyWithWhereWithoutInvoiceInput> =
    z
        .object({
            where: z.lazy(() => InvoiceAttachmentScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => InvoiceAttachmentUpdateManyMutationInputSchema),
                z.lazy(() => InvoiceAttachmentUncheckedUpdateManyWithoutInvoiceInputSchema)
            ])
        })
        .strict()

export default InvoiceAttachmentUpdateManyWithWhereWithoutInvoiceInputSchema
