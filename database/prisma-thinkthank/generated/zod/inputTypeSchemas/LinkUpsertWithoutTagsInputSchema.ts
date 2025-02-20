import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkUpdateWithoutTagsInputSchema } from './LinkUpdateWithoutTagsInputSchema'
import { LinkUncheckedUpdateWithoutTagsInputSchema } from './LinkUncheckedUpdateWithoutTagsInputSchema'
import { LinkCreateWithoutTagsInputSchema } from './LinkCreateWithoutTagsInputSchema'
import { LinkUncheckedCreateWithoutTagsInputSchema } from './LinkUncheckedCreateWithoutTagsInputSchema'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'

export const LinkUpsertWithoutTagsInputSchema: z.ZodType<Prisma.LinkUpsertWithoutTagsInput> = z
    .object({
        update: z.union([z.lazy(() => LinkUpdateWithoutTagsInputSchema), z.lazy(() => LinkUncheckedUpdateWithoutTagsInputSchema)]),
        create: z.union([z.lazy(() => LinkCreateWithoutTagsInputSchema), z.lazy(() => LinkUncheckedCreateWithoutTagsInputSchema)]),
        where: z.lazy(() => LinkWhereInputSchema).optional()
    })
    .strict()

export default LinkUpsertWithoutTagsInputSchema
