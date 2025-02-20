import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LinkAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LinkAvgOrderByAggregateInput> = z.object({
  clicks: z.lazy(() => SortOrderSchema).optional(),
  leads: z.lazy(() => SortOrderSchema).optional(),
  sales: z.lazy(() => SortOrderSchema).optional(),
  saleAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LinkAvgOrderByAggregateInputSchema;
