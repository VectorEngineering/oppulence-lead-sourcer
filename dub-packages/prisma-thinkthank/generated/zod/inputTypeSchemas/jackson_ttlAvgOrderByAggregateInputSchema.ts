import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const jackson_ttlAvgOrderByAggregateInputSchema: z.ZodType<Prisma.jackson_ttlAvgOrderByAggregateInput> = z.object({
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default jackson_ttlAvgOrderByAggregateInputSchema;
