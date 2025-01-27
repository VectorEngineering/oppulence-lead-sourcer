import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AutomationActionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AutomationActionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AutomationActionOrderByRelationAggregateInputSchema;
