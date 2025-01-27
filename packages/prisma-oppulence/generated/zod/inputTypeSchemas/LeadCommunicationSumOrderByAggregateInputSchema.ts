import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCommunicationSumOrderByAggregateInputSchema: z.ZodType<Prisma.LeadCommunicationSumOrderByAggregateInput> = z.object({
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadCommunicationSumOrderByAggregateInputSchema;
