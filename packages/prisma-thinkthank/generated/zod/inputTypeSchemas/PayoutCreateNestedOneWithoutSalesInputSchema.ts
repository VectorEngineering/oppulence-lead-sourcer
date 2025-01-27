import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutCreateWithoutSalesInputSchema } from './PayoutCreateWithoutSalesInputSchema'
import { PayoutUncheckedCreateWithoutSalesInputSchema } from './PayoutUncheckedCreateWithoutSalesInputSchema'
import { PayoutCreateOrConnectWithoutSalesInputSchema } from './PayoutCreateOrConnectWithoutSalesInputSchema'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'

export const PayoutCreateNestedOneWithoutSalesInputSchema: z.ZodType<Prisma.PayoutCreateNestedOneWithoutSalesInput> = z
    .object({
        create: z
            .union([z.lazy(() => PayoutCreateWithoutSalesInputSchema), z.lazy(() => PayoutUncheckedCreateWithoutSalesInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => PayoutCreateOrConnectWithoutSalesInputSchema).optional(),
        connect: z.lazy(() => PayoutWhereUniqueInputSchema).optional()
    })
    .strict()

export default PayoutCreateNestedOneWithoutSalesInputSchema
