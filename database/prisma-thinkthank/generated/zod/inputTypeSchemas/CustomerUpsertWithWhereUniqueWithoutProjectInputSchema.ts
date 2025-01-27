import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema'
import { CustomerUpdateWithoutProjectInputSchema } from './CustomerUpdateWithoutProjectInputSchema'
import { CustomerUncheckedUpdateWithoutProjectInputSchema } from './CustomerUncheckedUpdateWithoutProjectInputSchema'
import { CustomerCreateWithoutProjectInputSchema } from './CustomerCreateWithoutProjectInputSchema'
import { CustomerUncheckedCreateWithoutProjectInputSchema } from './CustomerUncheckedCreateWithoutProjectInputSchema'

export const CustomerUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.CustomerUpsertWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => CustomerWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => CustomerUpdateWithoutProjectInputSchema),
            z.lazy(() => CustomerUncheckedUpdateWithoutProjectInputSchema)
        ]),
        create: z.union([
            z.lazy(() => CustomerCreateWithoutProjectInputSchema),
            z.lazy(() => CustomerUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default CustomerUpsertWithWhereUniqueWithoutProjectInputSchema
