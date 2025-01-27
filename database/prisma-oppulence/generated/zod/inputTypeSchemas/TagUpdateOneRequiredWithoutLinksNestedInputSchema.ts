import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagCreateWithoutLinksInputSchema } from './TagCreateWithoutLinksInputSchema'
import { TagUncheckedCreateWithoutLinksInputSchema } from './TagUncheckedCreateWithoutLinksInputSchema'
import { TagCreateOrConnectWithoutLinksInputSchema } from './TagCreateOrConnectWithoutLinksInputSchema'
import { TagUpsertWithoutLinksInputSchema } from './TagUpsertWithoutLinksInputSchema'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagUpdateToOneWithWhereWithoutLinksInputSchema } from './TagUpdateToOneWithWhereWithoutLinksInputSchema'
import { TagUpdateWithoutLinksInputSchema } from './TagUpdateWithoutLinksInputSchema'
import { TagUncheckedUpdateWithoutLinksInputSchema } from './TagUncheckedUpdateWithoutLinksInputSchema'

export const TagUpdateOneRequiredWithoutLinksNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutLinksNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => TagCreateWithoutLinksInputSchema), z.lazy(() => TagUncheckedCreateWithoutLinksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutLinksInputSchema).optional(),
        upsert: z.lazy(() => TagUpsertWithoutLinksInputSchema).optional(),
        connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => TagUpdateToOneWithWhereWithoutLinksInputSchema),
                z.lazy(() => TagUpdateWithoutLinksInputSchema),
                z.lazy(() => TagUncheckedUpdateWithoutLinksInputSchema)
            ])
            .optional()
    })
    .strict()

export default TagUpdateOneRequiredWithoutLinksNestedInputSchema
