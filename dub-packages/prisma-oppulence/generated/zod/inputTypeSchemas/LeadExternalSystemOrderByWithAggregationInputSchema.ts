import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadExternalSystemCountOrderByAggregateInputSchema } from './LeadExternalSystemCountOrderByAggregateInputSchema';
import { LeadExternalSystemMaxOrderByAggregateInputSchema } from './LeadExternalSystemMaxOrderByAggregateInputSchema';
import { LeadExternalSystemMinOrderByAggregateInputSchema } from './LeadExternalSystemMinOrderByAggregateInputSchema';

export const LeadExternalSystemOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadExternalSystemOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  externalId: z.lazy(() => SortOrderSchema).optional(),
  lastSynced: z.lazy(() => SortOrderSchema).optional(),
  syncStatus: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LeadExternalSystemCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadExternalSystemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadExternalSystemMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadExternalSystemOrderByWithAggregationInputSchema;
