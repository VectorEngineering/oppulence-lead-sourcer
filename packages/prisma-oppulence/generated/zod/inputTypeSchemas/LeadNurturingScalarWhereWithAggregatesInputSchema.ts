import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumNurtureStatusWithAggregatesFilterSchema } from './EnumNurtureStatusWithAggregatesFilterSchema';
import { NurtureStatusSchema } from './NurtureStatusSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadNurturingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadNurturingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadNurturingScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadNurturingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadNurturingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadNurturingScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadNurturingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  program: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  stage: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumNurtureStatusWithAggregatesFilterSchema),z.lazy(() => NurtureStatusSchema) ]).optional(),
  contentViewed: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  emailsOpened: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  websiteVisits: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  engagementScore: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  responseRate: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  lastEngagement: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  currentStep: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  completedSteps: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  nextActions: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  automationFlows: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  triggers: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadNurturingScalarWhereWithAggregatesInputSchema;
