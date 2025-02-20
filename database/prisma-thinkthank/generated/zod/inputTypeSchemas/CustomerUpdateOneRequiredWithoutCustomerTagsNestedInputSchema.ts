import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerCreateWithoutCustomerTagsInputSchema } from './CustomerCreateWithoutCustomerTagsInputSchema'
import { CustomerUncheckedCreateWithoutCustomerTagsInputSchema } from './CustomerUncheckedCreateWithoutCustomerTagsInputSchema'
import { CustomerCreateOrConnectWithoutCustomerTagsInputSchema } from './CustomerCreateOrConnectWithoutCustomerTagsInputSchema'
import { CustomerUpsertWithoutCustomerTagsInputSchema } from './CustomerUpsertWithoutCustomerTagsInputSchema'
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema'
import { CustomerUpdateToOneWithWhereWithoutCustomerTagsInputSchema } from './CustomerUpdateToOneWithWhereWithoutCustomerTagsInputSchema'
import { CustomerUpdateWithoutCustomerTagsInputSchema } from './CustomerUpdateWithoutCustomerTagsInputSchema'
import { CustomerUncheckedUpdateWithoutCustomerTagsInputSchema } from './CustomerUncheckedUpdateWithoutCustomerTagsInputSchema'

export const CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutCustomerTagsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => CustomerCreateWithoutCustomerTagsInputSchema),
                    z.lazy(() => CustomerUncheckedCreateWithoutCustomerTagsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutCustomerTagsInputSchema).optional(),
            upsert: z.lazy(() => CustomerUpsertWithoutCustomerTagsInputSchema).optional(),
            connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => CustomerUpdateToOneWithWhereWithoutCustomerTagsInputSchema),
                    z.lazy(() => CustomerUpdateWithoutCustomerTagsInputSchema),
                    z.lazy(() => CustomerUncheckedUpdateWithoutCustomerTagsInputSchema)
                ])
                .optional()
        })
        .strict()

export default CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema
