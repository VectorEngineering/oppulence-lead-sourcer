import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const jackson_indexSumOrderByAggregateInputSchema: z.ZodType<Prisma.jackson_indexSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default jackson_indexSumOrderByAggregateInputSchema;
