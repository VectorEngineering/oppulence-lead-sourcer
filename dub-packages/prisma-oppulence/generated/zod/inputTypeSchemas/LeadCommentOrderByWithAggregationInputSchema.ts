import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadCommentCountOrderByAggregateInputSchema } from './LeadCommentCountOrderByAggregateInputSchema';
import { LeadCommentMaxOrderByAggregateInputSchema } from './LeadCommentMaxOrderByAggregateInputSchema';
import { LeadCommentMinOrderByAggregateInputSchema } from './LeadCommentMinOrderByAggregateInputSchema';

export const LeadCommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadCommentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  visibility: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LeadCommentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadCommentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadCommentMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadCommentOrderByWithAggregationInputSchema;
