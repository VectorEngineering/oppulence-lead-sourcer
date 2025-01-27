import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExchangeRateCreateManyInputSchema } from '../inputTypeSchemas/ExchangeRateCreateManyInputSchema'

export const ExchangeRateCreateManyArgsSchema: z.ZodType<Prisma.ExchangeRateCreateManyArgs> = z.object({
  data: z.union([ ExchangeRateCreateManyInputSchema,ExchangeRateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ExchangeRateCreateManyArgsSchema;
