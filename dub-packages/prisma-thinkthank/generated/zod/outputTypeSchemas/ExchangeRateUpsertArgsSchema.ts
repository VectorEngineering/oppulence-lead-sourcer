import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExchangeRateWhereUniqueInputSchema } from '../inputTypeSchemas/ExchangeRateWhereUniqueInputSchema'
import { ExchangeRateCreateInputSchema } from '../inputTypeSchemas/ExchangeRateCreateInputSchema'
import { ExchangeRateUncheckedCreateInputSchema } from '../inputTypeSchemas/ExchangeRateUncheckedCreateInputSchema'
import { ExchangeRateUpdateInputSchema } from '../inputTypeSchemas/ExchangeRateUpdateInputSchema'
import { ExchangeRateUncheckedUpdateInputSchema } from '../inputTypeSchemas/ExchangeRateUncheckedUpdateInputSchema'
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

export const ExchangeRateUpsertArgsSchema: z.ZodType<Prisma.ExchangeRateUpsertArgs> = z.object({
  select: ExchangeRateSelectSchema.optional(),
  where: ExchangeRateWhereUniqueInputSchema,
  create: z.union([ ExchangeRateCreateInputSchema,ExchangeRateUncheckedCreateInputSchema ]),
  update: z.union([ ExchangeRateUpdateInputSchema,ExchangeRateUncheckedUpdateInputSchema ]),
}).strict() ;

export default ExchangeRateUpsertArgsSchema;
