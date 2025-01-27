import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema'
import { CustomerTagUpdateWithoutProjectInputSchema } from './CustomerTagUpdateWithoutProjectInputSchema'
import { CustomerTagUncheckedUpdateWithoutProjectInputSchema } from './CustomerTagUncheckedUpdateWithoutProjectInputSchema'

export const CustomerTagUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.CustomerTagUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => CustomerTagWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => CustomerTagUpdateWithoutProjectInputSchema),
                z.lazy(() => CustomerTagUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default CustomerTagUpdateWithWhereUniqueWithoutProjectInputSchema
