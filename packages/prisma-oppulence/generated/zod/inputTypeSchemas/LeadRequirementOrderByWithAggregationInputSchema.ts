import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadRequirementCountOrderByAggregateInputSchema } from './LeadRequirementCountOrderByAggregateInputSchema';
import { LeadRequirementMaxOrderByAggregateInputSchema } from './LeadRequirementMaxOrderByAggregateInputSchema';
import { LeadRequirementMinOrderByAggregateInputSchema } from './LeadRequirementMinOrderByAggregateInputSchema';

export const LeadRequirementOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadRequirementOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LeadRequirementCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadRequirementMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadRequirementMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadRequirementOrderByWithAggregationInputSchema;
