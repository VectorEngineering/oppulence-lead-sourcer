import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadFeedbackOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadFeedbackOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadFeedbackOrderByRelationAggregateInputSchema;
