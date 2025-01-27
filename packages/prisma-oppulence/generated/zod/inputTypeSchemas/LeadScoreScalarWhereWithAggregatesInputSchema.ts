import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { EnumLeadScoringMethodWithAggregatesFilterSchema } from './EnumLeadScoringMethodWithAggregatesFilterSchema';
import { LeadScoringMethodSchema } from './LeadScoringMethodSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';

export const LeadScoreScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadScoreScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadScoreScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadScoreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadScoreScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadScoreScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadScoreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  websiteVisits: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  emailEngagement: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  socialEngagement: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  contentDownloads: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  companySizeScore: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  industryScore: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  budgetScore: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  technicalFitScore: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  meetingAttendance: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  responseTime: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  interactionQuality: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  behavioralWeight: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  demographicWeight: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  engagementWeight: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  totalScore: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  scoringMethod: z.union([ z.lazy(() => EnumLeadScoringMethodWithAggregatesFilterSchema),z.lazy(() => LeadScoringMethodSchema) ]).optional(),
  lastCalculated: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  nextRecalculation: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  mlFeatures: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  confidenceScore: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default LeadScoreScalarWhereWithAggregatesInputSchema;
