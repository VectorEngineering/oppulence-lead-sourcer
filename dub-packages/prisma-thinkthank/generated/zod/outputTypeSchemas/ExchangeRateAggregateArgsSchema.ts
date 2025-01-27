import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExchangeRateWhereInputSchema } from '../inputTypeSchemas/ExchangeRateWhereInputSchema'
import { ExchangeRateOrderByWithRelationInputSchema } from '../inputTypeSchemas/ExchangeRateOrderByWithRelationInputSchema'
import { ExchangeRateWhereUniqueInputSchema } from '../inputTypeSchemas/ExchangeRateWhereUniqueInputSchema'

export const ExchangeRateAggregateArgsSchema: z.ZodType<Prisma.ExchangeRateAggregateArgs> = z.object({
  where: ExchangeRateWhereInputSchema.optional(),
  orderBy: z.union([ ExchangeRateOrderByWithRelationInputSchema.array(),ExchangeRateOrderByWithRelationInputSchema ]).optional(),
  cursor: ExchangeRateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ExchangeRateAggregateArgsSchema;
