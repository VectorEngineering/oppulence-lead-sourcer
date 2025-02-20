import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractUpdateWithoutCustomerInputSchema } from './ContractUpdateWithoutCustomerInputSchema'
import { ContractUncheckedUpdateWithoutCustomerInputSchema } from './ContractUncheckedUpdateWithoutCustomerInputSchema'
import { ContractCreateWithoutCustomerInputSchema } from './ContractCreateWithoutCustomerInputSchema'
import { ContractUncheckedCreateWithoutCustomerInputSchema } from './ContractUncheckedCreateWithoutCustomerInputSchema'

export const ContractUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.ContractUpsertWithWhereUniqueWithoutCustomerInput> =
    z
        .object({
            where: z.lazy(() => ContractWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ContractUpdateWithoutCustomerInputSchema),
                z.lazy(() => ContractUncheckedUpdateWithoutCustomerInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ContractCreateWithoutCustomerInputSchema),
                z.lazy(() => ContractUncheckedCreateWithoutCustomerInputSchema)
            ])
        })
        .strict()

export default ContractUpsertWithWhereUniqueWithoutCustomerInputSchema
