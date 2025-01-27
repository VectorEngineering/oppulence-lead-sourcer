import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema'
import { InvoiceUpdateWithoutPayoutsInputSchema } from './InvoiceUpdateWithoutPayoutsInputSchema'
import { InvoiceUncheckedUpdateWithoutPayoutsInputSchema } from './InvoiceUncheckedUpdateWithoutPayoutsInputSchema'

export const InvoiceUpdateToOneWithWhereWithoutPayoutsInputSchema: z.ZodType<Prisma.InvoiceUpdateToOneWithWhereWithoutPayoutsInput> = z
    .object({
        where: z.lazy(() => InvoiceWhereInputSchema).optional(),
        data: z.union([z.lazy(() => InvoiceUpdateWithoutPayoutsInputSchema), z.lazy(() => InvoiceUncheckedUpdateWithoutPayoutsInputSchema)])
    })
    .strict()

export default InvoiceUpdateToOneWithWhereWithoutPayoutsInputSchema
