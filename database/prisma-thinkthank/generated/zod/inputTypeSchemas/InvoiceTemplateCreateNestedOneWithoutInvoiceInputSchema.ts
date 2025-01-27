import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateCreateWithoutInvoiceInputSchema } from './InvoiceTemplateCreateWithoutInvoiceInputSchema'
import { InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema'
import { InvoiceTemplateCreateOrConnectWithoutInvoiceInputSchema } from './InvoiceTemplateCreateOrConnectWithoutInvoiceInputSchema'
import { InvoiceTemplateWhereUniqueInputSchema } from './InvoiceTemplateWhereUniqueInputSchema'

export const InvoiceTemplateCreateNestedOneWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceTemplateCreateNestedOneWithoutInvoiceInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InvoiceTemplateCreateWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => InvoiceTemplateCreateOrConnectWithoutInvoiceInputSchema).optional(),
            connect: z.lazy(() => InvoiceTemplateWhereUniqueInputSchema).optional()
        })
        .strict()

export default InvoiceTemplateCreateNestedOneWithoutInvoiceInputSchema
