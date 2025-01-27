import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCommunicationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadCommunicationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadCommunicationOrderByRelationAggregateInputSchema;
