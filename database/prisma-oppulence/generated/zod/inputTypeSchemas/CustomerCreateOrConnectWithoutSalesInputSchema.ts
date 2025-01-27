import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema'
import { CustomerCreateWithoutSalesInputSchema } from './CustomerCreateWithoutSalesInputSchema'
import { CustomerUncheckedCreateWithoutSalesInputSchema } from './CustomerUncheckedCreateWithoutSalesInputSchema'

export const CustomerCreateOrConnectWithoutSalesInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutSalesInput> = z
    .object({
        where: z.lazy(() => CustomerWhereUniqueInputSchema),
        create: z.union([z.lazy(() => CustomerCreateWithoutSalesInputSchema), z.lazy(() => CustomerUncheckedCreateWithoutSalesInputSchema)])
    })
    .strict()

export default CustomerCreateOrConnectWithoutSalesInputSchema
