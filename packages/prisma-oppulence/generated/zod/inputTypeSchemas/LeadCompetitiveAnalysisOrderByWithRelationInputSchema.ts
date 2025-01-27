import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { LeadCompetitiveHistoryOrderByRelationAggregateInputSchema } from './LeadCompetitiveHistoryOrderByRelationAggregateInputSchema';
import { LeadCompetitiveAnalysisOrderByRelevanceInputSchema } from './LeadCompetitiveAnalysisOrderByRelevanceInputSchema';

export const LeadCompetitiveAnalysisOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  competitiveLandscape: z.lazy(() => SortOrderSchema).optional(),
  ourStrengths: z.lazy(() => SortOrderSchema).optional(),
  ourWeaknesses: z.lazy(() => SortOrderSchema).optional(),
  competitors: z.lazy(() => SortOrderSchema).optional(),
  competitorProducts: z.lazy(() => SortOrderSchema).optional(),
  competitorPricing: z.lazy(() => SortOrderSchema).optional(),
  winStrategy: z.lazy(() => SortOrderSchema).optional(),
  differentiators: z.lazy(() => SortOrderSchema).optional(),
  responseStrategy: z.lazy(() => SortOrderSchema).optional(),
  competitiveRisks: z.lazy(() => SortOrderSchema).optional(),
  marketThreats: z.lazy(() => SortOrderSchema).optional(),
  mitigationPlans: z.lazy(() => SortOrderSchema).optional(),
  lastUpdated: z.lazy(() => SortOrderSchema).optional(),
  nextReviewDate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  analysisHistory: z.lazy(() => LeadCompetitiveHistoryOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => LeadCompetitiveAnalysisOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadCompetitiveAnalysisOrderByWithRelationInputSchema;
