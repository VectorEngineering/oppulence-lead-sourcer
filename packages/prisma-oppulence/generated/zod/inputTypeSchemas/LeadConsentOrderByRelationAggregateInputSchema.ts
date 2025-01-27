import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadConsentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadConsentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadConsentOrderByRelationAggregateInputSchema;
