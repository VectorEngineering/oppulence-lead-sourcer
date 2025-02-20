import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceHistoryCreateWithoutInvoiceInputSchema } from './InvoiceHistoryCreateWithoutInvoiceInputSchema'
import { InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema'
import { InvoiceHistoryCreateOrConnectWithoutInvoiceInputSchema } from './InvoiceHistoryCreateOrConnectWithoutInvoiceInputSchema'
import { InvoiceHistoryCreateManyInvoiceInputEnvelopeSchema } from './InvoiceHistoryCreateManyInvoiceInputEnvelopeSchema'
import { InvoiceHistoryWhereUniqueInputSchema } from './InvoiceHistoryWhereUniqueInputSchema'

export const InvoiceHistoryUncheckedCreateNestedManyWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceHistoryUncheckedCreateNestedManyWithoutInvoiceInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InvoiceHistoryCreateWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceHistoryCreateWithoutInvoiceInputSchema).array(),
                    z.lazy(() => InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => InvoiceHistoryCreateOrConnectWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceHistoryCreateOrConnectWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InvoiceHistoryCreateManyInvoiceInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => InvoiceHistoryWhereUniqueInputSchema), z.lazy(() => InvoiceHistoryWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default InvoiceHistoryUncheckedCreateNestedManyWithoutInvoiceInputSchema
