import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkScalarWhereInputSchema } from './LinkScalarWhereInputSchema'
import { LinkUpdateManyMutationInputSchema } from './LinkUpdateManyMutationInputSchema'
import { LinkUncheckedUpdateManyWithoutProjectInputSchema } from './LinkUncheckedUpdateManyWithoutProjectInputSchema'

export const LinkUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.LinkUpdateManyWithWhereWithoutProjectInput> = z
    .object({
        where: z.lazy(() => LinkScalarWhereInputSchema),
        data: z.union([z.lazy(() => LinkUpdateManyMutationInputSchema), z.lazy(() => LinkUncheckedUpdateManyWithoutProjectInputSchema)])
    })
    .strict()

export default LinkUpdateManyWithWhereWithoutProjectInputSchema
