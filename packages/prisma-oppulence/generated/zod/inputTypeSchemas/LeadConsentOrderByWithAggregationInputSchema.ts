import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadConsentCountOrderByAggregateInputSchema } from './LeadConsentCountOrderByAggregateInputSchema';
import { LeadConsentMaxOrderByAggregateInputSchema } from './LeadConsentMaxOrderByAggregateInputSchema';
import { LeadConsentMinOrderByAggregateInputSchema } from './LeadConsentMinOrderByAggregateInputSchema';

export const LeadConsentOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadConsentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  expiryDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  document: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LeadConsentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadConsentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadConsentMinOrderByAggregateInputSchema).optional()
}).strict();

export default LeadConsentOrderByWithAggregationInputSchema;
