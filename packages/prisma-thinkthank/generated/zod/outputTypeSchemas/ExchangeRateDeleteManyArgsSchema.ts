import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExchangeRateWhereInputSchema } from '../inputTypeSchemas/ExchangeRateWhereInputSchema'

export const ExchangeRateDeleteManyArgsSchema: z.ZodType<Prisma.ExchangeRateDeleteManyArgs> = z.object({
  where: ExchangeRateWhereInputSchema.optional(),
}).strict() ;

export default ExchangeRateDeleteManyArgsSchema;
