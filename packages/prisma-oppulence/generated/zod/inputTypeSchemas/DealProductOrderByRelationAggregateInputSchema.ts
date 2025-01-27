import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DealProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DealProductOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DealProductOrderByRelationAggregateInputSchema;
