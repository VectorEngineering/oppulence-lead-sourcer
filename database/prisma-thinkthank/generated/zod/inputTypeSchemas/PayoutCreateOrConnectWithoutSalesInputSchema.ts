import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'
import { PayoutCreateWithoutSalesInputSchema } from './PayoutCreateWithoutSalesInputSchema'
import { PayoutUncheckedCreateWithoutSalesInputSchema } from './PayoutUncheckedCreateWithoutSalesInputSchema'

export const PayoutCreateOrConnectWithoutSalesInputSchema: z.ZodType<Prisma.PayoutCreateOrConnectWithoutSalesInput> = z
    .object({
        where: z.lazy(() => PayoutWhereUniqueInputSchema),
        create: z.union([z.lazy(() => PayoutCreateWithoutSalesInputSchema), z.lazy(() => PayoutUncheckedCreateWithoutSalesInputSchema)])
    })
    .strict()

export default PayoutCreateOrConnectWithoutSalesInputSchema
