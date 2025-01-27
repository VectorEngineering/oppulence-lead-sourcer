import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadFeedbackMinOrderByAggregateInputSchema: z.ZodType<Prisma.LeadFeedbackMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  sentiment: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  subCategory: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  requiresFollowUp: z.lazy(() => SortOrderSchema).optional(),
  followUpAssignee: z.lazy(() => SortOrderSchema).optional(),
  followUpStatus: z.lazy(() => SortOrderSchema).optional(),
  followUpNotes: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  resolution: z.lazy(() => SortOrderSchema).optional(),
  resolvedBy: z.lazy(() => SortOrderSchema).optional(),
  resolvedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadFeedbackMinOrderByAggregateInputSchema;
