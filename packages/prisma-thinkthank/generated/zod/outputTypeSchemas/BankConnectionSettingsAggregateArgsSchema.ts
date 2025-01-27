import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionSettingsWhereInputSchema } from '../inputTypeSchemas/BankConnectionSettingsWhereInputSchema'
import { BankConnectionSettingsOrderByWithRelationInputSchema } from '../inputTypeSchemas/BankConnectionSettingsOrderByWithRelationInputSchema'
import { BankConnectionSettingsWhereUniqueInputSchema } from '../inputTypeSchemas/BankConnectionSettingsWhereUniqueInputSchema'

export const BankConnectionSettingsAggregateArgsSchema: z.ZodType<Prisma.BankConnectionSettingsAggregateArgs> = z
    .object({
        where: BankConnectionSettingsWhereInputSchema.optional(),
        orderBy: z
            .union([BankConnectionSettingsOrderByWithRelationInputSchema.array(), BankConnectionSettingsOrderByWithRelationInputSchema])
            .optional(),
        cursor: BankConnectionSettingsWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default BankConnectionSettingsAggregateArgsSchema
