import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateNestedOneWithoutContractApprovalsInputSchema } from './ContractCreateNestedOneWithoutContractApprovalsInputSchema'

export const ContractApprovalCreateInputSchema: z.ZodType<Prisma.ContractApprovalCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        stage: z.string(),
        status: z.string(),
        approverRole: z.string(),
        approverId: z.string().optional().nullable(),
        comments: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        contract: z.lazy(() => ContractCreateNestedOneWithoutContractApprovalsInputSchema)
    })
    .strict()

export default ContractApprovalCreateInputSchema
