import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LeadCompetitiveAnalysisOrderByWithRelationInputSchema } from './LeadCompetitiveAnalysisOrderByWithRelationInputSchema';
import { LeadCompetitiveHistoryOrderByRelevanceInputSchema } from './LeadCompetitiveHistoryOrderByRelevanceInputSchema';

export const LeadCompetitiveHistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  analysisId: z.lazy(() => SortOrderSchema).optional(),
  changes: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  analysis: z.lazy(() => LeadCompetitiveAnalysisOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadCompetitiveHistoryOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadCompetitiveHistoryOrderByWithRelationInputSchema;
