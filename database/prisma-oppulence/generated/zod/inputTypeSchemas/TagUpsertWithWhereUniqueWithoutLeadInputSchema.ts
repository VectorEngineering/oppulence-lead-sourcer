import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagUpdateWithoutLeadInputSchema } from './TagUpdateWithoutLeadInputSchema'
import { TagUncheckedUpdateWithoutLeadInputSchema } from './TagUncheckedUpdateWithoutLeadInputSchema'
import { TagCreateWithoutLeadInputSchema } from './TagCreateWithoutLeadInputSchema'
import { TagUncheckedCreateWithoutLeadInputSchema } from './TagUncheckedCreateWithoutLeadInputSchema'

export const TagUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutLeadInput> = z
    .object({
        where: z.lazy(() => TagWhereUniqueInputSchema),
        update: z.union([z.lazy(() => TagUpdateWithoutLeadInputSchema), z.lazy(() => TagUncheckedUpdateWithoutLeadInputSchema)]),
        create: z.union([z.lazy(() => TagCreateWithoutLeadInputSchema), z.lazy(() => TagUncheckedCreateWithoutLeadInputSchema)])
    })
    .strict()

export default TagUpsertWithWhereUniqueWithoutLeadInputSchema
