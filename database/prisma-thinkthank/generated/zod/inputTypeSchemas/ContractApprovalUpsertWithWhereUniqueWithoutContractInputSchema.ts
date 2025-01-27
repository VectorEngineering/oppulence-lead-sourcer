import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractApprovalWhereUniqueInputSchema } from './ContractApprovalWhereUniqueInputSchema'
import { ContractApprovalUpdateWithoutContractInputSchema } from './ContractApprovalUpdateWithoutContractInputSchema'
import { ContractApprovalUncheckedUpdateWithoutContractInputSchema } from './ContractApprovalUncheckedUpdateWithoutContractInputSchema'
import { ContractApprovalCreateWithoutContractInputSchema } from './ContractApprovalCreateWithoutContractInputSchema'
import { ContractApprovalUncheckedCreateWithoutContractInputSchema } from './ContractApprovalUncheckedCreateWithoutContractInputSchema'

export const ContractApprovalUpsertWithWhereUniqueWithoutContractInputSchema: z.ZodType<Prisma.ContractApprovalUpsertWithWhereUniqueWithoutContractInput> =
    z
        .object({
            where: z.lazy(() => ContractApprovalWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ContractApprovalUpdateWithoutContractInputSchema),
                z.lazy(() => ContractApprovalUncheckedUpdateWithoutContractInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ContractApprovalCreateWithoutContractInputSchema),
                z.lazy(() => ContractApprovalUncheckedCreateWithoutContractInputSchema)
            ])
        })
        .strict()

export default ContractApprovalUpsertWithWhereUniqueWithoutContractInputSchema
