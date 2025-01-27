import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagCreateWithoutCustomerInputSchema } from './CustomerTagCreateWithoutCustomerInputSchema'
import { CustomerTagUncheckedCreateWithoutCustomerInputSchema } from './CustomerTagUncheckedCreateWithoutCustomerInputSchema'
import { CustomerTagCreateOrConnectWithoutCustomerInputSchema } from './CustomerTagCreateOrConnectWithoutCustomerInputSchema'
import { CustomerTagCreateManyCustomerInputEnvelopeSchema } from './CustomerTagCreateManyCustomerInputEnvelopeSchema'
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema'

export const CustomerTagUncheckedCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.CustomerTagUncheckedCreateNestedManyWithoutCustomerInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => CustomerTagCreateWithoutCustomerInputSchema),
                    z.lazy(() => CustomerTagCreateWithoutCustomerInputSchema).array(),
                    z.lazy(() => CustomerTagUncheckedCreateWithoutCustomerInputSchema),
                    z.lazy(() => CustomerTagUncheckedCreateWithoutCustomerInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => CustomerTagCreateOrConnectWithoutCustomerInputSchema),
                    z.lazy(() => CustomerTagCreateOrConnectWithoutCustomerInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => CustomerTagCreateManyCustomerInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => CustomerTagWhereUniqueInputSchema), z.lazy(() => CustomerTagWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default CustomerTagUncheckedCreateNestedManyWithoutCustomerInputSchema
