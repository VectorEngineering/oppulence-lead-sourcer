import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SentEmailScalarWhereInputSchema } from './SentEmailScalarWhereInputSchema'
import { SentEmailUpdateManyMutationInputSchema } from './SentEmailUpdateManyMutationInputSchema'
import { SentEmailUncheckedUpdateManyWithoutProjectInputSchema } from './SentEmailUncheckedUpdateManyWithoutProjectInputSchema'

export const SentEmailUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.SentEmailUpdateManyWithWhereWithoutProjectInput> = z
    .object({
        where: z.lazy(() => SentEmailScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => SentEmailUpdateManyMutationInputSchema),
            z.lazy(() => SentEmailUncheckedUpdateManyWithoutProjectInputSchema)
        ])
    })
    .strict()

export default SentEmailUpdateManyWithWhereWithoutProjectInputSchema
