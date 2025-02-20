import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractWhereInputSchema } from '../inputTypeSchemas/ContractWhereInputSchema'
import { ContractOrderByWithRelationInputSchema } from '../inputTypeSchemas/ContractOrderByWithRelationInputSchema'
import { ContractWhereUniqueInputSchema } from '../inputTypeSchemas/ContractWhereUniqueInputSchema'

export const ContractAggregateArgsSchema: z.ZodType<Prisma.ContractAggregateArgs> = z
    .object({
        where: ContractWhereInputSchema.optional(),
        orderBy: z.union([ContractOrderByWithRelationInputSchema.array(), ContractOrderByWithRelationInputSchema]).optional(),
        cursor: ContractWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ContractAggregateArgsSchema
