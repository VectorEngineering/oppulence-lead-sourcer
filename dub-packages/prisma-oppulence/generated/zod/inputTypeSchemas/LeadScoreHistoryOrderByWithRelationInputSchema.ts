import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadScoreOrderByWithRelationInputSchema } from './LeadScoreOrderByWithRelationInputSchema';
import { LeadScoreHistoryOrderByRelevanceInputSchema } from './LeadScoreHistoryOrderByRelevanceInputSchema';

export const LeadScoreHistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadScoreHistoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadScoreId: z.lazy(() => SortOrderSchema).optional(),
  previousScore: z.lazy(() => SortOrderSchema).optional(),
  newScore: z.lazy(() => SortOrderSchema).optional(),
  changeReason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  leadScore: z.lazy(() => LeadScoreOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadScoreHistoryOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadScoreHistoryOrderByWithRelationInputSchema;
