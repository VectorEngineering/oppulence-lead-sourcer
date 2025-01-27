import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCommunicationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LeadCommunicationAvgOrderByAggregateInput> = z.object({
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadCommunicationAvgOrderByAggregateInputSchema;
