import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SentEmailWhereUniqueInputSchema } from './SentEmailWhereUniqueInputSchema'
import { SentEmailUpdateWithoutProjectInputSchema } from './SentEmailUpdateWithoutProjectInputSchema'
import { SentEmailUncheckedUpdateWithoutProjectInputSchema } from './SentEmailUncheckedUpdateWithoutProjectInputSchema'

export const SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.SentEmailUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => SentEmailWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => SentEmailUpdateWithoutProjectInputSchema),
                z.lazy(() => SentEmailUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema
