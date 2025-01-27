import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema'
import { CustomerTagCreateWithoutProjectInputSchema } from './CustomerTagCreateWithoutProjectInputSchema'
import { CustomerTagUncheckedCreateWithoutProjectInputSchema } from './CustomerTagUncheckedCreateWithoutProjectInputSchema'

export const CustomerTagCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.CustomerTagCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => CustomerTagWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => CustomerTagCreateWithoutProjectInputSchema),
            z.lazy(() => CustomerTagUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default CustomerTagCreateOrConnectWithoutProjectInputSchema
