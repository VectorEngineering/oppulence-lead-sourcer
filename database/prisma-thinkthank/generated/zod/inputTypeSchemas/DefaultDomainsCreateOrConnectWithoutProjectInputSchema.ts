import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DefaultDomainsWhereUniqueInputSchema } from './DefaultDomainsWhereUniqueInputSchema'
import { DefaultDomainsCreateWithoutProjectInputSchema } from './DefaultDomainsCreateWithoutProjectInputSchema'
import { DefaultDomainsUncheckedCreateWithoutProjectInputSchema } from './DefaultDomainsUncheckedCreateWithoutProjectInputSchema'

export const DefaultDomainsCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.DefaultDomainsCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => DefaultDomainsWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => DefaultDomainsCreateWithoutProjectInputSchema),
            z.lazy(() => DefaultDomainsUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default DefaultDomainsCreateOrConnectWithoutProjectInputSchema
