import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractDocumentWhereInputSchema } from '../inputTypeSchemas/ContractDocumentWhereInputSchema'
import { ContractDocumentOrderByWithRelationInputSchema } from '../inputTypeSchemas/ContractDocumentOrderByWithRelationInputSchema'
import { ContractDocumentWhereUniqueInputSchema } from '../inputTypeSchemas/ContractDocumentWhereUniqueInputSchema'

export const ContractDocumentAggregateArgsSchema: z.ZodType<Prisma.ContractDocumentAggregateArgs> = z
    .object({
        where: ContractDocumentWhereInputSchema.optional(),
        orderBy: z
            .union([ContractDocumentOrderByWithRelationInputSchema.array(), ContractDocumentOrderByWithRelationInputSchema])
            .optional(),
        cursor: ContractDocumentWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ContractDocumentAggregateArgsSchema
