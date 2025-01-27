import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadTimelineCountOrderByAggregateInputSchema } from './LeadTimelineCountOrderByAggregateInputSchema';
import { LeadTimelineMaxOrderByAggregateInputSchema } from './LeadTimelineMaxOrderByAggregateInputSchema';
import { LeadTimelineMinOrderByAggregateInputSchema } from './LeadTimelineMinOrderByAggregateInputSchema';

export const LeadTimelineOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadTimelineOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  milestone: z.lazy(() => SortOrderSchema).optional(),
  targetDate: z.lazy(() => SortOrderSchema).optional(),
  actualDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LeadTimelineCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadTimelineMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadTimelineMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadTimelineOrderByWithAggregationInputSchema;
