import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { LeadScoreHistoryOrderByRelationAggregateInputSchema } from './LeadScoreHistoryOrderByRelationAggregateInputSchema';
import { LeadScoreOrderByRelevanceInputSchema } from './LeadScoreOrderByRelevanceInputSchema';

export const LeadScoreOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadScoreOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  websiteVisits: z.lazy(() => SortOrderSchema).optional(),
  emailEngagement: z.lazy(() => SortOrderSchema).optional(),
  socialEngagement: z.lazy(() => SortOrderSchema).optional(),
  contentDownloads: z.lazy(() => SortOrderSchema).optional(),
  companySizeScore: z.lazy(() => SortOrderSchema).optional(),
  industryScore: z.lazy(() => SortOrderSchema).optional(),
  budgetScore: z.lazy(() => SortOrderSchema).optional(),
  technicalFitScore: z.lazy(() => SortOrderSchema).optional(),
  meetingAttendance: z.lazy(() => SortOrderSchema).optional(),
  responseTime: z.lazy(() => SortOrderSchema).optional(),
  interactionQuality: z.lazy(() => SortOrderSchema).optional(),
  behavioralWeight: z.lazy(() => SortOrderSchema).optional(),
  demographicWeight: z.lazy(() => SortOrderSchema).optional(),
  engagementWeight: z.lazy(() => SortOrderSchema).optional(),
  totalScore: z.lazy(() => SortOrderSchema).optional(),
  scoringMethod: z.lazy(() => SortOrderSchema).optional(),
  lastCalculated: z.lazy(() => SortOrderSchema).optional(),
  nextRecalculation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mlFeatures: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  confidenceScore: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  scoreHistory: z.lazy(() => LeadScoreHistoryOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => LeadScoreOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadScoreOrderByWithRelationInputSchema;
