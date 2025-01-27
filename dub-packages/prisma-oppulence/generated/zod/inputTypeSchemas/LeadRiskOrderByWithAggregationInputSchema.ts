import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LeadRiskCountOrderByAggregateInputSchema } from './LeadRiskCountOrderByAggregateInputSchema';
import { LeadRiskMaxOrderByAggregateInputSchema } from './LeadRiskMaxOrderByAggregateInputSchema';
import { LeadRiskMinOrderByAggregateInputSchema } from './LeadRiskMinOrderByAggregateInputSchema';

export const LeadRiskOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadRiskOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  impact: z.lazy(() => SortOrderSchema).optional(),
  probability: z.lazy(() => SortOrderSchema).optional(),
  mitigation: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadRiskCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadRiskMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadRiskMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadRiskOrderByWithAggregationInputSchema;
