import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ExchangeRateSumOrderByAggregateInputSchema: z.ZodType<Prisma.ExchangeRateSumOrderByAggregateInput> = z.object({
  rate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ExchangeRateSumOrderByAggregateInputSchema;
