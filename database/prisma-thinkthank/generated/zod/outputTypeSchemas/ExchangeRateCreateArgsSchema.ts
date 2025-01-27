import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ExchangeRateCreateInputSchema } from '../inputTypeSchemas/ExchangeRateCreateInputSchema'
import { ExchangeRateUncheckedCreateInputSchema } from '../inputTypeSchemas/ExchangeRateUncheckedCreateInputSchema'
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

export const ExchangeRateCreateArgsSchema: z.ZodType<Prisma.ExchangeRateCreateArgs> = z
    .object({
        select: ExchangeRateSelectSchema.optional(),
        data: z.union([ExchangeRateCreateInputSchema, ExchangeRateUncheckedCreateInputSchema])
    })
    .strict()

export default ExchangeRateCreateArgsSchema
