import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractApprovalWhereInputSchema } from '../inputTypeSchemas/ContractApprovalWhereInputSchema'
import { ContractApprovalOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ContractApprovalOrderByWithAggregationInputSchema'
import { ContractApprovalScalarFieldEnumSchema } from '../inputTypeSchemas/ContractApprovalScalarFieldEnumSchema'
import { ContractApprovalScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ContractApprovalScalarWhereWithAggregatesInputSchema'

export const ContractApprovalGroupByArgsSchema: z.ZodType<Prisma.ContractApprovalGroupByArgs> = z
    .object({
        where: ContractApprovalWhereInputSchema.optional(),
        orderBy: z
            .union([ContractApprovalOrderByWithAggregationInputSchema.array(), ContractApprovalOrderByWithAggregationInputSchema])
            .optional(),
        by: ContractApprovalScalarFieldEnumSchema.array(),
        having: ContractApprovalScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ContractApprovalGroupByArgsSchema
