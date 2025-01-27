import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoringMethodSchema } from './LeadScoringMethodSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { LeadScoreHistoryUncheckedCreateNestedManyWithoutLeadScoreInputSchema } from './LeadScoreHistoryUncheckedCreateNestedManyWithoutLeadScoreInputSchema';

export const LeadScoreUncheckedCreateInputSchema: z.ZodType<Prisma.LeadScoreUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
  websiteVisits: z.number().int().optional(),
  emailEngagement: z.number().optional(),
  socialEngagement: z.number().optional(),
  contentDownloads: z.number().int().optional(),
  companySizeScore: z.number().optional(),
  industryScore: z.number().optional(),
  budgetScore: z.number().optional(),
  technicalFitScore: z.number().optional(),
  meetingAttendance: z.number().optional(),
  responseTime: z.number().optional(),
  interactionQuality: z.number().optional(),
  behavioralWeight: z.number().optional(),
  demographicWeight: z.number().optional(),
  engagementWeight: z.number().optional(),
  totalScore: z.number().optional(),
  scoringMethod: z.lazy(() => LeadScoringMethodSchema).optional(),
  lastCalculated: z.coerce.date().optional(),
  nextRecalculation: z.coerce.date().optional().nullable(),
  mlFeatures: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  confidenceScore: z.number().optional().nullable(),
  scoreHistory: z.lazy(() => LeadScoreHistoryUncheckedCreateNestedManyWithoutLeadScoreInputSchema).optional()
}).strict();

export default LeadScoreUncheckedCreateInputSchema;
