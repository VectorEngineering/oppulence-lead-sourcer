import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCompetitiveAnalysisMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  winStrategy: z.lazy(() => SortOrderSchema).optional(),
  lastUpdated: z.lazy(() => SortOrderSchema).optional(),
  nextReviewDate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadCompetitiveAnalysisMaxOrderByAggregateInputSchema;
