import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ExchangeRateWhereInputSchema } from '../inputTypeSchemas/ExchangeRateWhereInputSchema'
import { ExchangeRateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ExchangeRateOrderByWithAggregationInputSchema'
import { ExchangeRateScalarFieldEnumSchema } from '../inputTypeSchemas/ExchangeRateScalarFieldEnumSchema'
import { ExchangeRateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ExchangeRateScalarWhereWithAggregatesInputSchema'

export const ExchangeRateGroupByArgsSchema: z.ZodType<Prisma.ExchangeRateGroupByArgs> = z
    .object({
        where: ExchangeRateWhereInputSchema.optional(),
        orderBy: z.union([ExchangeRateOrderByWithAggregationInputSchema.array(), ExchangeRateOrderByWithAggregationInputSchema]).optional(),
        by: ExchangeRateScalarFieldEnumSchema.array(),
        having: ExchangeRateScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ExchangeRateGroupByArgsSchema
