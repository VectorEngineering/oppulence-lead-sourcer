import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractArgsSchema } from '../outputTypeSchemas/ContractArgsSchema'

export const ContractApprovalIncludeSchema: z.ZodType<Prisma.ContractApprovalInclude> = z
    .object({
        contract: z.union([z.boolean(), z.lazy(() => ContractArgsSchema)]).optional()
    })
    .strict()

export default ContractApprovalIncludeSchema
