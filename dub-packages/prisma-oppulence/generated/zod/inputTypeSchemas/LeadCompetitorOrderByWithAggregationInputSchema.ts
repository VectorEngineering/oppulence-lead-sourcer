import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadCompetitorCountOrderByAggregateInputSchema } from './LeadCompetitorCountOrderByAggregateInputSchema';
import { LeadCompetitorMaxOrderByAggregateInputSchema } from './LeadCompetitorMaxOrderByAggregateInputSchema';
import { LeadCompetitorMinOrderByAggregateInputSchema } from './LeadCompetitorMinOrderByAggregateInputSchema';

export const LeadCompetitorOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadCompetitorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  strengths: z.lazy(() => SortOrderSchema).optional(),
  weaknesses: z.lazy(() => SortOrderSchema).optional(),
  pricing: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  differentiator: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadCompetitorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadCompetitorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadCompetitorMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadCompetitorOrderByWithAggregationInputSchema;
