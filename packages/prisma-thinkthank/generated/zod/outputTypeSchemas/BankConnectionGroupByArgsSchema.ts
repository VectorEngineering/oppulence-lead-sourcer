import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionWhereInputSchema } from '../inputTypeSchemas/BankConnectionWhereInputSchema'
import { BankConnectionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BankConnectionOrderByWithAggregationInputSchema'
import { BankConnectionScalarFieldEnumSchema } from '../inputTypeSchemas/BankConnectionScalarFieldEnumSchema'
import { BankConnectionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BankConnectionScalarWhereWithAggregatesInputSchema'

export const BankConnectionGroupByArgsSchema: z.ZodType<Prisma.BankConnectionGroupByArgs> = z
    .object({
        where: BankConnectionWhereInputSchema.optional(),
        orderBy: z
            .union([BankConnectionOrderByWithAggregationInputSchema.array(), BankConnectionOrderByWithAggregationInputSchema])
            .optional(),
        by: BankConnectionScalarFieldEnumSchema.array(),
        having: BankConnectionScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default BankConnectionGroupByArgsSchema
