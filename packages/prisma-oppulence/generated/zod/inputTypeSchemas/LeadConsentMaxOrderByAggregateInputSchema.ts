import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadConsentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LeadConsentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  expiryDate: z.lazy(() => SortOrderSchema).optional(),
  document: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadConsentMaxOrderByAggregateInputSchema;
