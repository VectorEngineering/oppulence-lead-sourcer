import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagCreateWithoutCustomerTagInputSchema } from './TagCreateWithoutCustomerTagInputSchema'
import { TagUncheckedCreateWithoutCustomerTagInputSchema } from './TagUncheckedCreateWithoutCustomerTagInputSchema'
import { TagCreateOrConnectWithoutCustomerTagInputSchema } from './TagCreateOrConnectWithoutCustomerTagInputSchema'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'

export const TagCreateNestedOneWithoutCustomerTagInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutCustomerTagInput> = z
    .object({
        create: z
            .union([z.lazy(() => TagCreateWithoutCustomerTagInputSchema), z.lazy(() => TagUncheckedCreateWithoutCustomerTagInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutCustomerTagInputSchema).optional(),
        connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
    })
    .strict()

export default TagCreateNestedOneWithoutCustomerTagInputSchema
