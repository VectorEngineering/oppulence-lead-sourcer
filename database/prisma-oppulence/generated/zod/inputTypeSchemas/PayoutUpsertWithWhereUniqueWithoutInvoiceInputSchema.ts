import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'
import { PayoutUpdateWithoutInvoiceInputSchema } from './PayoutUpdateWithoutInvoiceInputSchema'
import { PayoutUncheckedUpdateWithoutInvoiceInputSchema } from './PayoutUncheckedUpdateWithoutInvoiceInputSchema'
import { PayoutCreateWithoutInvoiceInputSchema } from './PayoutCreateWithoutInvoiceInputSchema'
import { PayoutUncheckedCreateWithoutInvoiceInputSchema } from './PayoutUncheckedCreateWithoutInvoiceInputSchema'

export const PayoutUpsertWithWhereUniqueWithoutInvoiceInputSchema: z.ZodType<Prisma.PayoutUpsertWithWhereUniqueWithoutInvoiceInput> = z
    .object({
        where: z.lazy(() => PayoutWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => PayoutUpdateWithoutInvoiceInputSchema),
            z.lazy(() => PayoutUncheckedUpdateWithoutInvoiceInputSchema)
        ]),
        create: z.union([z.lazy(() => PayoutCreateWithoutInvoiceInputSchema), z.lazy(() => PayoutUncheckedCreateWithoutInvoiceInputSchema)])
    })
    .strict()

export default PayoutUpsertWithWhereUniqueWithoutInvoiceInputSchema
