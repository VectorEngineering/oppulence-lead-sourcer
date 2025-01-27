import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractApprovalIncludeSchema } from '../inputTypeSchemas/ContractApprovalIncludeSchema'
import { ContractApprovalCreateInputSchema } from '../inputTypeSchemas/ContractApprovalCreateInputSchema'
import { ContractApprovalUncheckedCreateInputSchema } from '../inputTypeSchemas/ContractApprovalUncheckedCreateInputSchema'
import { ContractArgsSchema } from './ContractArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContractApprovalSelectSchema: z.ZodType<Prisma.ContractApprovalSelect> = z
    .object({
        id: z.boolean().optional(),
        contractId: z.boolean().optional(),
        stage: z.boolean().optional(),
        status: z.boolean().optional(),
        approverRole: z.boolean().optional(),
        approverId: z.boolean().optional(),
        comments: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        contract: z.union([z.boolean(), z.lazy(() => ContractArgsSchema)]).optional()
    })
    .strict()

export const ContractApprovalCreateArgsSchema: z.ZodType<Prisma.ContractApprovalCreateArgs> = z
    .object({
        select: ContractApprovalSelectSchema.optional(),
        include: ContractApprovalIncludeSchema.optional(),
        data: z.union([ContractApprovalCreateInputSchema, ContractApprovalUncheckedCreateInputSchema])
    })
    .strict()

export default ContractApprovalCreateArgsSchema
