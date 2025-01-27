import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkScalarWhereInputSchema } from './LinkScalarWhereInputSchema'
import { LinkUpdateManyMutationInputSchema } from './LinkUpdateManyMutationInputSchema'
import { LinkUncheckedUpdateManyWithoutProjectDomainInputSchema } from './LinkUncheckedUpdateManyWithoutProjectDomainInputSchema'

export const LinkUpdateManyWithWhereWithoutProjectDomainInputSchema: z.ZodType<Prisma.LinkUpdateManyWithWhereWithoutProjectDomainInput> = z
    .object({
        where: z.lazy(() => LinkScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => LinkUpdateManyMutationInputSchema),
            z.lazy(() => LinkUncheckedUpdateManyWithoutProjectDomainInputSchema)
        ])
    })
    .strict()

export default LinkUpdateManyWithWhereWithoutProjectDomainInputSchema
