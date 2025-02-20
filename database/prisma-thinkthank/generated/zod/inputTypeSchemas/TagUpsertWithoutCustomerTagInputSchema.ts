import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagUpdateWithoutCustomerTagInputSchema } from './TagUpdateWithoutCustomerTagInputSchema'
import { TagUncheckedUpdateWithoutCustomerTagInputSchema } from './TagUncheckedUpdateWithoutCustomerTagInputSchema'
import { TagCreateWithoutCustomerTagInputSchema } from './TagCreateWithoutCustomerTagInputSchema'
import { TagUncheckedCreateWithoutCustomerTagInputSchema } from './TagUncheckedCreateWithoutCustomerTagInputSchema'
import { TagWhereInputSchema } from './TagWhereInputSchema'

export const TagUpsertWithoutCustomerTagInputSchema: z.ZodType<Prisma.TagUpsertWithoutCustomerTagInput> = z
    .object({
        update: z.union([
            z.lazy(() => TagUpdateWithoutCustomerTagInputSchema),
            z.lazy(() => TagUncheckedUpdateWithoutCustomerTagInputSchema)
        ]),
        create: z.union([
            z.lazy(() => TagCreateWithoutCustomerTagInputSchema),
            z.lazy(() => TagUncheckedCreateWithoutCustomerTagInputSchema)
        ]),
        where: z.lazy(() => TagWhereInputSchema).optional()
    })
    .strict()

export default TagUpsertWithoutCustomerTagInputSchema
