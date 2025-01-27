import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema'
import { CustomerTagCreateWithoutCustomerInputSchema } from './CustomerTagCreateWithoutCustomerInputSchema'
import { CustomerTagUncheckedCreateWithoutCustomerInputSchema } from './CustomerTagUncheckedCreateWithoutCustomerInputSchema'

export const CustomerTagCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.CustomerTagCreateOrConnectWithoutCustomerInput> = z
    .object({
        where: z.lazy(() => CustomerTagWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => CustomerTagCreateWithoutCustomerInputSchema),
            z.lazy(() => CustomerTagUncheckedCreateWithoutCustomerInputSchema)
        ])
    })
    .strict()

export default CustomerTagCreateOrConnectWithoutCustomerInputSchema
