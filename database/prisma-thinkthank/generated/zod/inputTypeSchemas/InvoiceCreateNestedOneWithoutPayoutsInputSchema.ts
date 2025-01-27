import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCreateWithoutPayoutsInputSchema } from './InvoiceCreateWithoutPayoutsInputSchema'
import { InvoiceUncheckedCreateWithoutPayoutsInputSchema } from './InvoiceUncheckedCreateWithoutPayoutsInputSchema'
import { InvoiceCreateOrConnectWithoutPayoutsInputSchema } from './InvoiceCreateOrConnectWithoutPayoutsInputSchema'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'

export const InvoiceCreateNestedOneWithoutPayoutsInputSchema: z.ZodType<Prisma.InvoiceCreateNestedOneWithoutPayoutsInput> = z
    .object({
        create: z
            .union([z.lazy(() => InvoiceCreateWithoutPayoutsInputSchema), z.lazy(() => InvoiceUncheckedCreateWithoutPayoutsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutPayoutsInputSchema).optional(),
        connect: z.lazy(() => InvoiceWhereUniqueInputSchema).optional()
    })
    .strict()

export default InvoiceCreateNestedOneWithoutPayoutsInputSchema
