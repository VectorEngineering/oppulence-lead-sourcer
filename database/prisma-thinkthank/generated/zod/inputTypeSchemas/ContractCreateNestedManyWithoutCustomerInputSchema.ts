import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutCustomerInputSchema } from './ContractCreateWithoutCustomerInputSchema'
import { ContractUncheckedCreateWithoutCustomerInputSchema } from './ContractUncheckedCreateWithoutCustomerInputSchema'
import { ContractCreateOrConnectWithoutCustomerInputSchema } from './ContractCreateOrConnectWithoutCustomerInputSchema'
import { ContractCreateManyCustomerInputEnvelopeSchema } from './ContractCreateManyCustomerInputEnvelopeSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'

export const ContractCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.ContractCreateNestedManyWithoutCustomerInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ContractCreateWithoutCustomerInputSchema),
                z.lazy(() => ContractCreateWithoutCustomerInputSchema).array(),
                z.lazy(() => ContractUncheckedCreateWithoutCustomerInputSchema),
                z.lazy(() => ContractUncheckedCreateWithoutCustomerInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ContractCreateOrConnectWithoutCustomerInputSchema),
                z.lazy(() => ContractCreateOrConnectWithoutCustomerInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => ContractCreateManyCustomerInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => ContractWhereUniqueInputSchema), z.lazy(() => ContractWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default ContractCreateNestedManyWithoutCustomerInputSchema
