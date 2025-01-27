import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateUpdateWithoutInvoiceInputSchema } from './InvoiceTemplateUpdateWithoutInvoiceInputSchema'
import { InvoiceTemplateUncheckedUpdateWithoutInvoiceInputSchema } from './InvoiceTemplateUncheckedUpdateWithoutInvoiceInputSchema'
import { InvoiceTemplateCreateWithoutInvoiceInputSchema } from './InvoiceTemplateCreateWithoutInvoiceInputSchema'
import { InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema'
import { InvoiceTemplateWhereInputSchema } from './InvoiceTemplateWhereInputSchema'

export const InvoiceTemplateUpsertWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceTemplateUpsertWithoutInvoiceInput> = z
    .object({
        update: z.union([
            z.lazy(() => InvoiceTemplateUpdateWithoutInvoiceInputSchema),
            z.lazy(() => InvoiceTemplateUncheckedUpdateWithoutInvoiceInputSchema)
        ]),
        create: z.union([
            z.lazy(() => InvoiceTemplateCreateWithoutInvoiceInputSchema),
            z.lazy(() => InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema)
        ]),
        where: z.lazy(() => InvoiceTemplateWhereInputSchema).optional()
    })
    .strict()

export default InvoiceTemplateUpsertWithoutInvoiceInputSchema
