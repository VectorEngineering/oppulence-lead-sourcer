import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DealTaskOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DealTaskOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DealTaskOrderByRelationAggregateInputSchema;
