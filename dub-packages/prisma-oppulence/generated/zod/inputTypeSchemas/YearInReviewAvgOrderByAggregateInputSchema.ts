import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const YearInReviewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.YearInReviewAvgOrderByAggregateInput> = z.object({
  year: z.lazy(() => SortOrderSchema).optional(),
  totalLinks: z.lazy(() => SortOrderSchema).optional(),
  totalClicks: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default YearInReviewAvgOrderByAggregateInputSchema;
