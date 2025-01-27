import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const jackson_ttlCountOrderByAggregateInputSchema: z.ZodType<Prisma.jackson_ttlCountOrderByAggregateInput> = z.object({
  key: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default jackson_ttlCountOrderByAggregateInputSchema;
