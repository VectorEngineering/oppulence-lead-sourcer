import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadCommunicationCountOrderByAggregateInputSchema } from './LeadCommunicationCountOrderByAggregateInputSchema';
import { LeadCommunicationAvgOrderByAggregateInputSchema } from './LeadCommunicationAvgOrderByAggregateInputSchema';
import { LeadCommunicationMaxOrderByAggregateInputSchema } from './LeadCommunicationMaxOrderByAggregateInputSchema';
import { LeadCommunicationMinOrderByAggregateInputSchema } from './LeadCommunicationMinOrderByAggregateInputSchema';
import { LeadCommunicationSumOrderByAggregateInputSchema } from './LeadCommunicationSumOrderByAggregateInputSchema';

export const LeadCommunicationOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadCommunicationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  direction: z.lazy(() => SortOrderSchema).optional(),
  subject: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  outcome: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  duration: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scheduledAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadCommunicationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LeadCommunicationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadCommunicationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadCommunicationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LeadCommunicationSumOrderByAggregateInputSchema).optional()
}).strict();

export default LeadCommunicationOrderByWithAggregationInputSchema;
