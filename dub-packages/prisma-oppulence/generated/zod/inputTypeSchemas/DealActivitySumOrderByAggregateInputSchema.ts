import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DealActivitySumOrderByAggregateInputSchema: z.ZodType<Prisma.DealActivitySumOrderByAggregateInput> = z.object({
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DealActivitySumOrderByAggregateInputSchema;
