import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EndpointOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EndpointOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EndpointOrderByRelationAggregateInputSchema;
