import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractCreateWithoutCustomerInputSchema } from './ContractCreateWithoutCustomerInputSchema'
import { ContractUncheckedCreateWithoutCustomerInputSchema } from './ContractUncheckedCreateWithoutCustomerInputSchema'

export const ContractCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.ContractCreateOrConnectWithoutCustomerInput> = z
    .object({
        where: z.lazy(() => ContractWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ContractCreateWithoutCustomerInputSchema),
            z.lazy(() => ContractUncheckedCreateWithoutCustomerInputSchema)
        ])
    })
    .strict()

export default ContractCreateOrConnectWithoutCustomerInputSchema
