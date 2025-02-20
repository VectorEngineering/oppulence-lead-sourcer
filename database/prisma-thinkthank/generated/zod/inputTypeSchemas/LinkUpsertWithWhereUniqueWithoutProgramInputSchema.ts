import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkUpdateWithoutProgramInputSchema } from './LinkUpdateWithoutProgramInputSchema'
import { LinkUncheckedUpdateWithoutProgramInputSchema } from './LinkUncheckedUpdateWithoutProgramInputSchema'
import { LinkCreateWithoutProgramInputSchema } from './LinkCreateWithoutProgramInputSchema'
import { LinkUncheckedCreateWithoutProgramInputSchema } from './LinkUncheckedCreateWithoutProgramInputSchema'

export const LinkUpsertWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutProgramInput> = z
    .object({
        where: z.lazy(() => LinkWhereUniqueInputSchema),
        update: z.union([z.lazy(() => LinkUpdateWithoutProgramInputSchema), z.lazy(() => LinkUncheckedUpdateWithoutProgramInputSchema)]),
        create: z.union([z.lazy(() => LinkCreateWithoutProgramInputSchema), z.lazy(() => LinkUncheckedCreateWithoutProgramInputSchema)])
    })
    .strict()

export default LinkUpsertWithWhereUniqueWithoutProgramInputSchema
