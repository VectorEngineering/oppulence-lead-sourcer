import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractApprovalWhereUniqueInputSchema } from './ContractApprovalWhereUniqueInputSchema'
import { ContractApprovalCreateWithoutContractInputSchema } from './ContractApprovalCreateWithoutContractInputSchema'
import { ContractApprovalUncheckedCreateWithoutContractInputSchema } from './ContractApprovalUncheckedCreateWithoutContractInputSchema'

export const ContractApprovalCreateOrConnectWithoutContractInputSchema: z.ZodType<Prisma.ContractApprovalCreateOrConnectWithoutContractInput> =
    z
        .object({
            where: z.lazy(() => ContractApprovalWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ContractApprovalCreateWithoutContractInputSchema),
                z.lazy(() => ContractApprovalUncheckedCreateWithoutContractInputSchema)
            ])
        })
        .strict()

export default ContractApprovalCreateOrConnectWithoutContractInputSchema
