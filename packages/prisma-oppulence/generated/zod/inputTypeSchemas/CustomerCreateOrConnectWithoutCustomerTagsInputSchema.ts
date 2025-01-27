import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema'
import { CustomerCreateWithoutCustomerTagsInputSchema } from './CustomerCreateWithoutCustomerTagsInputSchema'
import { CustomerUncheckedCreateWithoutCustomerTagsInputSchema } from './CustomerUncheckedCreateWithoutCustomerTagsInputSchema'

export const CustomerCreateOrConnectWithoutCustomerTagsInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutCustomerTagsInput> = z
    .object({
        where: z.lazy(() => CustomerWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => CustomerCreateWithoutCustomerTagsInputSchema),
            z.lazy(() => CustomerUncheckedCreateWithoutCustomerTagsInputSchema)
        ])
    })
    .strict()

export default CustomerCreateOrConnectWithoutCustomerTagsInputSchema
