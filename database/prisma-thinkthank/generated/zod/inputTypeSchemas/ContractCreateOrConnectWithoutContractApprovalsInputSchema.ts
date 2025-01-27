import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractCreateWithoutContractApprovalsInputSchema } from './ContractCreateWithoutContractApprovalsInputSchema'
import { ContractUncheckedCreateWithoutContractApprovalsInputSchema } from './ContractUncheckedCreateWithoutContractApprovalsInputSchema'

export const ContractCreateOrConnectWithoutContractApprovalsInputSchema: z.ZodType<Prisma.ContractCreateOrConnectWithoutContractApprovalsInput> =
    z
        .object({
            where: z.lazy(() => ContractWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ContractCreateWithoutContractApprovalsInputSchema),
                z.lazy(() => ContractUncheckedCreateWithoutContractApprovalsInputSchema)
            ])
        })
        .strict()

export default ContractCreateOrConnectWithoutContractApprovalsInputSchema
