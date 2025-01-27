import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ExchangeRateUpdateInputSchema } from '../inputTypeSchemas/ExchangeRateUpdateInputSchema'
import { ExchangeRateUncheckedUpdateInputSchema } from '../inputTypeSchemas/ExchangeRateUncheckedUpdateInputSchema'
import { ExchangeRateWhereUniqueInputSchema } from '../inputTypeSchemas/ExchangeRateWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ExchangeRateSelectSchema: z.ZodType<Prisma.ExchangeRateSelect> = z
    .object({
        id: z.boolean().optional(),
        baseCurrency: z.boolean().optional(),
        targetCurrency: z.boolean().optional(),
        rate: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional()
    })
    .strict()

export const ExchangeRateUpdateArgsSchema: z.ZodType<Prisma.ExchangeRateUpdateArgs> = z
    .object({
        select: ExchangeRateSelectSchema.optional(),
        data: z.union([ExchangeRateUpdateInputSchema, ExchangeRateUncheckedUpdateInputSchema]),
        where: ExchangeRateWhereUniqueInputSchema
    })
    .strict()

export default ExchangeRateUpdateArgsSchema
