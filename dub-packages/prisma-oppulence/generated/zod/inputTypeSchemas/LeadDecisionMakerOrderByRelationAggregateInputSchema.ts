import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadDecisionMakerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadDecisionMakerOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadDecisionMakerOrderByRelationAggregateInputSchema;
