import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagUpdateWithoutProjectInputSchema } from './TagUpdateWithoutProjectInputSchema'
import { TagUncheckedUpdateWithoutProjectInputSchema } from './TagUncheckedUpdateWithoutProjectInputSchema'
import { TagCreateWithoutProjectInputSchema } from './TagCreateWithoutProjectInputSchema'
import { TagUncheckedCreateWithoutProjectInputSchema } from './TagUncheckedCreateWithoutProjectInputSchema'

export const TagUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => TagWhereUniqueInputSchema),
        update: z.union([z.lazy(() => TagUpdateWithoutProjectInputSchema), z.lazy(() => TagUncheckedUpdateWithoutProjectInputSchema)]),
        create: z.union([z.lazy(() => TagCreateWithoutProjectInputSchema), z.lazy(() => TagUncheckedCreateWithoutProjectInputSchema)])
    })
    .strict()

export default TagUpsertWithWhereUniqueWithoutProjectInputSchema
