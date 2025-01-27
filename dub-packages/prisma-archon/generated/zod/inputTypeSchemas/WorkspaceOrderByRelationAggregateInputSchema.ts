import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkspaceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WorkspaceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WorkspaceOrderByRelationAggregateInputSchema;
