import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractCreateWithoutContractVersionsInputSchema } from './ContractCreateWithoutContractVersionsInputSchema'
import { ContractUncheckedCreateWithoutContractVersionsInputSchema } from './ContractUncheckedCreateWithoutContractVersionsInputSchema'

export const ContractCreateOrConnectWithoutContractVersionsInputSchema: z.ZodType<Prisma.ContractCreateOrConnectWithoutContractVersionsInput> =
    z
        .object({
            where: z.lazy(() => ContractWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ContractCreateWithoutContractVersionsInputSchema),
                z.lazy(() => ContractUncheckedCreateWithoutContractVersionsInputSchema)
            ])
        })
        .strict()

export default ContractCreateOrConnectWithoutContractVersionsInputSchema
