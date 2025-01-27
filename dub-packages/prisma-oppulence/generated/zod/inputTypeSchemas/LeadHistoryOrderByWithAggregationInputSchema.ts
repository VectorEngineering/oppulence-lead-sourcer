import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadHistoryCountOrderByAggregateInputSchema } from './LeadHistoryCountOrderByAggregateInputSchema';
import { LeadHistoryMaxOrderByAggregateInputSchema } from './LeadHistoryMaxOrderByAggregateInputSchema';
import { LeadHistoryMinOrderByAggregateInputSchema } from './LeadHistoryMinOrderByAggregateInputSchema';

export const LeadHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadHistoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  changes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  changeType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  source: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAgent: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LeadHistoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadHistoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadHistoryMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadHistoryOrderByWithAggregationInputSchema;
