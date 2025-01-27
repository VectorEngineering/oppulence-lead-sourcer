import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ExchangeRateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ExchangeRateAvgOrderByAggregateInput> = z.object({
  rate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ExchangeRateAvgOrderByAggregateInputSchema;
