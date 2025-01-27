import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NurtureStatusSchema } from './NurtureStatusSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const LeadNurturingCreateManyLeadInputSchema: z.ZodType<Prisma.LeadNurturingCreateManyLeadInput> = z.object({
  id: z.string().cuid().optional(),
  program: z.string(),
  stage: z.string(),
  status: z.lazy(() => NurtureStatusSchema).optional(),
  contentViewed: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  emailsOpened: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  websiteVisits: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  engagementScore: z.number().optional(),
  responseRate: z.number().optional(),
  lastEngagement: z.coerce.date().optional().nullable(),
  currentStep: z.number().int().optional(),
  completedSteps: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  nextActions: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  automationFlows: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  triggers: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default LeadNurturingCreateManyLeadInputSchema;
