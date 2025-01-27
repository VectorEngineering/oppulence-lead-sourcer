import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InboxLabelOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InboxLabelOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InboxLabelOrderByRelationAggregateInputSchema;
