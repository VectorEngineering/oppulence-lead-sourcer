import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'
import { PayoutCreateWithoutInvoiceInputSchema } from './PayoutCreateWithoutInvoiceInputSchema'
import { PayoutUncheckedCreateWithoutInvoiceInputSchema } from './PayoutUncheckedCreateWithoutInvoiceInputSchema'

export const PayoutCreateOrConnectWithoutInvoiceInputSchema: z.ZodType<Prisma.PayoutCreateOrConnectWithoutInvoiceInput> = z
    .object({
        where: z.lazy(() => PayoutWhereUniqueInputSchema),
        create: z.union([z.lazy(() => PayoutCreateWithoutInvoiceInputSchema), z.lazy(() => PayoutUncheckedCreateWithoutInvoiceInputSchema)])
    })
    .strict()

export default PayoutCreateOrConnectWithoutInvoiceInputSchema
