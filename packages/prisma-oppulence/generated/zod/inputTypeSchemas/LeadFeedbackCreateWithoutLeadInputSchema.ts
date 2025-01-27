import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FeedbackTypeSchema } from './FeedbackTypeSchema';
import { FeedbackStatusSchema } from './FeedbackStatusSchema';

export const LeadFeedbackCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadFeedbackCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => FeedbackTypeSchema),
  source: z.string(),
  content: z.string(),
  sentiment: z.string(),
  score: z.number().optional().nullable(),
  category: z.string(),
  subCategory: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  requiresFollowUp: z.boolean().optional(),
  followUpAssignee: z.string().optional().nullable(),
  followUpStatus: z.string().optional().nullable(),
  followUpNotes: z.string().optional().nullable(),
  status: z.lazy(() => FeedbackStatusSchema).optional(),
  resolution: z.string().optional().nullable(),
  resolvedBy: z.string().optional().nullable(),
  resolvedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default LeadFeedbackCreateWithoutLeadInputSchema;
