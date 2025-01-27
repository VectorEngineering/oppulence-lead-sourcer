import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionSettingsWhereInputSchema } from '../inputTypeSchemas/BankConnectionSettingsWhereInputSchema'
import { BankConnectionSettingsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BankConnectionSettingsOrderByWithAggregationInputSchema'
import { BankConnectionSettingsScalarFieldEnumSchema } from '../inputTypeSchemas/BankConnectionSettingsScalarFieldEnumSchema'
import { BankConnectionSettingsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BankConnectionSettingsScalarWhereWithAggregatesInputSchema'

export const BankConnectionSettingsGroupByArgsSchema: z.ZodType<Prisma.BankConnectionSettingsGroupByArgs> = z
    .object({
        where: BankConnectionSettingsWhereInputSchema.optional(),
        orderBy: z
            .union([
                BankConnectionSettingsOrderByWithAggregationInputSchema.array(),
                BankConnectionSettingsOrderByWithAggregationInputSchema
            ])
            .optional(),
        by: BankConnectionSettingsScalarFieldEnumSchema.array(),
        having: BankConnectionSettingsScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default BankConnectionSettingsGroupByArgsSchema
