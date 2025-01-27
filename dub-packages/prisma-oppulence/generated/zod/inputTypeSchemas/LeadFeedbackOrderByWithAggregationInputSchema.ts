import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadFeedbackCountOrderByAggregateInputSchema } from './LeadFeedbackCountOrderByAggregateInputSchema';
import { LeadFeedbackAvgOrderByAggregateInputSchema } from './LeadFeedbackAvgOrderByAggregateInputSchema';
import { LeadFeedbackMaxOrderByAggregateInputSchema } from './LeadFeedbackMaxOrderByAggregateInputSchema';
import { LeadFeedbackMinOrderByAggregateInputSchema } from './LeadFeedbackMinOrderByAggregateInputSchema';
import { LeadFeedbackSumOrderByAggregateInputSchema } from './LeadFeedbackSumOrderByAggregateInputSchema';

export const LeadFeedbackOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadFeedbackOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  sentiment: z.lazy(() => SortOrderSchema).optional(),
  score: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  subCategory: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  requiresFollowUp: z.lazy(() => SortOrderSchema).optional(),
  followUpAssignee: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  followUpStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  followUpNotes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  resolution: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  resolvedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  resolvedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadFeedbackCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LeadFeedbackAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadFeedbackMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadFeedbackMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LeadFeedbackSumOrderByAggregateInputSchema).optional()
}).strict();

export default LeadFeedbackOrderByWithAggregationInputSchema;
