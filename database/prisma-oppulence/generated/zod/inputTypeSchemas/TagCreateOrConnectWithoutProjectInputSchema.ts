import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagCreateWithoutProjectInputSchema } from './TagCreateWithoutProjectInputSchema'
import { TagUncheckedCreateWithoutProjectInputSchema } from './TagUncheckedCreateWithoutProjectInputSchema'

export const TagCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => TagWhereUniqueInputSchema),
        create: z.union([z.lazy(() => TagCreateWithoutProjectInputSchema), z.lazy(() => TagUncheckedCreateWithoutProjectInputSchema)])
    })
    .strict()

export default TagCreateOrConnectWithoutProjectInputSchema
