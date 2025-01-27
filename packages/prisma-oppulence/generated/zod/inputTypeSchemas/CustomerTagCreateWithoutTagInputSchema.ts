import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerCreateNestedOneWithoutCustomerTagsInputSchema } from './CustomerCreateNestedOneWithoutCustomerTagsInputSchema'
import { ProjectCreateNestedOneWithoutCustomerTagInputSchema } from './ProjectCreateNestedOneWithoutCustomerTagInputSchema'

export const CustomerTagCreateWithoutTagInputSchema: z.ZodType<Prisma.CustomerTagCreateWithoutTagInput> = z
    .object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        customer: z.lazy(() => CustomerCreateNestedOneWithoutCustomerTagsInputSchema),
        project: z.lazy(() => ProjectCreateNestedOneWithoutCustomerTagInputSchema)
    })
    .strict()

export default CustomerTagCreateWithoutTagInputSchema
