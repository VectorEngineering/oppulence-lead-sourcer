import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagUpdateWithoutProjectInputSchema } from './TagUpdateWithoutProjectInputSchema'
import { TagUncheckedUpdateWithoutProjectInputSchema } from './TagUncheckedUpdateWithoutProjectInputSchema'

export const TagUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => TagWhereUniqueInputSchema),
        data: z.union([z.lazy(() => TagUpdateWithoutProjectInputSchema), z.lazy(() => TagUncheckedUpdateWithoutProjectInputSchema)])
    })
    .strict()

export default TagUpdateWithWhereUniqueWithoutProjectInputSchema
