import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const jackson_ttlSumOrderByAggregateInputSchema: z.ZodType<Prisma.jackson_ttlSumOrderByAggregateInput> = z.object({
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default jackson_ttlSumOrderByAggregateInputSchema;
