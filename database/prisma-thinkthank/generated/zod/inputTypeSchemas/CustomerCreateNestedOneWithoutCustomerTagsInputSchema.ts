import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerCreateWithoutCustomerTagsInputSchema } from './CustomerCreateWithoutCustomerTagsInputSchema'
import { CustomerUncheckedCreateWithoutCustomerTagsInputSchema } from './CustomerUncheckedCreateWithoutCustomerTagsInputSchema'
import { CustomerCreateOrConnectWithoutCustomerTagsInputSchema } from './CustomerCreateOrConnectWithoutCustomerTagsInputSchema'
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema'

export const CustomerCreateNestedOneWithoutCustomerTagsInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutCustomerTagsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => CustomerCreateWithoutCustomerTagsInputSchema),
                z.lazy(() => CustomerUncheckedCreateWithoutCustomerTagsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutCustomerTagsInputSchema).optional(),
        connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional()
    })
    .strict()

export default CustomerCreateNestedOneWithoutCustomerTagsInputSchema
