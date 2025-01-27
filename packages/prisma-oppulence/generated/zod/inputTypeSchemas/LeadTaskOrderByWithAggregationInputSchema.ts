import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadTaskCountOrderByAggregateInputSchema } from './LeadTaskCountOrderByAggregateInputSchema';
import { LeadTaskMaxOrderByAggregateInputSchema } from './LeadTaskMaxOrderByAggregateInputSchema';
import { LeadTaskMinOrderByAggregateInputSchema } from './LeadTaskMinOrderByAggregateInputSchema';

export const LeadTaskOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadTaskOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  dueDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  assignedToId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadTaskCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadTaskMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadTaskMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadTaskOrderByWithAggregationInputSchema;
