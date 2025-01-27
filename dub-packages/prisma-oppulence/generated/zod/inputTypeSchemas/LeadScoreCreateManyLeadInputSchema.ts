import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoringMethodSchema } from './LeadScoringMethodSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const LeadScoreCreateManyLeadInputSchema: z.ZodType<Prisma.LeadScoreCreateManyLeadInput> = z.object({
  id: z.string().cuid().optional(),
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
  confidenceScore: z.number().optional().nullable()
}).strict();

export default LeadScoreCreateManyLeadInputSchema;
