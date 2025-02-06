import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { YearInReviewCountOrderByAggregateInputSchema } from './YearInReviewCountOrderByAggregateInputSchema';
import { YearInReviewAvgOrderByAggregateInputSchema } from './YearInReviewAvgOrderByAggregateInputSchema';
import { YearInReviewMaxOrderByAggregateInputSchema } from './YearInReviewMaxOrderByAggregateInputSchema';
import { YearInReviewMinOrderByAggregateInputSchema } from './YearInReviewMinOrderByAggregateInputSchema';
import { YearInReviewSumOrderByAggregateInputSchema } from './YearInReviewSumOrderByAggregateInputSchema';

export const YearInReviewOrderByWithAggregationInputSchema: z.ZodType<Prisma.YearInReviewOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  totalLinks: z.lazy(() => SortOrderSchema).optional(),
  totalClicks: z.lazy(() => SortOrderSchema).optional(),
  topLinks: z.lazy(() => SortOrderSchema).optional(),
  topCountries: z.lazy(() => SortOrderSchema).optional(),
  workspaceId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  sentAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => YearInReviewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => YearInReviewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => YearInReviewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => YearInReviewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => YearInReviewSumOrderByAggregateInputSchema).optional()
}).strict();

export default YearInReviewOrderByWithAggregationInputSchema;
