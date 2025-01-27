import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankAccountWhereInputSchema } from '../inputTypeSchemas/BankAccountWhereInputSchema'
import { BankAccountOrderByWithRelationInputSchema } from '../inputTypeSchemas/BankAccountOrderByWithRelationInputSchema'
import { BankAccountWhereUniqueInputSchema } from '../inputTypeSchemas/BankAccountWhereUniqueInputSchema'

export const BankAccountAggregateArgsSchema: z.ZodType<Prisma.BankAccountAggregateArgs> = z
    .object({
        where: BankAccountWhereInputSchema.optional(),
        orderBy: z.union([BankAccountOrderByWithRelationInputSchema.array(), BankAccountOrderByWithRelationInputSchema]).optional(),
        cursor: BankAccountWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default BankAccountAggregateArgsSchema
