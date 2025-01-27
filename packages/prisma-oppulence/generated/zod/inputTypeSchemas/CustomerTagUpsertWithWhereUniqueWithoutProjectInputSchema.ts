import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema'
import { CustomerTagUpdateWithoutProjectInputSchema } from './CustomerTagUpdateWithoutProjectInputSchema'
import { CustomerTagUncheckedUpdateWithoutProjectInputSchema } from './CustomerTagUncheckedUpdateWithoutProjectInputSchema'
import { CustomerTagCreateWithoutProjectInputSchema } from './CustomerTagCreateWithoutProjectInputSchema'
import { CustomerTagUncheckedCreateWithoutProjectInputSchema } from './CustomerTagUncheckedCreateWithoutProjectInputSchema'

export const CustomerTagUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.CustomerTagUpsertWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => CustomerTagWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => CustomerTagUpdateWithoutProjectInputSchema),
                z.lazy(() => CustomerTagUncheckedUpdateWithoutProjectInputSchema)
            ]),
            create: z.union([
                z.lazy(() => CustomerTagCreateWithoutProjectInputSchema),
                z.lazy(() => CustomerTagUncheckedCreateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default CustomerTagUpsertWithWhereUniqueWithoutProjectInputSchema
