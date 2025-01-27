import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DashboardOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DashboardOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DashboardOrderByRelationAggregateInputSchema;
