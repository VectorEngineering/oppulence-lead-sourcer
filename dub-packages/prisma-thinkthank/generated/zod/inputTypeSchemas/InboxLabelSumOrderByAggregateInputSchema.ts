import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InboxLabelSumOrderByAggregateInputSchema: z.ZodType<Prisma.InboxLabelSumOrderByAggregateInput> = z.object({
  priority: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InboxLabelSumOrderByAggregateInputSchema;
