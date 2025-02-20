import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DefaultDomainsWhereUniqueInputSchema } from './DefaultDomainsWhereUniqueInputSchema'
import { DefaultDomainsUpdateWithoutProjectInputSchema } from './DefaultDomainsUpdateWithoutProjectInputSchema'
import { DefaultDomainsUncheckedUpdateWithoutProjectInputSchema } from './DefaultDomainsUncheckedUpdateWithoutProjectInputSchema'

export const DefaultDomainsUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.DefaultDomainsUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => DefaultDomainsWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => DefaultDomainsUpdateWithoutProjectInputSchema),
                z.lazy(() => DefaultDomainsUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default DefaultDomainsUpdateWithWhereUniqueWithoutProjectInputSchema
