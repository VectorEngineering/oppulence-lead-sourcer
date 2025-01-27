import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerCreateNestedOneWithoutCustomerTagsInputSchema } from './CustomerCreateNestedOneWithoutCustomerTagsInputSchema'
import { TagCreateNestedOneWithoutCustomerTagInputSchema } from './TagCreateNestedOneWithoutCustomerTagInputSchema'

export const CustomerTagCreateWithoutProjectInputSchema: z.ZodType<Prisma.CustomerTagCreateWithoutProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        customer: z.lazy(() => CustomerCreateNestedOneWithoutCustomerTagsInputSchema),
        tag: z.lazy(() => TagCreateNestedOneWithoutCustomerTagInputSchema)
    })
    .strict()

export default CustomerTagCreateWithoutProjectInputSchema
