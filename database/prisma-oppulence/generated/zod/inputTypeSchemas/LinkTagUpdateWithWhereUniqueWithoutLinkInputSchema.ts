import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkTagWhereUniqueInputSchema } from './LinkTagWhereUniqueInputSchema'
import { LinkTagUpdateWithoutLinkInputSchema } from './LinkTagUpdateWithoutLinkInputSchema'
import { LinkTagUncheckedUpdateWithoutLinkInputSchema } from './LinkTagUncheckedUpdateWithoutLinkInputSchema'

export const LinkTagUpdateWithWhereUniqueWithoutLinkInputSchema: z.ZodType<Prisma.LinkTagUpdateWithWhereUniqueWithoutLinkInput> = z
    .object({
        where: z.lazy(() => LinkTagWhereUniqueInputSchema),
        data: z.union([z.lazy(() => LinkTagUpdateWithoutLinkInputSchema), z.lazy(() => LinkTagUncheckedUpdateWithoutLinkInputSchema)])
    })
    .strict()

export default LinkTagUpdateWithWhereUniqueWithoutLinkInputSchema
