import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankAccountWhereInputSchema } from '../inputTypeSchemas/BankAccountWhereInputSchema'
import { BankAccountOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BankAccountOrderByWithAggregationInputSchema'
import { BankAccountScalarFieldEnumSchema } from '../inputTypeSchemas/BankAccountScalarFieldEnumSchema'
import { BankAccountScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BankAccountScalarWhereWithAggregatesInputSchema'

export const BankAccountGroupByArgsSchema: z.ZodType<Prisma.BankAccountGroupByArgs> = z
    .object({
        where: BankAccountWhereInputSchema.optional(),
        orderBy: z.union([BankAccountOrderByWithAggregationInputSchema.array(), BankAccountOrderByWithAggregationInputSchema]).optional(),
        by: BankAccountScalarFieldEnumSchema.array(),
        having: BankAccountScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default BankAccountGroupByArgsSchema
