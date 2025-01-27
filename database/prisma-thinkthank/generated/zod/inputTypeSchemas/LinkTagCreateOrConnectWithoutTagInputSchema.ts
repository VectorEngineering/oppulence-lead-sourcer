import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkTagWhereUniqueInputSchema } from './LinkTagWhereUniqueInputSchema'
import { LinkTagCreateWithoutTagInputSchema } from './LinkTagCreateWithoutTagInputSchema'
import { LinkTagUncheckedCreateWithoutTagInputSchema } from './LinkTagUncheckedCreateWithoutTagInputSchema'

export const LinkTagCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.LinkTagCreateOrConnectWithoutTagInput> = z
    .object({
        where: z.lazy(() => LinkTagWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LinkTagCreateWithoutTagInputSchema), z.lazy(() => LinkTagUncheckedCreateWithoutTagInputSchema)])
    })
    .strict()

export default LinkTagCreateOrConnectWithoutTagInputSchema
