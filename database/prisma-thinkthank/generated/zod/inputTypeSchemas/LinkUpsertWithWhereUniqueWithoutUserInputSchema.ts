import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkUpdateWithoutUserInputSchema } from './LinkUpdateWithoutUserInputSchema'
import { LinkUncheckedUpdateWithoutUserInputSchema } from './LinkUncheckedUpdateWithoutUserInputSchema'
import { LinkCreateWithoutUserInputSchema } from './LinkCreateWithoutUserInputSchema'
import { LinkUncheckedCreateWithoutUserInputSchema } from './LinkUncheckedCreateWithoutUserInputSchema'

export const LinkUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => LinkWhereUniqueInputSchema),
        update: z.union([z.lazy(() => LinkUpdateWithoutUserInputSchema), z.lazy(() => LinkUncheckedUpdateWithoutUserInputSchema)]),
        create: z.union([z.lazy(() => LinkCreateWithoutUserInputSchema), z.lazy(() => LinkUncheckedCreateWithoutUserInputSchema)])
    })
    .strict()

export default LinkUpsertWithWhereUniqueWithoutUserInputSchema
