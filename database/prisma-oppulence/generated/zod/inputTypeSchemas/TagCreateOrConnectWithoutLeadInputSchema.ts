import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagCreateWithoutLeadInputSchema } from './TagCreateWithoutLeadInputSchema'
import { TagUncheckedCreateWithoutLeadInputSchema } from './TagUncheckedCreateWithoutLeadInputSchema'

export const TagCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutLeadInput> = z
    .object({
        where: z.lazy(() => TagWhereUniqueInputSchema),
        create: z.union([z.lazy(() => TagCreateWithoutLeadInputSchema), z.lazy(() => TagUncheckedCreateWithoutLeadInputSchema)])
    })
    .strict()

export default TagCreateOrConnectWithoutLeadInputSchema
