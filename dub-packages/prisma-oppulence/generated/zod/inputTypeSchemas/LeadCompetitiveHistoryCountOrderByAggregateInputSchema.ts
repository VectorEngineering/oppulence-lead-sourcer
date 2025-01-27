import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCompetitiveHistoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  analysisId: z.lazy(() => SortOrderSchema).optional(),
  changes: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadCompetitiveHistoryCountOrderByAggregateInputSchema;
