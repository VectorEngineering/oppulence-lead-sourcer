import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagCreateWithoutLinksInputSchema } from './TagCreateWithoutLinksInputSchema'
import { TagUncheckedCreateWithoutLinksInputSchema } from './TagUncheckedCreateWithoutLinksInputSchema'

export const TagCreateOrConnectWithoutLinksInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutLinksInput> = z
    .object({
        where: z.lazy(() => TagWhereUniqueInputSchema),
        create: z.union([z.lazy(() => TagCreateWithoutLinksInputSchema), z.lazy(() => TagUncheckedCreateWithoutLinksInputSchema)])
    })
    .strict()

export default TagCreateOrConnectWithoutLinksInputSchema
