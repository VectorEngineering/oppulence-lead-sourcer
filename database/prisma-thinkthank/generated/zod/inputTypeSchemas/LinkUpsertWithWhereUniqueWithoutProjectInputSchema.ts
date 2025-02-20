import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkUpdateWithoutProjectInputSchema } from './LinkUpdateWithoutProjectInputSchema'
import { LinkUncheckedUpdateWithoutProjectInputSchema } from './LinkUncheckedUpdateWithoutProjectInputSchema'
import { LinkCreateWithoutProjectInputSchema } from './LinkCreateWithoutProjectInputSchema'
import { LinkUncheckedCreateWithoutProjectInputSchema } from './LinkUncheckedCreateWithoutProjectInputSchema'

export const LinkUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => LinkWhereUniqueInputSchema),
        update: z.union([z.lazy(() => LinkUpdateWithoutProjectInputSchema), z.lazy(() => LinkUncheckedUpdateWithoutProjectInputSchema)]),
        create: z.union([z.lazy(() => LinkCreateWithoutProjectInputSchema), z.lazy(() => LinkUncheckedCreateWithoutProjectInputSchema)])
    })
    .strict()

export default LinkUpsertWithWhereUniqueWithoutProjectInputSchema
