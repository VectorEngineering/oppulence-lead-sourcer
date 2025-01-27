import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadContactPreferenceCountOrderByAggregateInputSchema } from './LeadContactPreferenceCountOrderByAggregateInputSchema';
import { LeadContactPreferenceMaxOrderByAggregateInputSchema } from './LeadContactPreferenceMaxOrderByAggregateInputSchema';
import { LeadContactPreferenceMinOrderByAggregateInputSchema } from './LeadContactPreferenceMinOrderByAggregateInputSchema';

export const LeadContactPreferenceOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadContactPreferenceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  preferredTime: z.lazy(() => SortOrderSchema).optional(),
  preferredDays: z.lazy(() => SortOrderSchema).optional(),
  timezone: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadContactPreferenceCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadContactPreferenceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadContactPreferenceMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadContactPreferenceOrderByWithAggregationInputSchema;
