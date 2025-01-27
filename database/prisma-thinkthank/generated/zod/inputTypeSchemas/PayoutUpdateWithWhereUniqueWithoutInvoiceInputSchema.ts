import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'
import { PayoutUpdateWithoutInvoiceInputSchema } from './PayoutUpdateWithoutInvoiceInputSchema'
import { PayoutUncheckedUpdateWithoutInvoiceInputSchema } from './PayoutUncheckedUpdateWithoutInvoiceInputSchema'

export const PayoutUpdateWithWhereUniqueWithoutInvoiceInputSchema: z.ZodType<Prisma.PayoutUpdateWithWhereUniqueWithoutInvoiceInput> = z
    .object({
        where: z.lazy(() => PayoutWhereUniqueInputSchema),
        data: z.union([z.lazy(() => PayoutUpdateWithoutInvoiceInputSchema), z.lazy(() => PayoutUncheckedUpdateWithoutInvoiceInputSchema)])
    })
    .strict()

export default PayoutUpdateWithWhereUniqueWithoutInvoiceInputSchema
