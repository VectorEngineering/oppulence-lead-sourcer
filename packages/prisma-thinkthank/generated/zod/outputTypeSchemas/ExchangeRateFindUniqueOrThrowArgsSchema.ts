import { z } from 'zod'
import type { Prisma } from '@prisma/client'
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

export const ExchangeRateFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ExchangeRateFindUniqueOrThrowArgs> = z
    .object({
        select: ExchangeRateSelectSchema.optional(),
        where: ExchangeRateWhereUniqueInputSchema
    })
    .strict()

export default ExchangeRateFindUniqueOrThrowArgsSchema
