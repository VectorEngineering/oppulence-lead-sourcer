import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceUpdateWithoutHistoryInputSchema } from './InvoiceUpdateWithoutHistoryInputSchema'
import { InvoiceUncheckedUpdateWithoutHistoryInputSchema } from './InvoiceUncheckedUpdateWithoutHistoryInputSchema'
import { InvoiceCreateWithoutHistoryInputSchema } from './InvoiceCreateWithoutHistoryInputSchema'
import { InvoiceUncheckedCreateWithoutHistoryInputSchema } from './InvoiceUncheckedCreateWithoutHistoryInputSchema'
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema'

export const InvoiceUpsertWithoutHistoryInputSchema: z.ZodType<Prisma.InvoiceUpsertWithoutHistoryInput> = z
    .object({
        update: z.union([
            z.lazy(() => InvoiceUpdateWithoutHistoryInputSchema),
            z.lazy(() => InvoiceUncheckedUpdateWithoutHistoryInputSchema)
        ]),
        create: z.union([
            z.lazy(() => InvoiceCreateWithoutHistoryInputSchema),
            z.lazy(() => InvoiceUncheckedCreateWithoutHistoryInputSchema)
        ]),
        where: z.lazy(() => InvoiceWhereInputSchema).optional()
    })
    .strict()

export default InvoiceUpsertWithoutHistoryInputSchema
