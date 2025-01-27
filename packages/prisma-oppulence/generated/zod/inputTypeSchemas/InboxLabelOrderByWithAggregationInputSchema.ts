import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { InboxLabelCountOrderByAggregateInputSchema } from './InboxLabelCountOrderByAggregateInputSchema';
import { InboxLabelAvgOrderByAggregateInputSchema } from './InboxLabelAvgOrderByAggregateInputSchema';
import { InboxLabelMaxOrderByAggregateInputSchema } from './InboxLabelMaxOrderByAggregateInputSchema';
import { InboxLabelMinOrderByAggregateInputSchema } from './InboxLabelMinOrderByAggregateInputSchema';
import { InboxLabelSumOrderByAggregateInputSchema } from './InboxLabelSumOrderByAggregateInputSchema';

export const InboxLabelOrderByWithAggregationInputSchema: z.ZodType<Prisma.InboxLabelOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inboxId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  priority: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isSystem: z.lazy(() => SortOrderSchema).optional(),
  isRequired: z.lazy(() => SortOrderSchema).optional(),
  validFrom: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  validUntil: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => InboxLabelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InboxLabelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InboxLabelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InboxLabelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InboxLabelSumOrderByAggregateInputSchema).optional()
}).strict();

export default InboxLabelOrderByWithAggregationInputSchema;
