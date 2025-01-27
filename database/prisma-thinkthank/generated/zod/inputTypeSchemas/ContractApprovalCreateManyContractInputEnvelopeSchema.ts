import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractApprovalCreateManyContractInputSchema } from './ContractApprovalCreateManyContractInputSchema'

export const ContractApprovalCreateManyContractInputEnvelopeSchema: z.ZodType<Prisma.ContractApprovalCreateManyContractInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ContractApprovalCreateManyContractInputSchema),
            z.lazy(() => ContractApprovalCreateManyContractInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ContractApprovalCreateManyContractInputEnvelopeSchema
