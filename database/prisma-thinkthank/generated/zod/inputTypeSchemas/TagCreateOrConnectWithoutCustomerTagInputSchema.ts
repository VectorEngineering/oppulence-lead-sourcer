import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'
import { TagCreateWithoutCustomerTagInputSchema } from './TagCreateWithoutCustomerTagInputSchema'
import { TagUncheckedCreateWithoutCustomerTagInputSchema } from './TagUncheckedCreateWithoutCustomerTagInputSchema'

export const TagCreateOrConnectWithoutCustomerTagInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutCustomerTagInput> = z
    .object({
        where: z.lazy(() => TagWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => TagCreateWithoutCustomerTagInputSchema),
            z.lazy(() => TagUncheckedCreateWithoutCustomerTagInputSchema)
        ])
    })
    .strict()

export default TagCreateOrConnectWithoutCustomerTagInputSchema
