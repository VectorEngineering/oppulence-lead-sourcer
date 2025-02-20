import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionWhereInputSchema } from '../inputTypeSchemas/BankConnectionWhereInputSchema'
import { BankConnectionOrderByWithRelationInputSchema } from '../inputTypeSchemas/BankConnectionOrderByWithRelationInputSchema'
import { BankConnectionWhereUniqueInputSchema } from '../inputTypeSchemas/BankConnectionWhereUniqueInputSchema'

export const BankConnectionAggregateArgsSchema: z.ZodType<Prisma.BankConnectionAggregateArgs> = z
    .object({
        where: BankConnectionWhereInputSchema.optional(),
        orderBy: z.union([BankConnectionOrderByWithRelationInputSchema.array(), BankConnectionOrderByWithRelationInputSchema]).optional(),
        cursor: BankConnectionWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default BankConnectionAggregateArgsSchema
