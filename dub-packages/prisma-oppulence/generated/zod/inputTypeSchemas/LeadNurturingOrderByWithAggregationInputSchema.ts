import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadNurturingCountOrderByAggregateInputSchema } from './LeadNurturingCountOrderByAggregateInputSchema';
import { LeadNurturingAvgOrderByAggregateInputSchema } from './LeadNurturingAvgOrderByAggregateInputSchema';
import { LeadNurturingMaxOrderByAggregateInputSchema } from './LeadNurturingMaxOrderByAggregateInputSchema';
import { LeadNurturingMinOrderByAggregateInputSchema } from './LeadNurturingMinOrderByAggregateInputSchema';
import { LeadNurturingSumOrderByAggregateInputSchema } from './LeadNurturingSumOrderByAggregateInputSchema';

export const LeadNurturingOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadNurturingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  program: z.lazy(() => SortOrderSchema).optional(),
  stage: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  contentViewed: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  emailsOpened: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  websiteVisits: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  engagementScore: z.lazy(() => SortOrderSchema).optional(),
  responseRate: z.lazy(() => SortOrderSchema).optional(),
  lastEngagement: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  currentStep: z.lazy(() => SortOrderSchema).optional(),
  completedSteps: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nextActions: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  automationFlows: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  triggers: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadNurturingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LeadNurturingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadNurturingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadNurturingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LeadNurturingSumOrderByAggregateInputSchema).optional()
}).strict();

export default LeadNurturingOrderByWithAggregationInputSchema;
