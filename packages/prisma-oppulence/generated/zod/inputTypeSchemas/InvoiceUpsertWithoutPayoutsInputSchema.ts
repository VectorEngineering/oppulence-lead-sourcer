import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceUpdateWithoutPayoutsInputSchema } from './InvoiceUpdateWithoutPayoutsInputSchema'
import { InvoiceUncheckedUpdateWithoutPayoutsInputSchema } from './InvoiceUncheckedUpdateWithoutPayoutsInputSchema'
import { InvoiceCreateWithoutPayoutsInputSchema } from './InvoiceCreateWithoutPayoutsInputSchema'
import { InvoiceUncheckedCreateWithoutPayoutsInputSchema } from './InvoiceUncheckedCreateWithoutPayoutsInputSchema'
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema'

export const InvoiceUpsertWithoutPayoutsInputSchema: z.ZodType<Prisma.InvoiceUpsertWithoutPayoutsInput> = z
    .object({
        update: z.union([
            z.lazy(() => InvoiceUpdateWithoutPayoutsInputSchema),
            z.lazy(() => InvoiceUncheckedUpdateWithoutPayoutsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => InvoiceCreateWithoutPayoutsInputSchema),
            z.lazy(() => InvoiceUncheckedCreateWithoutPayoutsInputSchema)
        ]),
        where: z.lazy(() => InvoiceWhereInputSchema).optional()
    })
    .strict()

export default InvoiceUpsertWithoutPayoutsInputSchema
