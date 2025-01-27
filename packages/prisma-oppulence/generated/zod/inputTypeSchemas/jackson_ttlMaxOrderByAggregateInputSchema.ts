import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const jackson_ttlMaxOrderByAggregateInputSchema: z.ZodType<Prisma.jackson_ttlMaxOrderByAggregateInput> = z.object({
  key: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default jackson_ttlMaxOrderByAggregateInputSchema;
