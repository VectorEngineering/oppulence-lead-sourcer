import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateWhereUniqueInputSchema } from './InvoiceTemplateWhereUniqueInputSchema'
import { InvoiceTemplateCreateWithoutInvoiceInputSchema } from './InvoiceTemplateCreateWithoutInvoiceInputSchema'
import { InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema'

export const InvoiceTemplateCreateOrConnectWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceTemplateCreateOrConnectWithoutInvoiceInput> =
    z
        .object({
            where: z.lazy(() => InvoiceTemplateWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => InvoiceTemplateCreateWithoutInvoiceInputSchema),
                z.lazy(() => InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema)
            ])
        })
        .strict()

export default InvoiceTemplateCreateOrConnectWithoutInvoiceInputSchema
