import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema'
import { CustomerCreateWithoutContractsInputSchema } from './CustomerCreateWithoutContractsInputSchema'
import { CustomerUncheckedCreateWithoutContractsInputSchema } from './CustomerUncheckedCreateWithoutContractsInputSchema'

export const CustomerCreateOrConnectWithoutContractsInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutContractsInput> = z
    .object({
        where: z.lazy(() => CustomerWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => CustomerCreateWithoutContractsInputSchema),
            z.lazy(() => CustomerUncheckedCreateWithoutContractsInputSchema)
        ])
    })
    .strict()

export default CustomerCreateOrConnectWithoutContractsInputSchema
