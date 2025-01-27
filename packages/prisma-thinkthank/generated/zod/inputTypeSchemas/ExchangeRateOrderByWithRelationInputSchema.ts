import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ExchangeRateOrderByRelevanceInputSchema } from './ExchangeRateOrderByRelevanceInputSchema';

export const ExchangeRateOrderByWithRelationInputSchema: z.ZodType<Prisma.ExchangeRateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  baseCurrency: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  targetCurrency: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => ExchangeRateOrderByRelevanceInputSchema).optional()
}).strict();

export default ExchangeRateOrderByWithRelationInputSchema;
