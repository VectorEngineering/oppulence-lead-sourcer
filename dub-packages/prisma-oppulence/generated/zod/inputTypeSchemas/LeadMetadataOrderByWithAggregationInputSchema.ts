import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadMetadataCountOrderByAggregateInputSchema } from './LeadMetadataCountOrderByAggregateInputSchema';
import { LeadMetadataMaxOrderByAggregateInputSchema } from './LeadMetadataMaxOrderByAggregateInputSchema';
import { LeadMetadataMinOrderByAggregateInputSchema } from './LeadMetadataMinOrderByAggregateInputSchema';

export const LeadMetadataOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadMetadataOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  category: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isSearchable: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadMetadataCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadMetadataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadMetadataMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadMetadataOrderByWithAggregationInputSchema;
