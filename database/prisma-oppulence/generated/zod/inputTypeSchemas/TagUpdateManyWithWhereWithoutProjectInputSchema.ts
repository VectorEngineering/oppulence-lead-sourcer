import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema'
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema'
import { TagUncheckedUpdateManyWithoutProjectInputSchema } from './TagUncheckedUpdateManyWithoutProjectInputSchema'

export const TagUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutProjectInput> = z
    .object({
        where: z.lazy(() => TagScalarWhereInputSchema),
        data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutProjectInputSchema)])
    })
    .strict()

export default TagUpdateManyWithWhereWithoutProjectInputSchema
