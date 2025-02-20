import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateCreateWithoutInvoiceInputSchema } from './InvoiceTemplateCreateWithoutInvoiceInputSchema'
import { InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema'
import { InvoiceTemplateCreateOrConnectWithoutInvoiceInputSchema } from './InvoiceTemplateCreateOrConnectWithoutInvoiceInputSchema'
import { InvoiceTemplateUpsertWithoutInvoiceInputSchema } from './InvoiceTemplateUpsertWithoutInvoiceInputSchema'
import { InvoiceTemplateWhereInputSchema } from './InvoiceTemplateWhereInputSchema'
import { InvoiceTemplateWhereUniqueInputSchema } from './InvoiceTemplateWhereUniqueInputSchema'
import { InvoiceTemplateUpdateToOneWithWhereWithoutInvoiceInputSchema } from './InvoiceTemplateUpdateToOneWithWhereWithoutInvoiceInputSchema'
import { InvoiceTemplateUpdateWithoutInvoiceInputSchema } from './InvoiceTemplateUpdateWithoutInvoiceInputSchema'
import { InvoiceTemplateUncheckedUpdateWithoutInvoiceInputSchema } from './InvoiceTemplateUncheckedUpdateWithoutInvoiceInputSchema'

export const InvoiceTemplateUpdateOneWithoutInvoiceNestedInputSchema: z.ZodType<Prisma.InvoiceTemplateUpdateOneWithoutInvoiceNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InvoiceTemplateCreateWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceTemplateUncheckedCreateWithoutInvoiceInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => InvoiceTemplateCreateOrConnectWithoutInvoiceInputSchema).optional(),
            upsert: z.lazy(() => InvoiceTemplateUpsertWithoutInvoiceInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => InvoiceTemplateWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => InvoiceTemplateWhereInputSchema)]).optional(),
            connect: z.lazy(() => InvoiceTemplateWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => InvoiceTemplateUpdateToOneWithWhereWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceTemplateUpdateWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceTemplateUncheckedUpdateWithoutInvoiceInputSchema)
                ])
                .optional()
        })
        .strict()

export default InvoiceTemplateUpdateOneWithoutInvoiceNestedInputSchema
