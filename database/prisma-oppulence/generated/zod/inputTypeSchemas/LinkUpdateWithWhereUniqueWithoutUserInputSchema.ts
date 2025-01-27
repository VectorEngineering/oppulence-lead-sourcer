import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkUpdateWithoutUserInputSchema } from './LinkUpdateWithoutUserInputSchema'
import { LinkUncheckedUpdateWithoutUserInputSchema } from './LinkUncheckedUpdateWithoutUserInputSchema'

export const LinkUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => LinkWhereUniqueInputSchema),
        data: z.union([z.lazy(() => LinkUpdateWithoutUserInputSchema), z.lazy(() => LinkUncheckedUpdateWithoutUserInputSchema)])
    })
    .strict()

export default LinkUpdateWithWhereUniqueWithoutUserInputSchema
