import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const YearInReviewOrderByRelationAggregateInputSchema: z.ZodType<Prisma.YearInReviewOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default YearInReviewOrderByRelationAggregateInputSchema;
