import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractApprovalWhereInputSchema } from '../inputTypeSchemas/ContractApprovalWhereInputSchema'
import { ContractApprovalOrderByWithRelationInputSchema } from '../inputTypeSchemas/ContractApprovalOrderByWithRelationInputSchema'
import { ContractApprovalWhereUniqueInputSchema } from '../inputTypeSchemas/ContractApprovalWhereUniqueInputSchema'

export const ContractApprovalAggregateArgsSchema: z.ZodType<Prisma.ContractApprovalAggregateArgs> = z
    .object({
        where: ContractApprovalWhereInputSchema.optional(),
        orderBy: z
            .union([ContractApprovalOrderByWithRelationInputSchema.array(), ContractApprovalOrderByWithRelationInputSchema])
            .optional(),
        cursor: ContractApprovalWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ContractApprovalAggregateArgsSchema
