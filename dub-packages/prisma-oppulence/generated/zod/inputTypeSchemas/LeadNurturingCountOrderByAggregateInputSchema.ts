import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadNurturingCountOrderByAggregateInputSchema: z.ZodType<Prisma.LeadNurturingCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  program: z.lazy(() => SortOrderSchema).optional(),
  stage: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  contentViewed: z.lazy(() => SortOrderSchema).optional(),
  emailsOpened: z.lazy(() => SortOrderSchema).optional(),
  websiteVisits: z.lazy(() => SortOrderSchema).optional(),
  engagementScore: z.lazy(() => SortOrderSchema).optional(),
  responseRate: z.lazy(() => SortOrderSchema).optional(),
  lastEngagement: z.lazy(() => SortOrderSchema).optional(),
  currentStep: z.lazy(() => SortOrderSchema).optional(),
  completedSteps: z.lazy(() => SortOrderSchema).optional(),
  nextActions: z.lazy(() => SortOrderSchema).optional(),
  automationFlows: z.lazy(() => SortOrderSchema).optional(),
  triggers: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadNurturingCountOrderByAggregateInputSchema;
