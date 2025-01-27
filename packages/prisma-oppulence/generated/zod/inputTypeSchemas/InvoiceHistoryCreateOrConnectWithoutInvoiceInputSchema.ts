import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceHistoryWhereUniqueInputSchema } from './InvoiceHistoryWhereUniqueInputSchema'
import { InvoiceHistoryCreateWithoutInvoiceInputSchema } from './InvoiceHistoryCreateWithoutInvoiceInputSchema'
import { InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema'

export const InvoiceHistoryCreateOrConnectWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceHistoryCreateOrConnectWithoutInvoiceInput> = z
    .object({
        where: z.lazy(() => InvoiceHistoryWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => InvoiceHistoryCreateWithoutInvoiceInputSchema),
            z.lazy(() => InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema)
        ])
    })
    .strict()

export default InvoiceHistoryCreateOrConnectWithoutInvoiceInputSchema
