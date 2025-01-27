import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractVersionWhereInputSchema } from '../inputTypeSchemas/ContractVersionWhereInputSchema'
import { ContractVersionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ContractVersionOrderByWithAggregationInputSchema'
import { ContractVersionScalarFieldEnumSchema } from '../inputTypeSchemas/ContractVersionScalarFieldEnumSchema'
import { ContractVersionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ContractVersionScalarWhereWithAggregatesInputSchema'

export const ContractVersionGroupByArgsSchema: z.ZodType<Prisma.ContractVersionGroupByArgs> = z
    .object({
        where: ContractVersionWhereInputSchema.optional(),
        orderBy: z
            .union([ContractVersionOrderByWithAggregationInputSchema.array(), ContractVersionOrderByWithAggregationInputSchema])
            .optional(),
        by: ContractVersionScalarFieldEnumSchema.array(),
        having: ContractVersionScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ContractVersionGroupByArgsSchema
