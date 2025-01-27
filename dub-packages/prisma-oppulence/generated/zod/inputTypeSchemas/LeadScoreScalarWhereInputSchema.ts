import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { EnumLeadScoringMethodFilterSchema } from './EnumLeadScoringMethodFilterSchema';
import { LeadScoringMethodSchema } from './LeadScoringMethodSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';

export const LeadScoreScalarWhereInputSchema: z.ZodType<Prisma.LeadScoreScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadScoreScalarWhereInputSchema),z.lazy(() => LeadScoreScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadScoreScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadScoreScalarWhereInputSchema),z.lazy(() => LeadScoreScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  websiteVisits: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  emailEngagement: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  socialEngagement: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  contentDownloads: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  companySizeScore: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  industryScore: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  budgetScore: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  technicalFitScore: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  meetingAttendance: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  responseTime: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  interactionQuality: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  behavioralWeight: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  demographicWeight: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  engagementWeight: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  totalScore: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  scoringMethod: z.union([ z.lazy(() => EnumLeadScoringMethodFilterSchema),z.lazy(() => LeadScoringMethodSchema) ]).optional(),
  lastCalculated: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  nextRecalculation: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  mlFeatures: z.lazy(() => JsonNullableFilterSchema).optional(),
  confidenceScore: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default LeadScoreScalarWhereInputSchema;
