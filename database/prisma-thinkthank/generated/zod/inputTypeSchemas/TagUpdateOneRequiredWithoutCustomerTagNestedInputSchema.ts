import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagCreateWithoutCustomerTagInputSchema } from './TagCreateWithoutCustomerTagInputSchema'
import { TagUncheckedCreateWithoutCustomerTagInputSchema } from './TagUncheckedCreateWithoutCustomerTagInputSchema'
import { TagCreateOrConnectWithoutCustomerTagInputSchema } from './TagCreateOrConnectWithoutCustomerTagInputSchema'
import { TagUpsertWithoutCustomerTagInputSchema } from './TagUpsertWithoutCustomerTagInputSchema'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagUpdateToOneWithWhereWithoutCustomerTagInputSchema } from './TagUpdateToOneWithWhereWithoutCustomerTagInputSchema'
import { TagUpdateWithoutCustomerTagInputSchema } from './TagUpdateWithoutCustomerTagInputSchema'
import { TagUncheckedUpdateWithoutCustomerTagInputSchema } from './TagUncheckedUpdateWithoutCustomerTagInputSchema'

export const TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutCustomerTagNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TagCreateWithoutCustomerTagInputSchema),
                    z.lazy(() => TagUncheckedCreateWithoutCustomerTagInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutCustomerTagInputSchema).optional(),
            upsert: z.lazy(() => TagUpsertWithoutCustomerTagInputSchema).optional(),
            connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => TagUpdateToOneWithWhereWithoutCustomerTagInputSchema),
                    z.lazy(() => TagUpdateWithoutCustomerTagInputSchema),
                    z.lazy(() => TagUncheckedUpdateWithoutCustomerTagInputSchema)
                ])
                .optional()
        })
        .strict()

export default TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema
