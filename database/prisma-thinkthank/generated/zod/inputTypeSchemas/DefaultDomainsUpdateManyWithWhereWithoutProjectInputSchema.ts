import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DefaultDomainsScalarWhereInputSchema } from './DefaultDomainsScalarWhereInputSchema'
import { DefaultDomainsUpdateManyMutationInputSchema } from './DefaultDomainsUpdateManyMutationInputSchema'
import { DefaultDomainsUncheckedUpdateManyWithoutProjectInputSchema } from './DefaultDomainsUncheckedUpdateManyWithoutProjectInputSchema'

export const DefaultDomainsUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.DefaultDomainsUpdateManyWithWhereWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => DefaultDomainsScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => DefaultDomainsUpdateManyMutationInputSchema),
                z.lazy(() => DefaultDomainsUncheckedUpdateManyWithoutProjectInputSchema)
            ])
        })
        .strict()

export default DefaultDomainsUpdateManyWithWhereWithoutProjectInputSchema
