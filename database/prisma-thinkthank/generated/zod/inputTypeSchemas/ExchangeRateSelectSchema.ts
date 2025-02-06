import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ExchangeRateSelectSchema: z.ZodType<Prisma.ExchangeRateSelect> = z.object({
  id: z.boolean().optional(),
  baseCurrency: z.boolean().optional(),
  targetCurrency: z.boolean().optional(),
  rate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export default ExchangeRateSelectSchema;
