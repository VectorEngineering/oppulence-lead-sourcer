import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkScalarWhereInputSchema } from './LinkScalarWhereInputSchema'
import { LinkUpdateManyMutationInputSchema } from './LinkUpdateManyMutationInputSchema'
import { LinkUncheckedUpdateManyWithoutProgramInputSchema } from './LinkUncheckedUpdateManyWithoutProgramInputSchema'

export const LinkUpdateManyWithWhereWithoutProgramInputSchema: z.ZodType<Prisma.LinkUpdateManyWithWhereWithoutProgramInput> = z
    .object({
        where: z.lazy(() => LinkScalarWhereInputSchema),
        data: z.union([z.lazy(() => LinkUpdateManyMutationInputSchema), z.lazy(() => LinkUncheckedUpdateManyWithoutProgramInputSchema)])
    })
    .strict()

export default LinkUpdateManyWithWhereWithoutProgramInputSchema
