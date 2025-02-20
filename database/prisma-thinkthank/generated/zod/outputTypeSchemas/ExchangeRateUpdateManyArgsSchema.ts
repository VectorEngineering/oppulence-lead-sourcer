import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExchangeRateUpdateManyMutationInputSchema } from '../inputTypeSchemas/ExchangeRateUpdateManyMutationInputSchema'
import { ExchangeRateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ExchangeRateUncheckedUpdateManyInputSchema'
import { ExchangeRateWhereInputSchema } from '../inputTypeSchemas/ExchangeRateWhereInputSchema'

export const ExchangeRateUpdateManyArgsSchema: z.ZodType<Prisma.ExchangeRateUpdateManyArgs> = z.object({
  data: z.union([ ExchangeRateUpdateManyMutationInputSchema,ExchangeRateUncheckedUpdateManyInputSchema ]),
  where: ExchangeRateWhereInputSchema.optional(),
}).strict() ;

export default ExchangeRateUpdateManyArgsSchema;
