import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveAnalysisWhereInputSchema } from './LeadCompetitiveAnalysisWhereInputSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadCompetitiveHistoryListRelationFilterSchema } from './LeadCompetitiveHistoryListRelationFilterSchema';

export const LeadCompetitiveAnalysisWhereUniqueInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    leadId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    leadId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  leadId: z.string().optional(),
  AND: z.union([ z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema),z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema),z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema).array() ]).optional(),
  competitiveLandscape: z.lazy(() => JsonFilterSchema).optional(),
  ourStrengths: z.lazy(() => JsonFilterSchema).optional(),
  ourWeaknesses: z.lazy(() => JsonFilterSchema).optional(),
  competitors: z.lazy(() => JsonFilterSchema).optional(),
  competitorProducts: z.lazy(() => JsonFilterSchema).optional(),
  competitorPricing: z.lazy(() => JsonFilterSchema).optional(),
  winStrategy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  differentiators: z.lazy(() => JsonFilterSchema).optional(),
  responseStrategy: z.lazy(() => JsonFilterSchema).optional(),
  competitiveRisks: z.lazy(() => JsonFilterSchema).optional(),
  marketThreats: z.lazy(() => JsonFilterSchema).optional(),
  mitigationPlans: z.lazy(() => JsonFilterSchema).optional(),
  lastUpdated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  nextReviewDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
  analysisHistory: z.lazy(() => LeadCompetitiveHistoryListRelationFilterSchema).optional()
}).strict());

export default LeadCompetitiveAnalysisWhereUniqueInputSchema;
