import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkCreateWithoutTagsInputSchema } from './LinkCreateWithoutTagsInputSchema'
import { LinkUncheckedCreateWithoutTagsInputSchema } from './LinkUncheckedCreateWithoutTagsInputSchema'

export const LinkCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutTagsInput> = z
    .object({
        where: z.lazy(() => LinkWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LinkCreateWithoutTagsInputSchema), z.lazy(() => LinkUncheckedCreateWithoutTagsInputSchema)])
    })
    .strict()

export default LinkCreateOrConnectWithoutTagsInputSchema
