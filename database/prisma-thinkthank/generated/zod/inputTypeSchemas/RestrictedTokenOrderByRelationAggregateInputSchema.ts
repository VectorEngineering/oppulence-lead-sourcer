import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RestrictedTokenOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RestrictedTokenOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RestrictedTokenOrderByRelationAggregateInputSchema;
