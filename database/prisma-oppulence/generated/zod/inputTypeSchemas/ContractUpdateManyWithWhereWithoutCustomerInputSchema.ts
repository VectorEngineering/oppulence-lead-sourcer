import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractScalarWhereInputSchema } from './ContractScalarWhereInputSchema'
import { ContractUpdateManyMutationInputSchema } from './ContractUpdateManyMutationInputSchema'
import { ContractUncheckedUpdateManyWithoutCustomerInputSchema } from './ContractUncheckedUpdateManyWithoutCustomerInputSchema'

export const ContractUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.ContractUpdateManyWithWhereWithoutCustomerInput> = z
    .object({
        where: z.lazy(() => ContractScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => ContractUpdateManyMutationInputSchema),
            z.lazy(() => ContractUncheckedUpdateManyWithoutCustomerInputSchema)
        ])
    })
    .strict()

export default ContractUpdateManyWithWhereWithoutCustomerInputSchema
