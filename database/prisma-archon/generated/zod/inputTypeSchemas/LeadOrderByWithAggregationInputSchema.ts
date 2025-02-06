import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LeadCountOrderByAggregateInputSchema } from './LeadCountOrderByAggregateInputSchema';
import { LeadMaxOrderByAggregateInputSchema } from './LeadMaxOrderByAggregateInputSchema';
import { LeadMinOrderByAggregateInputSchema } from './LeadMinOrderByAggregateInputSchema';

export const LeadOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  endpointId: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadOrderByWithAggregationInputSchema;
