import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadTouchpointOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadTouchpointOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadTouchpointOrderByRelationAggregateInputSchema;
