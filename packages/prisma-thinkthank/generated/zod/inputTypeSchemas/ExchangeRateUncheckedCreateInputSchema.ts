import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ExchangeRateUncheckedCreateInputSchema: z.ZodType<Prisma.ExchangeRateUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        baseCurrency: z.string().optional().nullable(),
        targetCurrency: z.string().optional().nullable(),
        rate: z.number().int(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default ExchangeRateUncheckedCreateInputSchema
