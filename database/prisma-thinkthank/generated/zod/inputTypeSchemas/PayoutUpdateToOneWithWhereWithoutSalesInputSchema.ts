import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutWhereInputSchema } from './PayoutWhereInputSchema'
import { PayoutUpdateWithoutSalesInputSchema } from './PayoutUpdateWithoutSalesInputSchema'
import { PayoutUncheckedUpdateWithoutSalesInputSchema } from './PayoutUncheckedUpdateWithoutSalesInputSchema'

export const PayoutUpdateToOneWithWhereWithoutSalesInputSchema: z.ZodType<Prisma.PayoutUpdateToOneWithWhereWithoutSalesInput> = z
    .object({
        where: z.lazy(() => PayoutWhereInputSchema).optional(),
        data: z.union([z.lazy(() => PayoutUpdateWithoutSalesInputSchema), z.lazy(() => PayoutUncheckedUpdateWithoutSalesInputSchema)])
    })
    .strict()

export default PayoutUpdateToOneWithWhereWithoutSalesInputSchema
