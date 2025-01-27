import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InboxActivityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InboxActivityOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InboxActivityOrderByRelationAggregateInputSchema;
