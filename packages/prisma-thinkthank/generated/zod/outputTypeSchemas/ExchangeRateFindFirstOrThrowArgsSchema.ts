import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExchangeRateWhereInputSchema } from '../inputTypeSchemas/ExchangeRateWhereInputSchema'
import { ExchangeRateOrderByWithRelationInputSchema } from '../inputTypeSchemas/ExchangeRateOrderByWithRelationInputSchema'
import { ExchangeRateWhereUniqueInputSchema } from '../inputTypeSchemas/ExchangeRateWhereUniqueInputSchema'
import { ExchangeRateScalarFieldEnumSchema } from '../inputTypeSchemas/ExchangeRateScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ExchangeRateSelectSchema: z.ZodType<Prisma.ExchangeRateSelect> = z.object({
  id: z.boolean().optional(),
  baseCurrency: z.boolean().optional(),
  targetCurrency: z.boolean().optional(),
  rate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const ExchangeRateFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ExchangeRateFindFirstOrThrowArgs> = z.object({
  select: ExchangeRateSelectSchema.optional(),
  where: ExchangeRateWhereInputSchema.optional(),
  orderBy: z.union([ ExchangeRateOrderByWithRelationInputSchema.array(),ExchangeRateOrderByWithRelationInputSchema ]).optional(),
  cursor: ExchangeRateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ExchangeRateScalarFieldEnumSchema,ExchangeRateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ExchangeRateFindFirstOrThrowArgsSchema;
