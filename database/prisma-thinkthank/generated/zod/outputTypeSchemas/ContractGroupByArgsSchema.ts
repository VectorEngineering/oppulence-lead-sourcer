import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractWhereInputSchema } from '../inputTypeSchemas/ContractWhereInputSchema'
import { ContractOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ContractOrderByWithAggregationInputSchema'
import { ContractScalarFieldEnumSchema } from '../inputTypeSchemas/ContractScalarFieldEnumSchema'
import { ContractScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ContractScalarWhereWithAggregatesInputSchema'

export const ContractGroupByArgsSchema: z.ZodType<Prisma.ContractGroupByArgs> = z
    .object({
        where: ContractWhereInputSchema.optional(),
        orderBy: z.union([ContractOrderByWithAggregationInputSchema.array(), ContractOrderByWithAggregationInputSchema]).optional(),
        by: ContractScalarFieldEnumSchema.array(),
        having: ContractScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ContractGroupByArgsSchema
