import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadFeedbackSumOrderByAggregateInputSchema: z.ZodType<Prisma.LeadFeedbackSumOrderByAggregateInput> = z.object({
  score: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadFeedbackSumOrderByAggregateInputSchema;
