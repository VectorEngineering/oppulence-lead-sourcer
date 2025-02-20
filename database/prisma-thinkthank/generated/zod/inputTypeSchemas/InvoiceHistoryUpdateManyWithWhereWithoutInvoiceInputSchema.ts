import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceHistoryScalarWhereInputSchema } from './InvoiceHistoryScalarWhereInputSchema'
import { InvoiceHistoryUpdateManyMutationInputSchema } from './InvoiceHistoryUpdateManyMutationInputSchema'
import { InvoiceHistoryUncheckedUpdateManyWithoutInvoiceInputSchema } from './InvoiceHistoryUncheckedUpdateManyWithoutInvoiceInputSchema'

export const InvoiceHistoryUpdateManyWithWhereWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceHistoryUpdateManyWithWhereWithoutInvoiceInput> =
    z
        .object({
            where: z.lazy(() => InvoiceHistoryScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => InvoiceHistoryUpdateManyMutationInputSchema),
                z.lazy(() => InvoiceHistoryUncheckedUpdateManyWithoutInvoiceInputSchema)
            ])
        })
        .strict()

export default InvoiceHistoryUpdateManyWithWhereWithoutInvoiceInputSchema
