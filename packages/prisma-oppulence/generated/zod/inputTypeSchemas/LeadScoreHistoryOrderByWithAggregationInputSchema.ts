import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadScoreHistoryCountOrderByAggregateInputSchema } from './LeadScoreHistoryCountOrderByAggregateInputSchema';
import { LeadScoreHistoryAvgOrderByAggregateInputSchema } from './LeadScoreHistoryAvgOrderByAggregateInputSchema';
import { LeadScoreHistoryMaxOrderByAggregateInputSchema } from './LeadScoreHistoryMaxOrderByAggregateInputSchema';
import { LeadScoreHistoryMinOrderByAggregateInputSchema } from './LeadScoreHistoryMinOrderByAggregateInputSchema';
import { LeadScoreHistorySumOrderByAggregateInputSchema } from './LeadScoreHistorySumOrderByAggregateInputSchema';

export const LeadScoreHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadScoreHistoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadScoreId: z.lazy(() => SortOrderSchema).optional(),
  previousScore: z.lazy(() => SortOrderSchema).optional(),
  newScore: z.lazy(() => SortOrderSchema).optional(),
  changeReason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadScoreHistoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LeadScoreHistoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadScoreHistoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadScoreHistoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LeadScoreHistorySumOrderByAggregateInputSchema).optional()
}).strict();

export default LeadScoreHistoryOrderByWithAggregationInputSchema;
